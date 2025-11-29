"use client"
import React, {useState} from 'react'

const MOODS = ['😌', '🙂', '🤔', '😟', '😔']

export default function MoodSelector(){
  const [index, setIndex] = useState(0)
  return (
    <div className="flex items-center gap-2">
      {MOODS.map((m, idx) => (
        <button key={m} onClick={()=>setIndex(idx)} className={`px-2 py-1 rounded ${idx===index? 'bg-[#3b0764] text-white':'bg-white'}`} aria-pressed={idx===index}>
          <span className="text-xl">{m}</span>
        </button>
      ))}
    </div>
  )
}
