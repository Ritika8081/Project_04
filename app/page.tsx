"use client"
import Link from 'next/link'
import React from 'react'
import FeatureCard from '../components/FeatureCard'
import NewsletterSignup from '../components/NewsletterSignup'

export default function LandingPage() {
  return (
    <div className="max-w-5xl w-full mx-auto">
      <section className="hero-plate card-fade grid md:grid-cols-2 gap-6 items-center">
        <div>
          <div className="hero-eyebrow">SoulConnect</div>

          <h1 className="hero-title mt-2">
            Understand Yourself & Your Relationships — 
            <br />Heal, Grow & Love with Clarity 💫
          </h1>

          <p className="hero-lead mt-4">
            A gentle, private space to explore your emotional world, understand patterns,
            and practice tiny habits that strengthen connection. 
            Not predictions — real guidance for real feelings.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <Link href="/onboarding" className="large-cta">
              ✨ Start Your Journey
            </Link>
            <Link href="/dashboard?demo=true" className="btn btn-secondary">
              Try a Demo First
            </Link>
            <p className="text-xs text-slate-700 mt-3 sm:mt-0 ml-0 sm:ml-3">No login • Nothing saved • Safe space to explore</p>
          </div>

          <div className="mt-10">
            <p className="text-sm text-slate-700 font-medium">People usually come here when they feel:</p>
            <div className="flex gap-3 mt-2 flex-wrap text-xs">
              <span className="tag">🥺 Confused in love</span>
              <span className="tag">💕 Want deeper connection</span>
              <span className="tag">💔 Healing after conflict</span>
              <span className="tag">🌱 Ready to grow</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center relative">
          <img src="/constellation-leo.svg" alt="constellation" className="hero-graphic" />
          <div className="floating-bubble delay-2">⭐ Your story matters</div>
          <div className="floating-bubble">✨ Small habits &gt; big fights</div>
        </div>
      </section>

      

      <section className="mt-12 pt-14 text-center">
        <p className="italic text-gray-200">
          “It made me feel seen. Not predicted — understood.”
        </p>
        <p className="text-xs text-gray-200 mt-1">— SoulConnect early user</p>
      </section>

      <section className="mt-16 text-center">
        <h3 className="font-semibold text-xl">Ready for clarity & connection?</h3>
        <p className="text-sm text-gray-300 mt-2">Just a few questions and you’re inside. No signup needed.</p>

        <Link href="/onboarding" className="large-cta mt-4 inline-block">
          🌿 Begin
        </Link>
      </section>

      <section className="mt-14">
        <h3 className="section-title">What SoulConnect Helps You Do</h3>

        <div className="features-grid mt-6">
          <FeatureCard title="Feel understood, not judged">
            Soft emotional insights that help you make sense of patterns & emotions.
          </FeatureCard>
          <FeatureCard title="Turn reflection into real growth">
            Daily micro-prompts & rituals you can do in 2–3 minutes — consistency without pressure.
          </FeatureCard>
          <FeatureCard title="Build healthier connection">
            SoulMatch compatibility blends EI and astrology to help communication and balance.
          </FeatureCard>
        </div>
      </section>
    </div>
  )
}
