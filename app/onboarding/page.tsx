"use client"
import {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation'
import ZodiacAvatar from '../../components/ZodiacAvatar'
import { getZodiacFromDate } from '../../lib/zodiac'
import DetailedAstrologyGuide from '../../components/DetailedAstrologyGuide'

const PRESETS = [
  { label: 'Sample: Leo (Aug 15)', name: 'Alex', dob: '1990-08-15', time: '', place: '' },
  { label: 'Sample: Taurus (May 5)', name: 'Sam', dob: '1988-05-05', time: '', place: '' },
  { label: 'Sample: Pisces (Mar 3)', name: 'Taylor', dob: '1992-03-03', time: '', place: '' },
]

export default function Onboarding(){
  const router = useRouter()
  const [name, setName] = useState('Alex')
  const [dob, setDob] = useState('')
  const [time, setTime] = useState('')
  const [place, setPlace] = useState('')
  const [showGuide, setShowGuide] = useState(false)
  const [remember, setRemember] = useState(false)

  const zodiac = dob ? getZodiacFromDate(new Date(dob)) : null

  // Load saved inputs from sessionStorage or localStorage on mount
  useEffect(()=>{
    try{
      const s = sessionStorage.getItem('sc_onboarding')
      const p = localStorage.getItem('sc_onboarding_persist')
      if(s){
        const obj = JSON.parse(s)
        setName(obj.name || '')
        setDob(obj.dob || '')
        setTime(obj.time || '')
        setPlace(obj.place || '')
      }
      if(p){
        const obj = JSON.parse(p)
        setName(obj.name || '')
        setDob(obj.dob || '')
        setTime(obj.time || '')
        setPlace(obj.place || '')
        setRemember(true)
      }
    }catch(e){/* ignore parse errors */}
  },[])

  // Persist to sessionStorage whenever inputs change
  useEffect(()=>{
    try{ sessionStorage.setItem('sc_onboarding', JSON.stringify({name,dob,time,place})) }catch(e){}
    if(remember){
      try{ localStorage.setItem('sc_onboarding_persist', JSON.stringify({name,dob,time,place})) }catch(e){}
    }
  },[name,dob,time,place,remember])

  function applyPreset(p:any){ setName(p.name); setDob(p.dob); setTime(p.time); setPlace(p.place) }

  function clearData(){ setName(''); setDob(''); setTime(''); setPlace(''); sessionStorage.removeItem('sc_onboarding'); localStorage.removeItem('sc_onboarding_persist'); setRemember(false) }

  function handleSubmit(e: React.FormEvent){
    e.preventDefault()
    const params = new URLSearchParams()
    if(name) params.set('name', name)
    if(dob) params.set('dob', dob)
    if(time) params.set('time', time)
    if(place) params.set('place', place)
    router.push(`/dashboard?${params.toString()}`)
  }

  return (
    <div className="max-w-2xl w-full card-fade">
      <h2 className="text-2xl font-semibold text-[#3b0764]">Welcome — This is your safe space</h2>
      <p className="soft-microcopy">This is your safe space — all insights are private. You can enter a name and DOB to get gentle, relationship-focused astrology guidance. Optional time/place can refine details but are not required.</p>

      <form onSubmit={handleSubmit} className="mt-4 space-y-4" aria-label="Onboarding form">
        <div>
          <label className="block text-sm font-medium">Your name</label>
          <input required value={name} onChange={e => setName(e.target.value)} className="mt-1 w-full rounded-md p-2" placeholder="Alex" aria-label="Your name" />
          <div className="text-xs text-gray-600 mt-1">This is used only to personalize your dashboard for this session.</div>
        </div>

        <div>
          <label className="block text-sm font-medium">Date of Birth</label>
          <input required type="date" value={dob} onChange={e => setDob(e.target.value)} className="mt-1 rounded-md p-2" aria-label="Date of birth" />
          <div className="text-xs text-gray-600 mt-1">Format: YYYY-MM-DD (use the date picker). Example: 1990-08-15</div>

          <div className="mt-2 flex gap-2">
            {PRESETS.map(p => (
              <button type="button" key={p.label} onClick={()=>applyPreset(p)} className="text-xs px-2 py-1 rounded bg-white/90 text-[#3b0764]">{p.label}</button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Birth Time (optional)</label>
          <input type="time" value={time} onChange={e => setTime(e.target.value)} className="mt-1 rounded-md p-2" aria-label="Birth time" placeholder="--:--" />
          <div className="text-xs text-gray-600 mt-1">If unknown, leave blank — insights will still work on sun sign.</div>
        </div>

        <div>
          <label className="block text-sm font-medium">Birth Place (optional)</label>
          <input value={place} onChange={e => setPlace(e.target.value)} className="mt-1 rounded-md p-2" placeholder="City, Country" aria-label="Birth place" />
          <div className="text-xs text-gray-600 mt-1">City and country help with deeper charts, but are optional here.</div>
        </div>

        <div className="flex items-center gap-4">
          <button type="submit" className="large-cta">Continue to Dashboard</button>
          <div className="ml-auto flex items-center gap-3">
            <div>{zodiac ? <ZodiacAvatar sign={zodiac.name} /> : <div className="text-sm text-gray-600">Your sign preview will appear here</div>}</div>
            {zodiac ? (
              <div className="text-sm text-left">
                <div className="font-semibold">{zodiac.name}</div>
                <div className="text-xs text-gray-700 mt-1">{zodiac.insight}</div>
                <div className="text-xs text-gray-700 mt-1">Mini habit: {zodiac.habit}</div>
              </div>
            ) : null}
          </div>
        </div>
      </form>

      <div className="mt-6 flex items-center gap-4">
        <button onClick={()=>setShowGuide(g=>!g)} className="text-sm text-[#3b0764] underline">{showGuide ? 'Hide' : 'Show'} Astrology Guide</button>
        <label className="text-sm ml-4 flex items-center gap-2"><input type="checkbox" checked={remember} onChange={e=>setRemember(e.target.checked)} /> Remember on this device</label>
        <button onClick={clearData} className="text-sm text-red-600 underline ml-auto">Clear saved data</button>
      </div>

      {showGuide ? (
        <div className="mt-3 p-4 rounded bg-white/90">
          <DetailedAstrologyGuide name={name} dob={dob} time={time} place={place} />
        </div>
      ) : null}
    </div>
  )
}
