"use client"
import React from 'react'

const QUOTES = [
  '“Small acts of care create the architecture of love.”',
  '“Curiosity opens the door to understanding.”',
  '“Compassion is a practice, not a feeling.”'
]

export default function DailyQuote(){
  const q = QUOTES[Math.floor(Math.random()*QUOTES.length)]
  return (
    <div className="p-4 rounded bg-white/90">
      <div className="text-sm italic">{q}</div>
    </div>
  )
}
