'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function NGen3_3BPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <div className="bg-white p-1 h-screen flex items-center justify-center">
        <div 
          className="relative isolate w-full h-full flex items-center justify-center rounded-3xl overflow-hidden border border-gray-200"
          style={{
            backgroundImage: 'url(/brown-blue-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
            <h1 className="text-5xl font-medium tracking-tight mb-8 font-sans sm:text-6xl lg:text-7xl xl:text-8xl">
              NGen 3 3B
            </h1>
            <p className="text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
              AI accessible to all Humanity - run AI without Network, anywhere, anytime.
            </p>
            
            <div className="flex justify-center gap-4 mb-8">
              <Link
                href="https://api.tnsaai.com"
                className="rounded-md bg-white/20 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/30 transition-all border border-white/30"
              >
                Try API →
              </Link>
              <Link
                href="/developers"
                className="rounded-md bg-white/20 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/30 transition-all border border-white/30"
              >
                Documentation →
              </Link>
            </div>

            <div className="flex justify-center">
              <Image
                src="/TNSA.png"
                alt="TNSA"
                width={80}
                height={32}
                className="opacity-80"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Key Features */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Democratizing AI Access</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Offline First</h3>
                <p className="text-gray-600">Complete AI functionality without internet dependency - perfect for remote areas and privacy-focused applications.</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Universal Access</h3>
                <p className="text-gray-600">Breaking down barriers to AI adoption - making advanced technology accessible to everyone, everywhere.</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Edge Optimized</h3>
                <p className="text-gray-600">Designed for edge devices, IoT systems, and resource-constrained environments without compromising quality.</p>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Compact Yet Powerful</h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Edge-Optimized Design</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 3 billion parameter efficient architecture</li>
                    <li>• Model size: &lt;6GB storage</li>
                    <li>• RAM requirement: 4GB minimum</li>
                    <li>• CPU-optimized inference</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Offline Performance</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Zero network dependency</li>
                    <li>• Local inference: &lt;1 second</li>
                    <li>• Battery efficient operation</li>
                    <li>• Privacy-preserving by design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Empowering Every Corner</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Rural Education</h3>
                <p className="text-gray-600">Offline AI tutoring and educational assistance for remote schools and underserved communities.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Healthcare Access</h3>
                <p className="text-gray-600">Medical assistance and diagnostic support in areas with limited internet connectivity.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Mobile Applications</h3>
                <p className="text-gray-600">Smartphone AI features that work without data connection or in airplane mode.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">IoT Devices</h3>
                <p className="text-gray-600">Smart home devices, industrial sensors, and embedded systems with AI capabilities.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Privacy-First Apps</h3>
                <p className="text-gray-600">Applications requiring complete data privacy with no cloud dependency.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Emergency Services</h3>
                <p className="text-gray-600">Critical applications that must function during network outages or disasters.</p>
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div className="text-center bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Bring AI Everywhere</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Download and deploy AI capabilities that work anywhere, anytime - no internet required.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="https://api.tnsaai.com"
                className="rounded-md bg-black px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
              >
                Download Model
              </Link>
              <Link
                href="/developers"
                className="rounded-md border border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-all"
              >
                Deployment Guide
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}