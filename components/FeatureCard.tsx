"use client"
import React from 'react'

export default function FeatureCard({title, children, icon}:{title:string, children:React.ReactNode, icon?:React.ReactNode}){
  return (
    <div className="p-4 bg-white/90 rounded-xl shadow-sm border border-white/6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#fff]">{icon}</div>
        <div>
          <div className="font-semibold text-[#3b0764]">{title}</div>
          <div className="text-sm text-gray-700 mt-1">{children}</div>
        </div>
      </div>
    </div>
  )
}
