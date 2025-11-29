"use client"
import { useState, useRef, useEffect } from 'react'
import { getZodiacFromDate, getCompatibility, signToElement } from '../../lib/zodiac'
import { toJulianDay, moonEclipticLongitudeDeg, ascendantDeg, zodiacFromDegrees } from '../../lib/astro'
import ZodiacAvatar from '../../components/ZodiacAvatar'

const SIGNS = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces']

function parseDateInput(input: string): Date | null {
  if(!input) return null
  input = input.trim()
  // Accept dd-mm-yyyy
  const dmy = /^(\d{2})-(\d{2})-(\d{4})$/.exec(input)
  if(dmy){
    const day = Number(dmy[1])
    const month = Number(dmy[2])
    const year = Number(dmy[3])
    const dt = new Date(Date.UTC(year, month-1, day))
    if(!isNaN(dt.getTime())) return dt
  }
  // Accept yyyy-mm-dd
  const ymd = /^(\d{4})-(\d{2})-(\d{2})$/.exec(input)
  if(ymd){
    const year = Number(ymd[1])
    const month = Number(ymd[2])
    const day = Number(ymd[3])
    const dt = new Date(Date.UTC(year, month-1, day))
    if(!isNaN(dt.getTime())) return dt
  }
  // fallback: try Date constructor
  const tryDt = new Date(input)
  if(!isNaN(tryDt.getTime())) return tryDt
  return null
}

