'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Code1Page() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <div className="bg-white p-1 h-screen flex items-center justify-center">
        <div
          className="relative isolate w-full h-full flex items-center justify-center rounded-3xl overflow-hidden border border-gray-200"
          style={{
            backgroundImage: 'url(/green-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
            <h1 className="text-5xl font-medium tracking-tight mb-8 font-sans sm:text-6xl lg:text-7xl xl:text-8xl">
              Code-1
            </h1>
            <p className="text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
              Supports 30+ programming languages with advanced debugging
            </p>

            <div className="flex justify-center gap-4 mb-8">
              <Link
                href="https://platform.tnsaai.com"
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <h3 className="text-xl font-semibold mb-3">30+ programming languages</h3>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <h3 className="text-xl font-semibold mb-3">Code debugging</h3>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <h3 className="text-xl font-semibold mb-3">Documentation generation</h3>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <h3 className="text-xl font-semibold mb-3">Code review</h3>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Limits & Specifications</h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Pricing</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Input: ₹0.42 / 1K tokens</li>
                    <li>• Output: ₹0.58</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Limits</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Context Length: 40K tokens</li>
                    <li>• Rate Limit: 300 RPM</li>
                    <li>• Max Generation: 32K tokens</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Description</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Specialized code generation and debugging assistant
            </p>
          </div>

          {/* Getting Started */}
          <div className="text-center bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Start Coding</h2>
            <div className="flex justify-center gap-4">
              <Link
                href="https://platform.tnsaai.com"
                className="rounded-md bg-black px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
              >
                Get Started
              </Link>
              <Link
                href="/developers"
                className="rounded-md border border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-all"
              >
                API Reference
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
