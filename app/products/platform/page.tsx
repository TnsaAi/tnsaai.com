'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function TNSAPlatformPage() {
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
              TNSA Platform
            </h1>
            <p className="text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
              Build the World with the Best Frontier Models - Your gateway to cutting-edge AI development.
            </p>
            
            <div className="flex justify-center gap-4 mb-8">
              <Link
                href="https://api.tnsaai.com"
                className="rounded-md bg-white/20 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/30 transition-all border border-white/30"
              >
                Access Platform →
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Platform Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Unified API Access</h3>
                <p className="text-gray-600">Single platform to access all TNSA models with consistent API endpoints and authentication.</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">High Performance</h3>
                <p className="text-gray-600">Optimized infrastructure for low-latency responses and high-throughput processing.</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
                <p className="text-gray-600">Comprehensive usage analytics, performance monitoring, and cost optimization tools.</p>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Platform Features</h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Developer Tools</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Interactive API playground</li>
                    <li>• SDKs for multiple languages</li>
                    <li>• Comprehensive documentation</li>
                    <li>• Code examples and tutorials</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Enterprise Features</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Custom rate limits</li>
                    <li>• Dedicated support</li>
                    <li>• SLA guarantees</li>
                    <li>• Private model hosting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Platform Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Application Development</h3>
                <p className="text-gray-600">Build AI-powered applications with easy-to-use APIs and comprehensive tooling.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Research & Experimentation</h3>
                <p className="text-gray-600">Prototype and test AI solutions with access to multiple frontier models.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Enterprise Integration</h3>
                <p className="text-gray-600">Seamlessly integrate AI capabilities into existing enterprise workflows.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Startup Innovation</h3>
                <p className="text-gray-600">Launch AI-first products with scalable infrastructure and competitive pricing.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Educational Projects</h3>
                <p className="text-gray-600">Learn and teach AI development with accessible tools and resources.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Content Creation</h3>
                <p className="text-gray-600">Power creative workflows with text, image, and voice generation capabilities.</p>
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div className="text-center bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Start Building Today</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of developers building the future with TNSA Platform's powerful AI capabilities.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="https://api.tnsaai.com"
                className="rounded-md bg-black px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
              >
                Get Started Free
              </Link>
              <Link
                href="/developers"
                className="rounded-md border border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-all"
              >
                View Documentation
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}