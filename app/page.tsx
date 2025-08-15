'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [chatMessage, setChatMessage] = useState('')

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (chatMessage.trim()) {
      const encodedMessage = encodeURIComponent(chatMessage.trim())
      window.open(`https://chat.tnsaai.com/?message=${encodedMessage}`, '_blank')
      setChatMessage('')
    }
  }

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-white p-1 h-screen flex items-center justify-center">
        <div 
          className="relative isolate w-full h-full flex items-center justify-center rounded-3xl overflow-hidden border border-gray-200"
          style={{
            backgroundImage: 'url(/black-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-5xl font-medium tracking-tight mb-16 font-sans bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent sm:text-6xl lg:text-7xl xl:text-8xl">
              Building World&apos;s First ASI.
            </h1>
            
            {/* Chat Input */}
            <div className="mx-auto max-w-2xl">
              <form onSubmit={handleChatSubmit} className="relative">
                <div className="relative flex items-center bg-white/30 backdrop-blur-md rounded-full p-3 border border-white/20">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder="Talk to GensChat"
                    className="flex-1 bg-transparent text-white placeholder-white px-6 py-3 text-base focus:outline-none font-sans"
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-200 group"
                  >
                    <svg className="w-4 h-4 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Models Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Models.</h2>
            <p className="text-xl text-gray-900 font-medium sm:text-2xl lg:text-3xl">Best Frontier Models, Working for you.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* NGen 3.9 Lite Card */}
            <Link href="/models/ngen3-lite">
              <div 
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/cream-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-8">NGen 3.9 Lite</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Ultra-Fast</li>
                    <li>• Real-time</li>
                    <li>• Lightweight</li>
                  </ul>
                </div>
                <div className="flex justify-between items-end">
                  <Image
                    src="/TNSA.png"
                    alt="TNSA"
                    width={60}
                    height={24}
                    className="opacity-80"
                  />
                </div>
              </div>
            </Link>

            {/* NGen 3.9 Pro Card */}
            <Link href="/models/ngen3-pro">
              <div 
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/blue-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-8">NGen 3.9 Pro</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Professional</li>
                    <li>• Enterprise</li>
                    <li>• Advanced</li>
                  </ul>
                </div>
                <div className="flex justify-between items-end">
                  <Image
                    src="/TNSA.png"
                    alt="TNSA"
                    width={60}
                    height={24}
                    className="opacity-80"
                  />
                </div>
              </div>
            </Link>

            {/* NGen 3.9 Max Card */}
            <Link href="/models/ngen3-max">
              <div 
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/purple-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-8">NGen 3.9 Max</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Maximum Power</li>
                    <li>• Research-Grade</li>
                    <li>• Cutting-Edge</li>
                  </ul>
                </div>
                <div className="flex justify-between items-end">
                  <Image
                    src="/TNSA.png"
                    alt="TNSA"
                    width={60}
                    height={24}
                    className="opacity-80"
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <Link
              href="/models"
              className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
            >
              View All Models →
            </Link>
            <Link
              href="https://api.tnsaai.com"
              className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
            >
              Try API →
            </Link>
            <Link
              href="/products/genchat"
              className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
            >
              GenGChat →
            </Link>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Products.</h2>
            <p className="text-xl text-gray-900 font-medium sm:text-2xl lg:text-3xl">Making AI accessible to All Humanity.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* TNSA Platform Card */}
            <Link href="/products/platform">
              <div 
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/green-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-8">TNSA Platform</h3>
                  <p className="text-lg leading-relaxed">
                    Build the World with the Best Frontier Models.
                  </p>
                </div>
                <div className="flex justify-between items-end">
                  <Image
                    src="/TNSA.png"
                    alt="TNSA"
                    width={60}
                    height={24}
                    className="opacity-80"
                  />
                </div>
              </div>
            </Link>

            {/* GensChat Card */}
            <Link href="/products/genchat">
              <div 
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/pink-strong-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-8">GensChat</h3>
                  <p className="text-lg leading-relaxed">
                    Access the Power of India&apos;s own Foundational Model.
                  </p>
                </div>
                <div className="flex justify-between items-end">
                  <Image
                    src="/TNSA.png"
                    alt="TNSA"
                    width={60}
                    height={24}
                    className="opacity-80"
                  />
                </div>
              </div>
            </Link>

            {/* EdgeChat Card */}
            <Link href="/products/edgechat">
              <div 
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/brown-blue-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-8">EdgeChat</h3>
                  <p className="text-lg leading-relaxed">
                    AI accessible to all Humanity run AI without Network
                  </p>
                </div>
                <div className="flex justify-between items-end">
                  <Image
                    src="/TNSA.png"
                    alt="TNSA"
                    width={60}
                    height={24}
                    className="opacity-80"
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <Link
              href="/products"
              className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
            >
              View All Products →
            </Link>
            <Link
              href="https://api.tnsaai.com"
              className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
            >
              Try API →
            </Link>
            <Link
              href="/products/genchat"
              className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
            >
              GensChat →
            </Link>
          </div>
        </div>
      </div>

      {/* Latest Updates Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Latest Updates.</h2>
            <p className="text-xl text-gray-900 font-medium sm:text-2xl lg:text-3xl">Latest News and Updates from our Lab.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Top Row - Two Cards */}
            <div 
              className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[300px] flex flex-col justify-start"
              style={{
                backgroundImage: 'url(/green-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <h3 className="text-2xl font-semibold mb-4">Quantum Approach for Machine Learning</h3>
            </div>

            <div 
              className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[300px] flex flex-col justify-start"
              style={{
                backgroundImage: 'url(/purple-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <h3 className="text-2xl font-semibold mb-4">LLMs can be Creative and Independent</h3>
            </div>

            {/* Bottom Row - Two Cards */}
            <div 
              className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[300px] flex flex-col justify-start"
              style={{
                backgroundImage: 'url(/cream-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <h3 className="text-2xl font-semibold mb-4">How to Build AI Agents with NGen3 Models - Complete Guide</h3>
            </div>

            <div 
              className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[300px] flex flex-col justify-start"
              style={{
                backgroundImage: 'url(/dark-pink-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4">OpenArchX v0.1.5</h3>
                <p className="text-lg leading-relaxed">
                  Breakthrough in Machine Learning Speed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}