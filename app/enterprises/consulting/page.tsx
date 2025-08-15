'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function ConsultingPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <div className="bg-white p-1 h-screen flex items-center justify-center">
        <div 
          className="relative isolate w-full h-full flex items-center justify-center rounded-3xl overflow-hidden border border-gray-200"
          style={{
            backgroundImage: 'url(/pink-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <h1 className="text-5xl font-medium tracking-tight mb-8 font-sans sm:text-6xl lg:text-7xl xl:text-8xl">
              AI Consulting
            </h1>
            <p className="text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
              Strategic AI guidance from strategy development to implementation planning and ROI assessment.
            </p>
            
            <div className="flex justify-center gap-4 mb-8">
              <Link
                href="mailto:enterprise@tnsaai.com"
                className="rounded-md bg-white/20 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/30 transition-all border border-white/30"
              >
                Book Consultation →
              </Link>
              <Link
                href="/enterprises"
                className="rounded-md bg-white/20 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/30 transition-all border border-white/30"
              >
                Back to Enterprise →
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
          
          {/* Consulting Overview */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Strategic AI Consulting</h2>
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                Our AI consulting services help organizations navigate the complex landscape of artificial intelligence adoption. 
                From initial strategy development to implementation planning and ROI measurement, our experts guide you through 
                every step of your AI transformation journey with proven methodologies and industry best practices.
              </p>
            </div>
          </div>

          {/* Consulting Services */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Our Consulting Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Strategy Development</h3>
                <p className="text-gray-600">Comprehensive AI strategy aligned with your business objectives and market opportunities.</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Implementation Planning</h3>
                <p className="text-gray-600">Detailed roadmaps, timelines, and resource planning for successful AI implementation.</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">ROI Assessment</h3>
                <p className="text-gray-600">Comprehensive analysis of AI investment returns and business impact measurement.</p>
              </div>
            </div>
          </div>

          {/* Consulting Process */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Our Consulting Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 border border-gray-200 rounded-xl">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-pink-600 font-bold text-lg">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Discovery</h3>
                <p className="text-gray-600">Understanding your business, challenges, and AI readiness assessment.</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Strategy Design</h3>
                <p className="text-gray-600">Develop comprehensive AI strategy aligned with business objectives.</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold text-lg">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Implementation</h3>
                <p className="text-gray-600">Guided implementation with milestone tracking and continuous optimization.</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-lg">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Optimization</h3>
                <p className="text-gray-600">Ongoing optimization, performance monitoring, and strategic adjustments.</p>
              </div>
            </div>
          </div>

          {/* Consulting Areas */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Consulting Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">AI Strategy & Roadmap</h3>
                <p className="text-gray-600">Develop comprehensive AI strategies with clear roadmaps and success metrics.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Technology Assessment</h3>
                <p className="text-gray-600">Evaluate current technology stack and recommend optimal AI integration approaches.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Change Management</h3>
                <p className="text-gray-600">Guide organizational change and team training for successful AI adoption.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Risk Assessment</h3>
                <p className="text-gray-600">Identify and mitigate risks associated with AI implementation and deployment.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Compliance & Ethics</h3>
                <p className="text-gray-600">Ensure AI implementations meet regulatory requirements and ethical standards.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Performance Optimization</h3>
                <p className="text-gray-600">Continuous improvement and optimization of AI systems and processes.</p>
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div className="text-center bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Transform Your Business with AI</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Partner with our AI experts to develop and execute a winning AI strategy for your organization.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="mailto:enterprise@tnsaai.com"
                className="rounded-md bg-black px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
              >
                Schedule Strategy Session
              </Link>
              <Link
                href="/enterprises"
                className="rounded-md border border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-all"
              >
                Explore Other Services
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}