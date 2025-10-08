'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function ModelsPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-white p-1 h-screen flex items-center justify-center">
        <div
          className="relative isolate w-full h-full flex items-center justify-center rounded-3xl overflow-hidden border border-gray-200"
          style={{
            backgroundImage: 'url(/emerald-blue-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-5xl font-medium tracking-tight mb-16 font-sans bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent sm:text-6xl lg:text-7xl xl:text-8xl">
              Best Frontier Models<br />
              in your Hand.
            </h1>
          </div>
        </div>
      </div>

      {/* NGen 4 Models Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">NGen 4 Models.</h2>
            <p className="text-xl text-gray-600 mb-8">Massive scale non-reasoning models for conversational AI</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-1 max-w-2xl mx-auto">
            {/* NGen4 Atom Chat Card */}
            <Link href="/models/ngen4-atom-chat">
              <div
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/dark-green-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-8">NGen4 Atom Chat</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• 10X Scale (100B+ params)</li>
                    <li>• Massive Scale Model</li>
                    <li>• Conversational AI</li>
                  </ul>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-sm font-semibold text-white/80">NEW</span>
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
        </div>
      </div>

      {/* NGen 3.1 Models Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">NGen 3.1 Models.</h2>
            <p className="text-xl text-gray-600 mb-8">Next-generation frontier models with breakthrough performance</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-1 max-w-2xl mx-auto">
            {/* NGen 3.1 Pro Card */}
            <Link href="/models/ngen3.1-pro">
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
                  <h3 className="text-2xl font-semibold mb-8">NGen 3.1 Pro (Multimodal)</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Multimodal Excellence</li>
                    <li>• Text + Image</li>
                    <li>• Frontier Performance</li>
                  </ul>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-sm font-semibold text-white/80">NEW</span>
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
        </div>
      </div>

      {/* NGen 3.9 Models Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">NGen 3.9 Models.</h2>
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
        </div>
      </div>

      {/* NGen 3 Models Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">NGen 3 Models.</h2>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-8">
            {/* NGen 3 10B Card */}
            <Link href="/models/ngen3-10b">
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
                  <h3 className="text-2xl font-semibold mb-8">NGen 3 10B</h3>
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

            {/* NGen 3 7B Card */}
            <Link href="/models/ngen3-7b">
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
                  <h3 className="text-2xl font-semibold mb-8">NGen 3 7B</h3>
                  <p className="text-lg leading-relaxed">
                    Access the Power of India's own Foundational Model.
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

            {/* NGen 3 3B Card */}
            <Link href="/models/ngen3-3b">
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
                  <h3 className="text-2xl font-semibold mb-8">NGen 3 3B</h3>
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

          {/* Row 2 */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-8">
            {/* NGen 3 140M Card */}
            <Link href="/models/ngen3-140m">
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
                  <h3 className="text-2xl font-semibold mb-8">NGen 3 140M</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Compact</li>
                    <li>• Optimized</li>
                    <li>• Stable</li>
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

            {/* NGen 3 140M V2 Card */}
            <Link href="/models/ngen3-140m-v2">
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
                  <h3 className="text-2xl font-semibold mb-8">NGen 3 140M V2</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Enhanced</li>
                    <li>• Improved</li>
                    <li>• Refined</li>
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

            {/* NGen 3 90M Card */}
            <Link href="/models/ngen3-90m">
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
                  <h3 className="text-2xl font-semibold mb-8">NGen 3 90M</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Smart</li>
                    <li>• Insightful</li>
                    <li>• Adaptive</li>
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

          {/* Row 3 */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* NGen 3 15M Card */}
            <Link href="/models/ngen3-15m">
              <div
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/pink-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-8">NGen 3 15M</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Micro</li>
                    <li>• Edge-Ready</li>
                    <li>• Portable</li>
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

            {/* NGen 3 15M Embed Card */}
            <Link href="/models/ngen3-15m-embed">
              <div
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/brown-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-8">NGen 3 15M Embed</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Embedding</li>
                    <li>• Semantic</li>
                    <li>• Vector Search</li>
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

            {/* NGen 3 140M Instruct Card */}
            <Link href="/models/ngen3-140m-instruct">
              <div
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/black-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-8">NGen 3 140M Instruct</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Instruction-Tuned</li>
                    <li>• Task-Focused</li>
                    <li>• Context-Aware</li>
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
        </div>
      </div>

      {/* NGen 2 Models Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">NGen 2 Models.</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* NGen 2 170M Card */}
            <Link href="/models/ngen2-170m">
              <div
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/emerald-blue-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-8">NGen 2 170M</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Gen-2 Core</li>
                    <li>• Production-Ready</li>
                    <li>• Battle-Tested</li>
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

            {/* NGen 2 30M Card */}
            <Link href="/models/ngen2-30m">
              <div
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/violet-purple-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-8">NGen 2 30M</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Compact Core</li>
                    <li>• Smart Logic</li>
                    <li>• Multi-Task</li>
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

            {/* NGen 2 15M Card */}
            <Link href="/models/ngen2-15m">
              <div
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/green-blue-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-8">NGen 2 15M</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Micro-Scale</li>
                    <li>• Edge-First</li>
                    <li>• Data Fusion</li>
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
        </div>
      </div>

      {/* Stellar - 2 Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Stellar - 2.</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Stellar Large Card */}
            <Link href="/models/stellar-large">
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
                  <h3 className="text-2xl font-semibold mb-8">Stellar Large</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Stellar Scale</li>
                    <li>• High Throughput</li>
                    <li>• Enterprise Ready</li>
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

            {/* Stellar Mini Card */}
            <Link href="/models/stellar-mini">
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
                  <h3 className="text-2xl font-semibold mb-8">Stellar Mini</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Compact Power</li>
                    <li>• Smart Reasoning</li>
                    <li>• Flexible Deploy</li>
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

            {/* Stellar Nano Card */}
            <Link href="/models/stellar-nano">
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
                  <h3 className="text-2xl font-semibold mb-8">Stellar Nano</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Ultra-Compact</li>
                    <li>• Edge-Native</li>
                    <li>• Resource Smart</li>
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
        </div>
      </div>

      {/* Other Frontier Models Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Other Frontier Models.</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* IGen 1 Nano Card */}
            <Link href="/models/igen1-nano">
              <div
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/black-violet-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-8">IGen 1 Nano</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Image Generation</li>
                    <li>• Creative AI</li>
                    <li>• Visual Content</li>
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

            {/* AGent* Card */}
            <Link href="/models/agent-star">
              <div
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/dark-green-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-8">AGent*</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Autonomous</li>
                    <li>• Strategic</li>
                    <li>• Adaptive</li>
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

            {/* NGen 1 Card */}
            <Link href="/models/ngen1">
              <div
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/gold-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-8">NGen 1</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Pioneer</li>
                    <li>• Foundation</li>
                    <li>• Legacy</li>
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
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 sm:text-4xl">Ready to Get Started?</h2>
            <div className="flex justify-center gap-4">
              <Link
                href="https://api.tnsaai.com"
                className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
              >
                Try Our API
              </Link>
              <Link
                href="/developers"
                className="rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-all"
              >
                Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}