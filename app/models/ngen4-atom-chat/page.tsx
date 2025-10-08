'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function NGen4AtomChatPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <div className="bg-white p-1 h-screen flex items-center justify-center">
        <div 
          className="relative isolate w-full h-full flex items-center justify-center rounded-3xl overflow-hidden border border-gray-200"
          style={{
            backgroundImage: 'url(/dark-green-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
            <h1 className="text-5xl font-medium tracking-tight mb-8 font-sans sm:text-6xl lg:text-7xl xl:text-8xl">
              NGen4 Atom Chat
            </h1>
            <p className="text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
              Non-reasoning large language model - 10X larger than TNSA's biggest open-weight model NGen3 10B.
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

      {/* Introduction */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 text-center">The Power of Scale</h2>
          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="text-xl leading-relaxed mb-6">
              NGen4 Atom Chat represents a massive leap in model scale and conversational capability. Built as a 
              non-reasoning large language model, it's designed specifically for natural, engaging conversations 
              and content generation at unprecedented scale.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              At 10X the size of TNSA's biggest open-weight model NGen3 10B, NGen4 Atom Chat delivers exceptional 
              performance in dialogue, creative writing, and general language understanding with massive-scale 
              AI capabilities.
            </p>
            <p className="text-lg leading-relaxed">
              Unlike reasoning-focused models, NGen4 Atom Chat excels at fluid conversation, creative expression, 
              and generating human-like responses across diverse topics and contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Benchmark Results */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">Benchmark Performance</h2>
            <p className="text-xl text-gray-600">NGen4 Atom Chat demonstrates exceptional conversational and language capabilities</p>
          </div>

          <div className="mb-16">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Performance Analysis</h3>
              <div className="flex justify-center">
                <Image
                  src="/ngen4-atom-chat-bench.png"
                  alt="NGen4 Atom Chat Benchmark Results"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Massive Scale Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gray-50">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">10X Scale</h3>
              <p className="text-gray-600">Massive 100B+ parameter model delivering unprecedented conversational depth and knowledge.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Natural Conversation</h3>
              <p className="text-gray-600">Optimized for engaging, human-like dialogue with exceptional context understanding.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-50">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Massive Scale</h3>
              <p className="text-gray-600">10X larger than TNSA's biggest open-weight model, delivering unprecedented conversational depth.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Conversational AI</h3>
              <p className="text-gray-600">Build sophisticated chatbots and virtual assistants with natural dialogue capabilities.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Content Generation</h3>
              <p className="text-gray-600">Create high-quality articles, stories, and marketing content at scale.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Creative Writing</h3>
              <p className="text-gray-600">Generate creative fiction, poetry, and artistic content with human-like creativity.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Language Translation</h3>
              <p className="text-gray-600">High-quality translation across multiple languages with cultural context awareness.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Research & Education</h3>
              <p className="text-gray-600">Support academic research and educational applications with comprehensive knowledge.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Custom Fine-tuning</h3>
              <p className="text-gray-600">Adapt the model for specific domains and use cases with open-weight accessibility.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Technical Excellence</h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Architecture</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 100B+ parameter transformer</li>
                  <li>• Non-reasoning optimized design</li>
                  <li>• Context window: 32K tokens</li>
                  <li>• Enterprise-grade model</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Performance</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 10X scale of NGen3 10B</li>
                  <li>• Optimized for conversation</li>
                  <li>• High-quality text generation</li>
                  <li>• Multi-language support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Experience Massive Scale</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Harness the power of TNSA's most massive conversational AI model for your applications.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="https://api.tnsaai.com"
                className="rounded-md bg-black px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
              >
                Access Model
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