"use client"
import React, {useState} from 'react'

const PROMPTS = [
  'Take 3 deep breaths and notice how you feel today.',
  'Reflect: What small act of kindness can you do for your partner or yourself?',
  'Notice one moment today that brought warmth to your chest.'
]

export default function DailyPrompt(){
  const [i, setI] = useState(0)
  function next(){ setI((i+1) % PROMPTS.length) }
  return (
    <div className="text-sm">
      <div className="fade-in">“{PROMPTS[i]}”</div>
      <button onClick={next} className="mt-2 text-xs text-[#3b0764] underline">Try another</button>
    </div>
  )
}
