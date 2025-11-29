"use client"
import React, {useState, useEffect} from 'react'

export default function NewsletterSignup(){
  const [email, setEmail] = useState('')
  const [saved, setSaved] = useState(false)

  useEffect(()=>{
    const e = localStorage.getItem('sc_newsletter_email')
    if(e) setEmail(e)
  },[])

  function handleSubmit(e: React.FormEvent){
    e.preventDefault()
    if(!email) return
    localStorage.setItem('sc_newsletter_email', email)
    setSaved(true)
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center">
      <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@email.com" className="p-2 rounded-md text-black" aria-label="email" />
      <button className="px-3 py-2 rounded-md bg-white text-[#3b0764] font-semibold" type="submit">Join</button>
      {saved ? <div className="text-sm text-white/80">Saved</div> : null}
    </form>
  )
}
