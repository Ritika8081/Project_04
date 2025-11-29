"use client"
import React from 'react'
import { getZodiacFromDate } from '../lib/zodiac'
import ZodiacAvatar from './ZodiacAvatar'

type Props = {
  name?: string
  dob?: string
  time?: string
  place?: string
  coords?: string // optional manual coords as "lat,lon"
}

import { moonEclipticLongitudeDeg, ascendantDeg, toJulianDay, zodiacFromDegrees } from '../lib/astro'

export default function DetailedAstrologyGuide({ name, dob, time, place, coords }: Props){
  const zodiac = dob ? getZodiacFromDate(new Date(dob)) : null

  const heading = name ? `Hi ${name}` : 'Astrology Guide'

  // compute moon/rising when dob + time + coords provided
  let moonInfo: any = null
  let risingInfo: any = null
  let accuracyNote = ''
  try{
    if(dob && time && coords){
      const tmatch = /^([0-2]\d):([0-5]\d)$/.exec(time)
      const cmatch = /(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/.exec(coords)
      if(tmatch && cmatch){
        const hour = Number(tmatch[1])
        const minute = Number(tmatch[2])
        const lat = Number(cmatch[1])
        const lon = Number(cmatch[2])

        // Parse DOB (YYYY-MM-DD) parts
        const dparts = dob.split('-')
        if(dparts.length === 3){
          const year = Number(dparts[0])
          const month = Number(dparts[1])
          const day = Number(dparts[2])

          // Approximate timezone offset from longitude (hours) — privacy-preserving local estimate
          const tzOffsetHours = Math.round(lon / 15)
          // Build UTC date from local birth time approx: UTC = local - tzOffset
          const utcYear = year
          const utcMonth = month - 1
          const utcDay = day
          const utcHour = hour - tzOffsetHours

          const dateUTC = new Date(Date.UTC(utcYear, utcMonth, utcDay, utcHour, minute || 0, 0))
          const JD = toJulianDay(dateUTC)

          const moonLon = moonEclipticLongitudeDeg(JD)
          const ascDeg = ascendantDeg(JD, lat, lon)

          moonInfo = zodiacFromDegrees(moonLon)
          risingInfo = zodiacFromDegrees(ascDeg)

          accuracyNote = 'Rising is time-sensitive and this uses an approximate timezone from longitude; provide exact timezone/city for higher precision.'
        }
      }
    }
  }catch(e){/* non-fatal */}

  function elementAccent(element?: string){
    if(!element) return 'bg-gray-100'
    switch(element){
      case 'Fire': return 'bg-gradient-to-br from-yellow-200 via-orange-100 to-red-50'
      case 'Earth': return 'bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50'
      case 'Air': return 'bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50'
      case 'Water': return 'bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50'
      default: return 'bg-gray-100'
    }
  }

  function psychRegulationForElement(element?: string){
    if(!element) return 'Pause and name one feeling.'
    if(element === 'Fire') return 'Take 3 slow breaths before replying to high-energy moments.'
    if(element === 'Earth') return 'Ground with a short checklist to regain calm.'
    if(element === 'Air') return 'Write one sentence to organize the thought before speaking.'
    if(element === 'Water') return 'Soften by naming a need and one small request.'
    return 'Take a breath.'
  }

  return (
    <div className="w-full">
      <div className="p-6 rounded-lg shadow-md bg-white/90">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-slate-800">{heading}</h3>
            <p className="text-sm text-slate-600 mt-1">A concise, privacy-first guide to your natal Sun (and optional Moon & Rising).</p>
          </div>
          <div className="text-sm text-slate-500">{dob ? <span>Born: {dob}{time ? ` • ${time}` : ''}</span> : <span>Enter your DOB to personalize</span>}</div>
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`col-span-1 p-4 rounded-lg border ${zodiac ? elementAccent(zodiac.element) : 'bg-white'}`}>
            {zodiac ? (
              <div className="flex flex-col items-start gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden bg-white shadow-sm flex items-center justify-center">
                    <ZodiacAvatar sign={zodiac.name} compact size={56} />
                  </div>
                  <div>
                    <div className="text-lg md:text-xl font-semibold">{zodiac.name}</div>
                    <div className="text-xs text-slate-600 mt-1">Element: <strong>{zodiac.element}</strong></div>
                  </div>
                </div>

                <div className="mt-1 text-sm">
                  <div className="font-semibold">Quick insight</div>
                  <div className="text-sm text-slate-700 mt-1">{zodiac.insight}</div>
                </div>

                <div className="mt-2 text-sm">
                  <div className="font-semibold">Mini-habit</div>
                  <div className="text-slate-700 mt-1">{zodiac.habit}</div>
                </div>
              </div>
            ) : (
              <div>
                <div className="font-semibold">Sun Sign</div>
                <p className="text-sm text-slate-700 mt-2">Enter your date of birth to reveal your Sun sign and targeted tips.</p>
              </div>
            )}
          </div>

          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border bg-white">
              <div className="font-semibold">Moon & Rising</div>
              {moonInfo ? (
                <div className="mt-2 text-sm text-slate-700">
                  <div><strong>Moon:</strong> {moonInfo.sign} — (emotional needs)</div>
                  <div className="mt-1"><strong>Rising:</strong> {risingInfo.sign} — (first impressions & communication)</div>
                  <div className="text-xs text-slate-500 mt-2">{accuracyNote}</div>
                </div>
              ) : (
                <div className="mt-2 text-sm text-slate-700">Provide birth time and coords (optional) to compute Moon & Rising. This improves interpersonal nuance.</div>
              )}
            </div>

            <div className="p-4 rounded-lg border bg-white">
              <div className="font-semibold">Practical Relationship Tips</div>
              <div className="mt-2 grid grid-cols-1 gap-2 text-sm text-slate-700">
                <div><strong>Language:</strong> Use concrete requests (I need...) before assumptions.</div>
                <div><strong>Check-in:</strong> Try a 60-second emotional check-in with a partner this week.</div>
                <div><strong>Regulation:</strong> {psychRegulationForElement(zodiac?.element)}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-3 rounded-lg bg-white border">
            <div className="font-semibold">Strengths</div>
            <div className="text-sm text-slate-700 mt-2">Curiosity, warmth, and small consistent actions often create stronger bonds.</div>
          </div>
          <div className="p-3 rounded-lg bg-white border">
            <div className="font-semibold">Challenges</div>
            <div className="text-sm text-slate-700 mt-2">Different rhythms can cause friction; naming needs early helps reduce reactivity.</div>
          </div>
          <div className="p-3 rounded-lg bg-white border">
            <div className="font-semibold">Growth</div>
            <div className="text-sm text-slate-700 mt-2">Try a 3-day micro-plan: short check-ins, shared small rituals, and a reflection prompt.</div>
          </div>
        </div>

        <div className="mt-4 text-xs text-slate-500">
          <div>Compatibility here is element-based and intentionally gentle. Try the SoulMatch tool to compare with a partner.</div>
          <div className="mt-1">Privacy: nothing leaves your device. Inputs are stored locally only if you choose to remember them.</div>
        </div>
      </div>
    </div>
  )
}