export default function SoulMatch(){
  const [yourDobRaw, setYourDobRaw] = useState('')
  const [partnerDobRaw, setPartnerDobRaw] = useState('')
  const [partnerSign, setPartnerSign] = useState('')
  const [timeRaw, setTimeRaw] = useState('')
  const [coordsRaw, setCoordsRaw] = useState('')
  const [unlockDeep, setUnlockDeep] = useState(false)
  const [tone, setTone] = useState<'new'|'confused'|'fight'|'grow' | ''>('')
  const [focus, setFocus] = useState<'communication'|'trust'|'future'|'needs' | ''>('')
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const loadingRef = useRef<number | null>(null)
  const [miniPlan, setMiniPlan] = useState<string[] | null>(null)
  const [shareSvg, setShareSvg] = useState<string | null>(null)
  const [shareImgUrl, setShareImgUrl] = useState<string | null>(null)
  const [sharing, setSharing] = useState(false)
  const [copySuccess, setCopySuccess] = useState<string | null>(null)
  const [reflection, setReflection] = useState<string | null>(null)
  const [reflectionSubmitted, setReflectionSubmitted] = useState(false)
  const [partnerPerspective, setPartnerPerspective] = useState(false)
  const displayPrimary = result ? (partnerPerspective ? result.partner : result.yours) : null
  const displayOther = result ? (partnerPerspective ? result.yours : result.partner) : null

  // Try to resolve a place name to coordinates using OpenStreetMap Nominatim (client-side).
  // Returns { lat, lon } or null.
  async function resolveCoordsFromPlace(q: string){
    if(!q) return null
    // quick check if user already provided lat,lon
    const cm = /(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/.exec(q)
    if(cm) return { lat: Number(cm[1]), lon: Number(cm[2]) }
    try{
      const url = 'https://nominatim.openstreetmap.org/search?format=json&limit=1&q=' + encodeURIComponent(q)
      const res = await fetch(url, { headers: { 'Accept': 'application/json' } })
      const body = await res.json()
      if(Array.isArray(body) && body.length > 0){
        const it = body[0]
        if(it && it.lat && it.lon) return { lat: Number(it.lat), lon: Number(it.lon) }
      }
    }catch(e){
      // ignore network errors — fallback to null
    }
    return null
  }

  function buildReport(yours: any, partner: any, compatibility: any, toneChoice: string, focusChoice: string, perspective: 'you'|'partner' = 'you'){
    return (
      <div className="mt-4 p-4 rounded bg-white/90 space-y-4">
        <section>
          {(() => {
            const score = computeCompatibilityScore(yours.name, partner.name, compatibility)
            const primary = perspective === 'partner' ? partner : yours
            const other = perspective === 'partner' ? yours : partner
            return (
              <div className="rounded-lg p-4 bg-gradient-to-tr from-white to-gray-50 border">
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="flex-none">
                      <div className="w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center bg-gradient-to-tr from-pink-400 to-purple-600 text-white text-2xl md:text-3xl font-bold shadow">{score}%</div>
                    </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">How You Two Feel Together</h3>
                      {perspective === 'partner' ? <div className="text-xs text-indigo-600">Viewing: Partner’s perspective</div> : null}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{scoreMessage(score)}</div>

                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3 rounded bg-white border">
                        <div className="font-semibold flex items-center gap-2"><span className="text-xl">✨</span> When it’s good</div>
                        <ul className="mt-2 list-disc list-inside text-sm space-y-1">
                          <li>{toneChoice === 'new' ? 'You two are full of warm curiosity — everything feels possible and tender.' : toneChoice === 'confused' ? 'You catch small moments of connection; clarity is beginning to appear.' : toneChoice === 'fight' ? 'You love deeply — even when one of you acts tough, the care runs beneath the surface.' : toneChoice === 'grow' ? 'You are learning each other; steady practice is bringing hopeful change.' : 'You two love and care for each other — there is a steady, loyal warmth here.'}</li>
                        </ul>
                      </div>

                      <div className="p-3 rounded bg-white border">
                        <div className="font-semibold flex items-center gap-2"><span className="text-xl">⚠️</span> When it’s hard</div>
                        <ul className="mt-2 list-disc list-inside text-sm space-y-1">
                          <li>{toneChoice === 'new' ? 'Excitement or nerves can make small missteps feel bigger than they are.' : toneChoice === 'confused' ? 'Mixed signals can create doubt — gentle clarifying questions help you reconnect.' : toneChoice === 'fight' ? 'One of you moves faster while the other needs reassurance — feelings can get louder than words.' : toneChoice === 'grow' ? 'Old patterns surface under stress; keep leaning into small check-ins and agreed practices.' : 'Sometimes you move at different speeds; naming needs helps you bridge the gap.'}</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-3 text-xs italic text-gray-600">This isn’t incompatibility — it’s learning each other’s pace.</div>
                  </div>
                </div>
              </div>
            )
          })()}
        </section>

        <section>
          <div className="flex flex-col gap-4">
            <div className="flex items-center my-2">
              <div className="flex-1 h-px bg-gray-200"></div>
              <div className="px-3 text-xs text-gray-400 font-medium">Strengths</div>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            <div className="p-4 rounded bg-white/95 border">
              <div className="flex items-start gap-3">
                <div className="text-2xl">❤️</div>
                <div>
                  <div className="font-semibold">Strengths</div>
                  <div className="mt-2 text-sm text-slate-700">Passion + emotional insight{focusChoice === 'trust' ? ' — a reliable anchor when you show care.' : ''}</div>
                  <div className="mt-2 text-sm text-slate-700">Steady loyalty and follow-through{focusChoice === 'future' ? ' — a base for planning together.' : ''}</div>
                  <div className="mt-2 text-sm text-slate-700">Shared sense of “we’re in this together”{focusChoice === 'communication' ? ' — nurture this with curious questions.' : ''}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center my-2">
              <div className="flex-1 h-px bg-gray-200"></div>
              <div className="px-3 text-xs text-gray-400 font-medium">Challenges</div>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            <div className="p-4 rounded bg-white/95 border">
              <div className="flex items-start gap-3">
                <div className="text-2xl">⚡</div>
                <div>
                  <div className="font-semibold">Challenges</div>
                  <ul className="mt-2 list-disc ml-5 text-sm space-y-1 text-slate-700">
                    <li>Fast reactions can clash with deep feelings</li>
                    <li>Assuming instead of naming your needs</li>
                    <li>Different processing speeds under stress</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-center my-2">
              <div className="flex-1 h-px bg-gray-200"></div>
              <div className="px-3 text-xs text-gray-400 font-medium">Plan</div>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            <div className="p-4 rounded bg-white/95 border">
              <div className="flex items-start gap-3">
                <div className="text-2xl">🌱</div>
                <div>
                  <div className="font-semibold">Growth — 4-week starter</div>
                  <ol className="list-decimal ml-5 mt-2 text-sm text-slate-700 space-y-1">
                    <li><strong>Week 1</strong> — Curiosity: short daily questions to open conversation.</li>
                    <li><strong>Week 2</strong> — Ritual: small shared routines to build reliability.</li>
                    <li><strong>Week 3</strong> — Pause & express: name needs before reacting.</li>
                    <li><strong>Week 4</strong> — Gratitude: nightly appreciation to stabilize warmth.</li>
                  </ol>
                  <div className="mt-2 text-xs text-gray-600">Tip: pick one micro-habit from Week 1 and practice it daily.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Emotional Regulation moved out as its own full-width block (stacked, not columns) */}
          <div className="mt-4 p-4 rounded bg-white/95 border">
            <div className="font-semibold">Emotional Regulation — Practical</div>
            <div className="mt-3 flex flex-col gap-3">
              {(() => {
                const yoursPsych = psychRegulationForElement(yours?.element)
                const partnerPsych = psychRegulationForElement(partner?.element)
                return (
                  <>
                    <div className="p-3 rounded bg-white/50 border">
                      <div className="font-semibold">You — {yours?.name || 'You'}</div>
                      <div className="text-xs italic mt-1 text-slate-600">{yoursPsych.why}</div>
                      <ul className="mt-2 list-disc ml-5 text-sm text-slate-700 space-y-1">
                        {yoursPsych.practices.map((p: string, i: number) => (
                          <li key={i}>{p}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 rounded bg-white/50 border">
                      <div className="font-semibold">Partner — {partner?.name || 'Partner'}</div>
                      <div className="text-xs italic mt-1 text-slate-600">{partnerPsych.why}</div>
                      <ul className="mt-2 list-disc ml-5 text-sm text-slate-700 space-y-1">
                        {partnerPsych.practices.map((p: string, i: number) => (
                          <li key={i}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                )
              })()}

              <div className="text-xs text-gray-600">This blends emotional-intelligence research with sign-level tendencies — practical, evidence-informed ideas rather than predictions.</div>
            </div>
          </div>
        </section>

        <section>
          <h4 className="font-semibold">💫 Micro-Reflection</h4>
          <p className="mt-2">How this relationship often feels:</p>
          <ul className="mt-2 list-disc ml-5">
            <li>❤️ Warm & intense</li>
            <li>🔥 Passionate & alive</li>
            <li>🌧 Stormy when misunderstood</li>
          </ul>
          <p className="mt-2 italic">Two different languages — one real love.</p>
        </section>

        <section className="mt-4">
          <div className="font-semibold">Want to improve communication this week?</div>
          <p className="text-sm mt-1">Get a gentle 3-day mini plan tailored to your focus to turn small practice into real change.</p>
          <div className="mt-3 flex flex-col sm:flex-row gap-2">
            <button onClick={()=>generate3DayMiniPlan(focusChoice, toneChoice)} className="px-3 py-2 rounded bg-pink-500 text-white text-sm w-full sm:w-auto">Get 3-day mini plan</button>
            <button onClick={()=>{ setMiniPlan(null) }} className="px-3 py-2 rounded bg-gray-200 text-sm w-full sm:w-auto">Clear</button>
          </div>

          {miniPlan ? (
            <div id="mini-plan-card" className="mt-3 p-3 rounded bg-white/95 text-sm space-y-2">
              {miniPlan.map((item, idx) => (
                <div key={idx}><strong>Day {idx+1}:</strong> {item}</div>
              ))}
            </div>
          ) : null}
        </section>

        <section>
          <h4 className="font-semibold">🌙 Curious About a Deeper Layer?</h4>
          <p className="mt-2">Unlock moon & rising signs (optional) to understand emotional needs & communication style more accurately.</p>
        </section>

        <section>
          <p className="mt-2 font-medium">Love isn’t about perfect matching — it’s about learning each other. You two have real potential. Handle with care, not speed.</p>
        </section>
        <section className="mt-4">
          <div className="font-semibold">Before you leave… How did this feel?</div>
          <p className="text-sm mt-1 text-gray-600">Your quick answer helps us improve the experience.</p>
          <div className="mt-3 flex flex-col sm:flex-row gap-2">
            {['Accurate','Made me think','I learned something new','Hmm not sure'].map((opt)=>{
              const active = reflection === opt
              return (
                <button key={opt} onClick={()=>{ setReflection(opt); setReflectionSubmitted(true); saveReflection(opt, { yours, partner, compatibility, tone: toneChoice, focus: focusChoice }) }} className={`px-3 py-2 rounded border text-sm ${active ? 'bg-pink-100 border-pink-300' : 'bg-white'}`}>
                  {opt}
                </button>
              )
            })}
          </div>
          {reflectionSubmitted ? (
            <div className="mt-2 text-xs text-green-700">Thanks — your answer was saved for this session.</div>
          ) : null}
        </section>
      </div>
    )
  }

  function elementSpeak(el: string){
    switch(el){
      case 'Fire': return 'initiative and warmth'
      case 'Earth': return 'stability and care'
      case 'Air': return 'ideas and curious conversation'
      case 'Water': return 'emotional depth and empathy'
      default: return 'a unique quality'
    }
  }

  function elementAccent(element?: string){
    if(!element) return 'bg-gradient-to-tr from-gray-200 to-gray-300 text-gray-800'
    switch(element.toLowerCase()){
      case 'fire': return 'bg-gradient-to-tr from-orange-300 to-pink-400 text-white'
      case 'water': return 'bg-gradient-to-tr from-blue-300 to-indigo-400 text-white'
      case 'air': return 'bg-gradient-to-tr from-sky-300 to-emerald-300 text-white'
      case 'earth': return 'bg-gradient-to-tr from-emerald-300 to-lime-300 text-white'
      default: return 'bg-gradient-to-tr from-gray-200 to-gray-300 text-gray-800'
    }
  }

  function computeCompatibilityScore(signA: string, signB: string, compatibility: any){
    // Base score
    let score = 60
    const same = signA === signB
    if(same) score += 20

    // Map zodiac sign -> element using shared helper
    const elemA = signToElement(signA)
    const elemB = signToElement(signB)

    // boost/deduct based on wording in compatibility.summary
    const s = (compatibility && compatibility.summary) ? String(compatibility.summary).toLowerCase() : ''
    if(s.includes('harmonious') || s.includes('harmonic')) score += 10
    if(s.includes('high energy') || s.includes('creative spark')) score += 5
    if(s.includes('stable') || s.includes('nurturing')) score += 5
    if(s.includes('tension') || s.includes('clashes') || s.includes('conflicts')) score -= 10
    if(s.includes('miscommunications')) score -= 5

    // element-based heuristics (use elements, not sign strings)
    if(elemA && elemB){
      if(elemA === elemB && !same) score += 8 // same element tends to feel naturally compatible
      const fireAir = (elemA === 'Fire' || elemA === 'Air' || elemB === 'Fire' || elemB === 'Air')
      if(fireAir && elemA !== elemB) score += 5
    }

    // clamp
    if(score < 30) score = 30
    if(score > 95) score = 95
    return Math.round(score)
  }

  function scoreMessage(score: number){
    if(score >= 85) return 'Radiant synergy — there’s a joyful spark and reliable warmth when you show up for each other.'
    if(score >= 70) return 'Strong potential — with patient communication this connection can deepen beautifully.'
    if(score >= 55) return 'Balanced — good chemistry, some work needed to bridge differences; small rituals help.'
    if(score >= 40) return 'Tender work required — there’s real feeling, but you’ll need steady practices to stay close.'
    return 'Fragile but real — approach gently, name needs often, and celebrate small wins.'
  }

  // Psychology + EI layer: element-aware regulation tips
  function psychRegulationForElement(element?: string){
    switch((element||'').toLowerCase()){
      case 'fire':
        return {
          title: 'Move & Express',
          why: 'Fire signs often regulate by releasing energy through movement and direct expression.',
          practices: [
            'Daily short bursts of movement (walk, dance, push-ups) to shift intensity.',
            'Speak your feelings in short, concrete “I feel… because…” statements.'
          ]
        }
      case 'water':
        return {
          title: 'Validate & Name Emotions',
          why: 'Water signs soothe through being seen and naming emotional states.',
          practices: [
            'Name the feeling: “I’m feeling X right now” and invite the partner to mirror it.',
            'Use gentle validation language: “That makes sense — I get why you’d feel that.”'
          ]
        }
      case 'air':
        return {
          title: 'Reflect & Reframe',
          why: 'Air signs regulate with language, labeling thoughts and creating mental distance.',
          practices: [
            'Try thought-labeling: “That thought is just one possible story.”',
            'Use a short 3-minute discussion to clarify meanings and reduce misinterpretation.'
          ]
        }
      case 'earth':
        return {
          title: 'Ground & Routine',
          why: 'Earth signs find safety in steady routines and predictable acts of care.',
          practices: [
            'Create a small reliable ritual (shared check-in, a daily message) to build trust.',
            'Use grounding techniques: 5 senses check, steady breathing, and small tasks.'
          ]
        }
      default:
        return {
          title: 'Simple Regulation',
          why: 'Different people find different paths — try naming needs, a short pause, or a small ritual.',
          practices: [
            'Pause for 3 deep breaths before responding.',
            'Name one need and one small action that would help.'
          ]
        }
    }
  }

  function generate3DayMiniPlan(focusChoice: string, toneChoice: string){
    // Create gentle 3-day micro-tasks tailored to focus and tone
    const plan: string[] = []
    if(focusChoice === 'communication'){
      plan.push('Day 1 — 10-minute curiosity check-in: each person shares one highlight and one small worry.')
      plan.push('Day 2 — Active listening practice: one speaks for 3 minutes while the other paraphrases back.')
      plan.push('Day 3 — Appreciation note: each shares one thing the other did that felt supportive this week.')
    } else if(focusChoice === 'trust'){
      plan.push('Day 1 — Small reliability act: pick one tiny promise and complete it.')
      plan.push('Day 2 — Share a low-stakes vulnerability and one concrete way the partner can help.')
      plan.push('Day 3 — A brief ritual: confirm one plan for the week and one accountability step.')
    } else if(focusChoice === 'future'){
      plan.push('Day 1 — List one shared value and one small step toward it.')
      plan.push('Day 2 — Mini planning session: allocate 15 minutes to brainstorm one joint goal.')
      plan.push('Day 3 — Commit to one tiny shared action and schedule it in calendar.')
    } else if(focusChoice === 'needs'){
      plan.push('Day 1 — Name one need each and a small way the partner can offer it.')
      plan.push('Day 2 — Practice asking for what you need in a specific, concrete way.')
      plan.push('Day 3 — Reflect together: what worked and what felt safe?')
    } else {
      plan.push('Day 1 — Quick curiosity check-in: share one thing that mattered today.')
      plan.push('Day 2 — Small appreciative action: say thank you and name why.')
      plan.push('Day 3 — Plan one tiny shared moment (10 minutes) to connect.')
    }

    // tone can slightly tweak wording (softly)
    if(toneChoice === 'fight'){
      for(let i=0;i<plan.length;i++) plan[i] = plan[i].replace(/\b(you|each)\b/gi, 'you both')
    } else if(toneChoice === 'new'){
      plan[0] = 'Day 1 — A gentle curiosity check: ask one open question and listen.'
    }

    setMiniPlan(plan)
    // scroll to plan (small UX nicety)
    setTimeout(()=>{
      const el = document.getElementById('mini-plan-card')
      if(el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 120)
  }

  function makeSimpleSignGlyph(sign: string){
    // Use short label for signs; emoji fallback
    const glyphs: Record<string,string> = {
      Aries: '♈', Taurus: '♉', Gemini: '♊', Cancer: '♋', Leo: '♌', Virgo: '♍', Libra: '♎', Scorpio: '♏', Sagittarius: '♐', Capricorn: '♑', Aquarius: '♒', Pisces: '♓'
    }
    return glyphs[sign] || sign.slice(0,2)
  }

  function buildShareSVG(data: any){
    const width = 1200
    const height = 630
    const yours = data.yours || { name: '—' }
    const partner = data.partner || { name: '—' }
    const score = computeCompatibilityScore(yours.name, partner.name, data.compatibility || {})
    const phrase = scoreMessage(score)

    const bg = `linear-gradient(135deg,#fff7fb 0%,#fef6e6 100%)`

    // simple SVG with zodiac glyphs, names, score and phrase
    const svg = `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'>
    <defs>
      <style><![CDATA[
        .title{font:700 42px/1.1 Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; fill:#111827}
        .score{font:700 60px/1 Inter, system-ui; fill:#c026d3}
        .sub{font:400 20px/1 Inter, system-ui; fill:#374151}
        .small{font:400 16px/1 Inter, system-ui; fill:#6b7280}
      ]]></style>
    </defs>
    <rect width='100%' height='100%' rx='24' fill='#fff' />
    <g>
      <rect x='36' y='36' width='${width-72}' height='${height-72}' rx='18' fill='#fff' stroke='#f3e8ff' stroke-width='2'/>
      <text x='80' y='110' class='title'>SoulMatch</text>
      <text x='80' y='165' class='sub'>${escapeXml(yours.name)} × ${escapeXml(partner.name)}</text>

      <g transform='translate(80,200)'>
        <circle cx='60' cy='60' r='56' fill='#fff0f6' stroke='#fecaca' stroke-width='2'/>
        <text x='60' y='78' text-anchor='middle' font-size='42' fill='#b91c1c'>${escapeXml(makeSimpleSignGlyph(yours.name))}</text>
        <text x='60' y='120' text-anchor='middle' class='small'>${escapeXml(yours.name)}</text>

        <rect x='160' y='18' width='420' height='160' rx='12' fill='#faf5ff' stroke='#e9d5ff' />
        <text x='360' y='80' text-anchor='middle' class='score'>${score}%</text>
        <text x='360' y='110' text-anchor='middle' class='sub' fill='#4b5563'>Compatibility Energy</text>
      </g>

      <g transform='translate(640,200)'>
        <circle cx='60' cy='60' r='56' fill='#f0fdf4' stroke='#bbf7d0' stroke-width='2'/>
        <text x='60' y='78' text-anchor='middle' font-size='42' fill='#065f46'>${escapeXml(makeSimpleSignGlyph(partner.name))}</text>
        <text x='60' y='120' text-anchor='middle' class='small'>${escapeXml(partner.name)}</text>
      </g>

      <foreignObject x='80' y='380' width='1040' height='200'>
        <div xmlns='http://www.w3.org/1999/xhtml' style='font-family: Inter, system-ui; color:#374151; font-size:20px; line-height:1.3;'>
          <div style='font-weight:600; margin-bottom:8px;'>${escapeXml(phrase)}</div>
          <div style='color:#6b7280; font-size:16px;'>“${escapeXml((data.compatibility && data.compatibility.summary) || 'Different rhythms, but a strong pull.') }”</div>
        </div>
      </foreignObject>
    </g>
  </svg>`
    return svg
  }

  function escapeXml(s: string){
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')
  }

  async function svgToPngBlob(svg: string, width = 1200, height = 630){
    return await new Promise<Blob | null>((resolve)=>{
      const img = new Image()
      const svg64 = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg)
      img.onload = ()=>{
        try{
          const c = document.createElement('canvas')
          c.width = width
          c.height = height
          const ctx = c.getContext('2d')
          if(!ctx){ resolve(null); return }
          ctx.fillStyle = '#fff'
          ctx.fillRect(0,0,width,height)
          ctx.drawImage(img,0,0,width,height)
          c.toBlob((b)=>resolve(b), 'image/png')
        }catch(e){ resolve(null) }
      }
      img.onerror = ()=> resolve(null)
      img.src = svg64
    })
  }

  async function createShareCard(data: any){
    setSharing(true)
    try{
      const svg = buildShareSVG(data)
      setShareSvg(svg)
      const blob = await svgToPngBlob(svg)
      if(blob){
        const url = URL.createObjectURL(blob)
        if(shareImgUrl) URL.revokeObjectURL(shareImgUrl)
        setShareImgUrl(url)
      }
    }finally{
      setSharing(false)
    }
  }

  async function downloadShare(){
    if(!shareImgUrl) return
    const a = document.createElement('a')
    a.href = shareImgUrl
    a.download = 'soulmatch-card.png'
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  async function copyShareImage(){
    if(!shareImgUrl) return false
    try{
      const r = await fetch(shareImgUrl)
      const b = await r.blob()
      // try Clipboard API
      // @ts-ignore
      if(navigator.clipboard && (window as any).ClipboardItem){
        // @ts-ignore
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': b })])
        return true
      }
    }catch(e){ /* ignore */ }
    return false
  }

  // cleanup object URL when it changes/unmounts
  useEffect(()=>{
    return ()=>{
      if(shareImgUrl) URL.revokeObjectURL(shareImgUrl)
    }
  }, [shareImgUrl])

  function saveReflection(choice: string, snapshot: any){
    try{
      const key = 'soulmatch_reflections'
      const now = new Date().toISOString()
      const entry = { choice, timestamp: now, snapshot }
      const raw = sessionStorage.getItem(key)
      const arr = raw ? JSON.parse(raw) : []
      arr.push(entry)
      sessionStorage.setItem(key, JSON.stringify(arr))
    }catch(e){
      // ignore storage errors
      console.warn('Failed to save reflection', e)
    }
  }

  function handleCheck(e: React.FormEvent){
    e.preventDefault()
    setResult(null)
    // show soft reading animation before computing
    if(loadingRef.current){
      window.clearTimeout(loadingRef.current)
      loadingRef.current = null
    }
    const yourDt = parseDateInput(yourDobRaw)
    const partnerDt = parseDateInput(partnerDobRaw)

    const yours = yourDt ? getZodiacFromDate(yourDt) : null

    let partner: any = null
    if(partnerSign){
      partner = { name: partnerSign, element: undefined, insight: '' }
    } else if(partnerDt){
      partner = getZodiacFromDate(partnerDt)
    }

    if(!yours || !partner){
      setResult({ error: 'Please provide your DOB and either a partner DOB or pick their sign. Use dd-mm-yyyy or yyyy-mm-dd.' })
      return
    }

    // Start loading animation and compute after 1.5s
    setLoading(true)
    loadingRef.current = window.setTimeout(()=>{
      (async ()=>{
        try{
          const compatibility = getCompatibility(yours.name, partner.name)

          // compute moon/rising if unlocked and we have time + coords
          let deep: any = null
          try{
            if(unlockDeep && timeRaw && coordsRaw && yourDt){
              const tmatch = /^([0-2]\d):([0-5]\d)$/.exec(timeRaw)
              let lat: number | null = null
              let lon: number | null = null

              // first try lat,lon inline
              const cmatch = /(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/.exec(coordsRaw)
              if(cmatch){
                lat = Number(cmatch[1])
                lon = Number(cmatch[2])
              } else {
                // attempt client-side geocoding of place name
                const resolved = await resolveCoordsFromPlace(coordsRaw)
                if(resolved){ lat = resolved.lat; lon = resolved.lon }
              }

              if(tmatch && lat !== null && lon !== null){
                const hour = Number(tmatch[1])
                const minute = Number(tmatch[2])

                // approximate timezone offset from longitude
                const tzOffsetHours = Math.round(lon / 15)
                // use yourDt which is a Date (UTC midnight for the day); build UTC date
                const year = yourDt.getUTCFullYear()
                const month = yourDt.getUTCMonth()
                const day = yourDt.getUTCDate()
                const utcDate = new Date(Date.UTC(year, month, day, hour - tzOffsetHours, minute || 0, 0))
                const JD = toJulianDay(utcDate)
                const moonLon = moonEclipticLongitudeDeg(JD)
                const asc = ascendantDeg(JD, lat, lon)
                deep = { moon: zodiacFromDegrees(moonLon), asc: zodiacFromDegrees(asc) }
              }
            }
          }catch(e){ /* ignore deep calc errors */ }

          setResult({ yours, partner, compatibility, deep, tone, focus })
        }finally{
          setLoading(false)
          loadingRef.current = null
        }
      })()
    }, 1500)
  }

  useEffect(()=>{
    return ()=>{
      if(loadingRef.current) window.clearTimeout(loadingRef.current)
    }
  },[])

  return (
    <div className="w-full min-h-screen bg-gray-50 py-10 px-6">
      <div className="mx-auto w-full max-w-5xl">
      <h2 className="text-3xl font-extrabold mb-1">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700">SoulMatch</span>
        <span className="ml-2 text-base font-medium text-gray-700">— Understand Your Connection, Deeply</span>
      </h2>
      <p className="soft-microcopy text-gray-600">A gentle, colorful space to explore how you complement each other — not predictions, but clarity & growth.</p>

      {/* Emotional hook + tone buttons */}
      <div className="mt-4 p-3 rounded-lg" style={{background: 'linear-gradient(90deg, rgba(252,231,243,0.6), rgba(237,233,255,0.6))', boxShadow: '0 6px 18px rgba(15,23,42,0.04)'}}>
        <div className="font-medium">What are you exploring today?</div>
        <div className="mt-2 flex gap-2 flex-wrap">
          <button type="button" onClick={()=>setTone('new')} className={`px-3 py-1 rounded ${tone==='new'?'bg-gradient-to-tr from-pink-300 to-pink-500 text-white':'bg-white/90'}`}>💕 New connection</button>
          <button type="button" onClick={()=>setTone('confused')} className={`px-3 py-1 rounded ${tone==='confused'?'bg-gradient-to-tr from-pink-300 to-pink-500 text-white':'bg-white/90'}`}>🥺 We’re confused</button>
          <button type="button" onClick={()=>setTone('fight')} className={`px-3 py-1 rounded ${tone==='fight'?'bg-gradient-to-tr from-orange-300 to-pink-400 text-white':'bg-white/90'}`}>💔 After a fight</button>
          <button type="button" onClick={()=>setTone('grow')} className={`px-3 py-1 rounded ${tone==='grow'?'bg-gradient-to-tr from-emerald-300 to-lime-400 text-white':'bg-white/90'}`}>🌱 We’re trying to grow</button>
        </div>
        <div className="mt-2 text-xs text-gray-600">Selecting one slightly changes the tone of the results, so you feel understood.</div>
      </div>

      {/* Small reflection micro-input to personalize the reading */}
      <div className="mt-3 p-3 rounded bg-white/90">
        <div className="font-medium">What do you want to understand better?</div>
        <div className="mt-2 flex gap-2 flex-wrap">
              <button type="button" onClick={()=>setFocus('communication')} className={`px-3 py-1 rounded ${focus==='communication'?'bg-gradient-to-tr from-sky-200 to-pink-200 text-white':'bg-white/90'}`}>○ Communication</button>
            <button type="button" onClick={()=>setFocus('trust')} className={`px-3 py-1 rounded ${focus==='trust'?'bg-gradient-to-tr from-emerald-200 to-emerald-400 text-white':'bg-white/90'}`}>○ Trust & security</button>
            <button type="button" onClick={()=>setFocus('future')} className={`px-3 py-1 rounded ${focus==='future'?'bg-gradient-to-tr from-yellow-200 to-orange-300 text-white':'bg-white/90'}`}>○ Future direction</button>
            <button type="button" onClick={()=>setFocus('needs')} className={`px-3 py-1 rounded ${focus==='needs'?'bg-gradient-to-tr from-indigo-200 to-sky-300 text-white':'bg-white/90'}`}>○ Emotional needs</button>
        </div>
        <div className="mt-2 text-xs text-gray-600">Selecting this slightly tailors the wording and the suggested practices so it feels more personal.</div>
      </div>

      <form className="mt-4 space-y-3" onSubmit={handleCheck} aria-label="SoulMatch form">
        <div>
          <label htmlFor="yourDob" className="block text-sm">Your Birthday 🎂</label>
          <input id="yourDob" value={yourDobRaw} onChange={e=>setYourDobRaw(e.target.value)} placeholder="dd-mm-yyyy (e.g. 15-08-1990)" className="mt-1 rounded-md p-2 w-full" pattern="\d{2}-\d{2}-\d{4}" inputMode="numeric" aria-describedby="yourDobHelp" />
          <div id="yourDobHelp" className="text-xs text-gray-600 mt-1">So we understand your natural energy. Format: <code>dd-mm-yyyy</code>.</div>
        </div>

        <div>
          <label htmlFor="partnerDob" className="block text-sm">Their Birthday 💕</label>
          <input id="partnerDob" value={partnerDobRaw} onChange={e=>setPartnerDobRaw(e.target.value)} placeholder="dd-mm-yyyy (e.g. 05-05-1988)" className="mt-1 rounded-md p-2 w-full" pattern="\d{2}-\d{2}-\d{4}" inputMode="numeric" aria-describedby="partnerDobHelp" />
          <div id="partnerDobHelp" className="text-xs text-gray-600 mt-1">To see how your energies interact. You can also pick their sun sign.</div>
        </div>

        <div>
          <label className="block text-sm">or choose their sun-sign</label>
          <select value={partnerSign} onChange={e=>setPartnerSign(e.target.value)} className="mt-1 rounded-md p-2 w-full">
            <option value="">-- pick --</option>
            {SIGNS.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="birthTime" className="block text-sm">Birth Time (optional)</label>
          <input id="birthTime" value={timeRaw} onChange={e=>setTimeRaw(e.target.value)} placeholder="HH:MM (24h) e.g. 07:30" className="mt-1 rounded-md p-2 w-full" pattern="([01]\d|2[0-3]):[0-5]\d" inputMode="numeric" aria-describedby="birthTimeHelp" />
          <div id="birthTimeHelp" className="text-xs text-gray-600 mt-1">Provide local birth time to unlock Moon & Rising when used with coords. Format: <code>HH:MM</code>.</div>
        </div>

        <div>
          <label htmlFor="coords" className="block text-sm">Birth place (optional)</label>
          <input id="coords" value={coordsRaw} onChange={e=>setCoordsRaw(e.target.value)} placeholder="City, region or place name (e.g. New Delhi)" className="mt-1 rounded-md p-2 w-full" aria-describedby="coordsHelp" />
          <div id="coordsHelp" className="text-xs text-gray-600 mt-1">Type a location name — we'll resolve coordinates & timezone for you (optional). Geocoding happens only when you ask to unlock deeper readings.</div>
        </div>

        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={unlockDeep} onChange={e=>setUnlockDeep(e.target.checked)} /> <span>Unlock moon & rising (optional)</span></label>
          <div className="text-xs text-gray-600">Rising is time-sensitive. If you enable this, we estimate timezone from longitude (approx).</div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button type="submit" className="large-cta w-full sm:w-auto shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition" aria-label="Show our connection">🌟 Show Our Connection</button>
        </div>
      </form>

      <div className="mt-3 text-xs text-gray-600">No sign-in needed, nothing saved — just honest insight for your heart.</div>

      {loading && (
        <div className="mt-6 p-6 rounded bg-white/90 text-center animate-pulse">
          <div className="text-lg font-medium">Aligning stars…</div>
          <div className="mt-2">Listening to your energies… ✨</div>
        </div>
      )}

      {result && (
        result.error ? (
          <div className="mt-4 p-4 rounded bg-white/90"><p className="text-sm text-red-600">{result.error}</p></div>
        ) : (
          <div>
            {/* concise top summary for quick scan */}
            <div className="mt-4 p-4 rounded-lg bg-white/95 shadow-md flex items-center justify-between gap-4" style={{border: '1px solid rgba(203,213,225,0.6)'}}>
              <div>
                <div className="text-sm text-gray-500">Compatibility Energy</div>
                <div className="flex items-center gap-3">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-tr from-pink-400 to-purple-600 text-white text-2xl font-bold">{computeCompatibilityScore(result.yours.name, result.partner.name, result.compatibility)}%</div>
                  <div>
                    <div className="text-lg font-semibold">{scoreMessage(computeCompatibilityScore(result.yours.name, result.partner.name, result.compatibility))}</div>
                    <div className="text-xs text-gray-600 mt-1">A soft, useful guide — not a prediction.</div>
                  </div>
                </div>
                <div className="mt-2 text-xs text-gray-500 italic">Compatibility energy is a reflective tool — not a prediction or decision-making model.</div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="px-2 py-1 bg-white rounded border text-xs">Tone: {result.tone || tone || '—'}</div>
                <div className="px-2 py-1 bg-white rounded border text-xs">Focus: {result.focus || focus || '—'}</div>
                <button onClick={()=>setPartnerPerspective(p=>!p)} className="ml-2 px-2 py-1 rounded bg-white border text-xs">
                  {partnerPerspective ? 'Viewing: Partner' : 'View Partner’s Perspective'}
                </button>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4" aria-live="polite">
              <div className="col-span-1 p-4 rounded bg-white/90">
                <div className="font-semibold mb-3">You</div>
                <div className="mt-2 flex items-start gap-4">
                  <div className={`w-24 h-24 rounded-md overflow-hidden flex items-center justify-center ${elementAccent(result.yours?.element)}`}>
                    {result.yours ? <ZodiacAvatar sign={result.yours.name} compact size={84} /> : null}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div className="text-lg font-semibold">{result.yours.name}</div>
                      <div className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-800">{result.yours.element}</div>
                    </div>

                    <div className="mt-2 text-sm text-slate-700">{result.yours.insight}</div>

                    <div className="mt-3">
                      <div className="text-xs font-semibold text-slate-600">Mini habit</div>
                      <div className="text-sm text-slate-700 mt-1">{result.yours.habit}</div>
                    </div>

                    {result.deep ? (
                      <div className="mt-3 text-xs text-slate-600">
                        <div><strong>Moon:</strong> {result.deep.moon?.sign} {result.deep.moon ? `(${Math.round(result.deep.moon.deg)}°)` : ''}</div>
                        <div><strong>Rising:</strong> {result.deep.asc?.sign} {result.deep.asc ? `(${Math.round(result.deep.asc.deg)}°)` : ''}</div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="col-span-1 p-4 rounded bg-white/90">
                <div className="font-semibold">Partner</div>
                <div className="mt-2 flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${elementAccent(result.partner?.element)}`}>{result.partner && result.partner.name ? <ZodiacAvatar sign={result.partner.name} /> : null}</div>
                  <div>
                    <div className="font-semibold">{result.partner.name}</div>
                    <div className="text-xs mt-1">Element: {result.partner.element || '—'}</div>
                    <div className="text-xs mt-1">{result.partner.insight || ''}</div>
                  </div>
                </div>
              </div>

              <div className="col-span-1 p-4 rounded bg-white/90">
                <div className="font-semibold">Energy Dynamic</div>
                <div className="mt-2">
                  <blockquote className="italic text-sm">“{result.compatibility.summary || 'Different rhythms, but a strong pull.'}”</blockquote>
                  <div className="mt-3 font-semibold">Compatibility Energy: {computeCompatibilityScore(result.yours.name, result.partner.name, result.compatibility)}% — <span className="font-normal text-sm">{scoreMessage(computeCompatibilityScore(result.yours.name, result.partner.name, result.compatibility))}</span></div>
                  <div className="font-semibold mt-3">Quick take</div>
                  <p className="text-sm mt-1">{result.compatibility.strengths}</p>
                    <div className="mt-3 flex flex-col gap-2">
                      <div className="flex flex-wrap gap-2">
                        <button disabled={sharing} onClick={()=>createShareCard(result)} className="px-3 py-2 rounded bg-gradient-to-tr from-pink-500 to-purple-600 text-white text-sm shadow w-full sm:w-auto">Create share card 💌</button>
                        <button onClick={downloadShare} disabled={!shareImgUrl} className="px-3 py-2 rounded bg-white border text-sm w-full sm:w-auto">Download PNG</button>
                        <button onClick={async ()=>{ const ok = await copyShareImage(); setCopySuccess(ok ? 'Copied image to clipboard' : 'Copy failed in this browser'); setTimeout(()=>setCopySuccess(null),2500) }} disabled={!shareImgUrl} className="px-3 py-2 rounded bg-white border text-sm w-full sm:w-auto">Copy image</button>
                        {copySuccess ? <div className="text-xs text-green-600">{copySuccess}</div> : null}
                      </div>
                      {sharing ? <div className="text-sm text-gray-500">Creating your share card…</div> : null}
                      {shareImgUrl ? (
                        <div className="mt-2">
                          <div className="text-xs text-gray-600 mb-1">Preview</div>
                          <div className="w-full max-w-lg rounded overflow-hidden shadow-lg">
                            <img src={shareImgUrl} alt="Share preview" className="w-full block" />
                          </div>
                        </div>
                      ) : null}
                    </div>
                </div>
              </div>

              <div className="col-span-1 md:col-span-3">
                {buildReport(result.yours, result.partner, result.compatibility, result.tone || tone, result.focus || focus, partnerPerspective ? 'partner' : 'you')}
              </div>
            </div>
          </div>
        )
      )}
      </div>
    </div>
  )
}
