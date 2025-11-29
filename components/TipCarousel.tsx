"use client"
import React, {useEffect, useState} from 'react'

const TIPS = [
  'Every reflection matters.',
  'Small steps lead to big growth.',
  'Notice the good in your connections.'
]

export default function TipCarousel(){
  const [idx, setIdx] = useState(0)
  useEffect(()=>{
    const t = setInterval(()=> setIdx(i => (i+1)%TIPS.length), 4000)
    return ()=>clearInterval(t)
  },[])
  return (
    <div className="text-sm fade-in">
      {TIPS[idx]}
    </div>
  )
}
