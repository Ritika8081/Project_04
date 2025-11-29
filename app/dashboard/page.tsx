"use client"
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getZodiacFromDate } from '../../lib/zodiac'
import ZodiacAvatar from '../../components/ZodiacAvatar'

type Profile = {
  name?: string
  dob?: string
  sign?: string
}

function tryLoadProfile(): Profile | null {
  // Try a few plausible localStorage keys that onboarding might have used
  const keys = ['soul_onboarding','soul_profile','soulconnect_profile','onboarding','profile']
  for(const k of keys){
    try{
      const raw = localStorage.getItem(k)
      if(!raw) continue
      const parsed = JSON.parse(raw)
      if(parsed && (parsed.name || parsed.dob || parsed.sign)) return parsed
    }catch(e){ /* ignore parse errors */ }
  }
  return null
}

export default function Dashboard(){
  const [nameParam, setNameParam] = useState('')
  const [dobParam, setDobParam] = useState('')

  const [profile, setProfile] = useState<Profile | null>(null)
  const [zodiac, setZodiac] = useState<any>(null)
  const [reflectionsCount, setReflectionsCount] = useState(0)
  const [reflectionText, setReflectionText] = useState('')
  const [savedMsg, setSavedMsg] = useState<string | null>(null)

  useEffect(()=>{
    // read query params client-side to avoid SSR/suspense issues
    try{
      const sp = new URLSearchParams(window.location.search)
      const n = sp.get('name') || ''
      const d = sp.get('dob') || ''
      setNameParam(n)
      setDobParam(d)
    }catch(e){ /* ignore when not available */ }

    // load from localStorage if available
    const p = tryLoadProfile()
    if(p) setProfile(p)
    else if(nameParam || dobParam) setProfile({ name: nameParam || undefined, dob: dobParam || undefined })

    // load reflections
    try{
      const raw = sessionStorage.getItem('soulmatch_reflections')
      if(raw){
        const arr = JSON.parse(raw)
        if(Array.isArray(arr)) setReflectionsCount(arr.length)
      }
    }catch(e){ /* ignore */ }
  }, [])

  useEffect(()=>{
    if(profile?.dob){
      const dt = new Date(profile.dob)
      if(!isNaN(dt.getTime())) setZodiac(getZodiacFromDate(dt))
    } else if(profile?.sign){
      setZodiac({ name: profile.sign, insight: '', habit: '', element: undefined })
    }
  }, [profile])

  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening'

  return (
    <div className="w-full min-h-screen bg-gray-50 py-10 px-6">
      <div className="mx-auto w-full max-w-4xl">
        <div className="flex flex-col md:flex-row items-start justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold">{greeting}{profile?.name ? `, ${profile.name}` : ''}</h2>
            <p className="text-sm text-gray-600 mt-1">A warm, private place to reflect and take small steps toward clearer connection.</p>

            <div className="mt-4 rounded-2xl p-4 md:p-6 bg-gradient-to-tr from-pink-50 to-purple-50 border shadow-sm flex items-center gap-4">
              <div className="flex-none w-16 h-16 rounded-full bg-white/60 flex items-center justify-center text-2xl">✨</div>
              <div className="flex-1">
                <div className="font-semibold">Today’s gentle insight</div>
                <div className="mt-1 text-sm text-slate-700">{zodiac?.insight ? zodiac.insight : 'Curiosity opens small doors — try asking a light, open question tonight: “What made you smile today?”'}</div>
                <div className="mt-2 text-xs text-gray-500">A short, private nudge to make connection easier.</div>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 flex items-center gap-3 mt-3 md:mt-0">
            <Link href="/onboarding" className="btn btn-secondary">Edit profile</Link>
            <Link href="/soulmatch" className="btn btn-primary">Open SoulMatch</Link>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded bg-white/95 border">
            <div className="font-semibold">Profile</div>
            <div className="mt-3 flex items-start gap-3">
              <div className={`w-20 h-20 rounded-md overflow-hidden flex items-center justify-center ${zodiac ? (zodiac.element ? 'bg-white' : 'bg-gray-100') : 'bg-gray-100'}`}>
                {zodiac ? <ZodiacAvatar sign={zodiac.name} compact size={76} /> : <div className="text-sm text-gray-500">No profile</div>}
              </div>
              <div className="flex-1 text-left">
                <div className="font-semibold text-lg">{profile?.name || '—'}</div>
                <div className="text-xs text-gray-500 mt-1">{profile?.dob ? `Born ${profile.dob}` : (profile?.sign ? `Sun: ${profile.sign}` : 'Add your DOB on onboarding')}</div>
                {zodiac ? (
                  <>
                    <div className="mt-2 text-sm text-slate-700">{zodiac.insight}</div>
                    <div className="mt-2 text-xs text-gray-600">Mini-habit: {zodiac.habit}</div>
                  </>
                ) : (
                  <div className="mt-3 p-2 rounded bg-white/60 border text-sm text-slate-700 backdrop-blur-sm">We’ll show a gentle preview here once you add your birth date — small, private reflections to help tonight’s conversation.</div>
                )}
              </div>
            </div>
          </div>

          <div className="p-4 rounded bg-white/95 border">
            <div className="font-semibold">Purposeful Actions</div>
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/soulmatch" className="btn btn-secondary">Explore our connection — quick reading</Link>
              <Link href="/onboarding" className="btn btn-secondary">Tend your profile — update time & place</Link>
              <button onClick={()=>{ const now = new Date().toISOString(); const entry = { choice: 'Manual clear', timestamp: now }; try{ sessionStorage.setItem('soulmatch_reflections', JSON.stringify([entry])) }catch{}; localStorage.clear(); window.location.reload() }} className="btn btn-secondary">Refresh local data (safe)</button>
              <Link href="#first-steps" className="btn btn-primary">Try a tiny practice — 3-day plan</Link>
            </div>
          </div>

          <div className="p-4 rounded bg-white/95 border">
            <div className="font-semibold">Reflections</div>
            <div className="mt-3 text-sm text-slate-700">You’ve saved <strong>{reflectionsCount}</strong> quick reflections this session.</div>
            <div className="mt-3 text-xs text-gray-600">These are stored locally in your browser session and won’t be shared.</div>
          </div>
        </div>

        <div id="first-steps" className="mt-6 p-4 rounded bg-white/90 border">
          <div className="font-semibold">First steps — start gently</div>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded bg-gradient-to-tr from-white to-gray-50 border text-center">
              <div className="text-2xl">📝</div>
              <div className="font-semibold mt-2">Add your DOB</div>
              <div className="text-xs text-gray-600 mt-1">Helps us tailor insights. Keep it private to this device.</div>
            </div>
            <div className="p-3 rounded bg-gradient-to-tr from-white to-gray-50 border text-center">
              <div className="text-2xl">💬</div>
              <div className="font-semibold mt-2">Try SoulMatch</div>
              <div className="text-xs text-gray-600 mt-1">Generate a short reading and a 3-day practice you can try tonight.</div>
            </div>
            <div className="p-3 rounded bg-gradient-to-tr from-white to-gray-50 border text-center">
              <div className="text-2xl">💭</div>
              <div className="font-semibold mt-2">Save a reflection</div>
              <div className="text-xs text-gray-600 mt-1">Capture a quick note after a talk — it’s private and helps you notice patterns.</div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-600">No account needed • Private & ephemeral</div>
        <div className="mt-6 p-4 rounded bg-white/95 border">
          <div className="font-semibold">💬 Reflection prompt</div>
          <div className="mt-2 text-sm text-slate-700">What’s one thing you learned about yourself this week?</div>
          <textarea
            value={reflectionText}
            onChange={e=>setReflectionText(e.target.value)}
            placeholder={"Write reflection..."}
            className="mt-3 w-full min-h-[88px] p-3 rounded border text-sm"
            aria-label="Write reflection"
          />
          <div className="mt-3 flex items-center gap-3">
            <button
              onClick={() => {
                try{
                  const key = 'soulmatch_reflections'
                  const raw = sessionStorage.getItem(key)
                  const arr = raw ? JSON.parse(raw) : []
                  const now = new Date().toISOString()
                  arr.push({ text: reflectionText, timestamp: now })
                  sessionStorage.setItem(key, JSON.stringify(arr))
                  setReflectionText('')
                  setReflectionsCount(arr.length)
                  setSavedMsg('Saved to this session')
                  setTimeout(()=>setSavedMsg(null), 2500)
                }catch(e){
                  setSavedMsg('Save failed')
                  setTimeout(()=>setSavedMsg(null), 2500)
                }
              }}
              disabled={!reflectionText.trim()}
              className="px-3 py-2 rounded bg-gradient-to-tr from-pink-500 to-purple-600 text-white text-sm disabled:opacity-50"
            >
              Save reflection
            </button>
            <div className="text-xs text-gray-600">Your reflection stays on this device and this browser session.</div>
            {savedMsg ? <div className="text-xs text-green-600">{savedMsg}</div> : null}
          </div>
        </div>
      </div>
    </div>
  )
}
