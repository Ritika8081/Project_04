"use client"
import React from 'react'

export default function AstrologyGuide(){
  return (
    <div className="text-sm space-y-2">
      <p className="font-semibold">Astrology guide — gentle primer</p>
      <p>We use your <strong>Sun sign</strong> (based on month/day) to provide simple, supportive relationship insights. If you provide birth time/place, some suggestions may feel more tailored.</p>
      <p><strong>What the insights mean:</strong> Short, emotional-first suggestions to help you notice small, practical ways to connect and grow.</p>
      <p><strong>Compatibility:</strong> We use a simple element-based rule (Fire, Earth, Air, Water) to give a brief summary — this is a gentle guide, not a strict rule.</p>
      <p className="text-xs text-gray-600">Privacy: No data leaves your device. This app stores nothing server-side — all inputs are ephemeral for the session.</p>
    </div>
  )
}
