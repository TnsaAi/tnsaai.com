'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function PreTrainingPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <div className="bg-white p-1 h-screen flex items-center justify-center">
        <div 
          className="relative isolate w-full h-full flex items-center justify-center rounded-3xl overflow-hidden border border-gray-200"
          style={{
            backgroundImage: 'url(/violet-purple-bg.png)',
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
              Pre-Training Services
            </h1>
            <p className="text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
              Build foundational AI models from scratch with custom architectures and proprietary data integration.
            </p>
            
            <div className="flex justify-center gap-4 mb-8">
              <Link
                href="mailto:enterprise@tnsaai.com"
                className="rounded-md bg-white/20 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/30 transition-all border border-white/30"
              >
                Get Started →
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
          
          {/* What is Pre-Training */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">What is Pre-Training?</h2>
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                Pre-training is the foundational phase of AI model development where we build large language models from the ground up 
                using massive datasets. Unlike fine-tuning existing models, pre-training creates entirely new foundational models 
                with custom architectures, specialized knowledge domains, and proprietary data integration from day one.
              </p>
            </div>
          </div>

          {/* Key Advantages */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Why Choose Pre-Training?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Complete Control</h3>
                <p className="text-gray-600">Full control over model architecture, training data, and learning objectives from the ground up.</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Proprietary Knowledge</h3>
                <p className="text-gray-600">Embed your proprietary data and domain expertise directly into the model&apos;s foundation.</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Maximum Performance</h3>
                <p className="text-gray-600">Achieve the highest possible performance for your specific use cases and requirements.</p>
              </div>
            </div>
          </div>

          {/* Pre-Training Process */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Our Pre-Training Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="text-center p-6 border border-gray-200 rounded-xl">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-violet-600 font-bold text-lg">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Requirements Analysis</h3>
                <p className="text-gray-600">Deep dive into your use cases, performance requirements, and data characteristics.</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-lg">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Architecture Design</h3>
                <p className="text-gray-600">Custom model architecture optimized for your specific domain and performance goals.</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-xl">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-indigo-600 font-bold text-lg">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Data Preparation</h3>
                <p className="text-gray-600">Curate and prepare massive datasets combining public and proprietary data sources.</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Large-Scale Training</h3>
                <p className="text-gray-600">Train the model using distributed computing infrastructure and advanced optimization.</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-xl">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-emerald-600 font-bold text-lg">5</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Validation & Deployment</h3>
                <p className="text-gray-600">Comprehensive testing, validation, and deployment with ongoing support.</p>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Pre-Training Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Industry-Specific Models</h3>
                <p className="text-gray-600">Create models specialized for finance, healthcare, legal, or other regulated industries.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Multilingual Models</h3>
                <p className="text-gray-600">Build models with deep understanding of specific languages or regional dialects.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Scientific Research</h3>
                <p className="text-gray-600">Models trained on scientific literature and research data for academic and R&D applications.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Code Generation</h3>
                <p className="text-gray-600">Specialized models for software development, code analysis, and programming assistance.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Creative Content</h3>
                <p className="text-gray-600">Models optimized for creative writing, marketing content, and artistic applications.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Enterprise Knowledge</h3>
                <p className="text-gray-600">Models that understand your company&apos;s processes, products, and institutional knowledge.</p>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Technical Capabilities</h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Model Architectures</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Transformer-based architectures</li>
                    <li>• Custom attention mechanisms</li>
                    <li>• Mixture of experts (MoE) models</li>
                    <li>• Multimodal architectures</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Training Infrastructure</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Distributed training across multiple GPUs</li>
                    <li>• Advanced optimization techniques</li>
                    <li>• Gradient checkpointing and memory optimization</li>
                    <li>• Real-time monitoring and adjustment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Investment & Timeline */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Investment & Timeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <h3 className="text-xl font-semibold mb-3">Small Scale</h3>
                <p className="text-3xl font-bold text-violet-600 mb-4">Custom Quote</p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Up to 1B parameters</li>
                  <li>• Specialized domain focus</li>
                  <li>• 3-6 month timeline</li>
                  <li>• Proof of concept delivery</li>
                </ul>
              </div>
              <div className="text-center p-6 rounded-2xl bg-violet-50 border-2 border-violet-200">
                <h3 className="text-xl font-semibold mb-3">Enterprise Scale</h3>
                <p className="text-3xl font-bold text-violet-600 mb-4">Custom Quote</p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• 1B-10B parameters</li>
                  <li>• Multi-domain capabilities</li>
                  <li>• 6-12 month timeline</li>
                  <li>• Production-ready deployment</li>
                </ul>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <h3 className="text-xl font-semibold mb-3">Frontier Scale</h3>
                <p className="text-3xl font-bold text-violet-600 mb-4">Custom Quote</p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• 10B+ parameters</li>
                  <li>• State-of-the-art capabilities</li>
                  <li>• 12-24 month timeline</li>
                  <li>• Dedicated infrastructure</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div className="text-center bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Ready to Build Your Foundation Model?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Pre-training is a significant investment that delivers unparalleled performance. Let&apos;s discuss your vision and requirements.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="mailto:enterprise@tnsaai.com"
                className="rounded-md bg-black px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
              >
                Schedule Deep Dive
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
