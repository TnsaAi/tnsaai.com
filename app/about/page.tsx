'use client'

import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-white p-1 h-screen flex items-center justify-center">
        <div 
          className="relative isolate w-full h-full flex items-center justify-center rounded-3xl overflow-hidden border border-gray-200"
          style={{
            backgroundImage: 'url(/cream-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-5xl font-medium tracking-tight mb-16 font-sans bg-gradient-to-b from-gray-800 to-gray-600 bg-clip-text text-transparent sm:text-6xl lg:text-7xl xl:text-8xl">
              About Us.
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          
          {/* Our Story Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 sm:text-4xl">Our Story</h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                TNSA AI was founded in 2021 by Thishyaketh Abimalla with a bold mission — to make India the global leader in Artificial Intelligence and pioneer the world's first AGI and Quantum Intelligence systems. Built without reliance on foreign core technology, TNSA develops foundational models, multimodal systems, and advanced AI frameworks.
              </p>
              <p>
                What began as an independent research initiative, supported by family and later by Microsoft for Startups and Google TPU Research Cloud, has evolved into a global AI company. Our portfolio includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>NGen Series</strong> — Large language models from compact Lite variants to billion-scale architectures.</li>
                <li><strong>IGen Series</strong> — Industry-grade text-to-image and text-to-video generators.</li>
                <li><strong>StellarTTS</strong> — Natural, human-like multilingual text-to-speech engine.</li>
                <li><strong>Neura BETA</strong> — Our first AGI architecture, designed for reasoning, adaptability, and multi-domain learning.</li>
                <li><strong>Tokenize2</strong> — In-house BPE tokenizer optimized for large-scale training.</li>
              </ul>
              <p>
                We combine deep research, safety-driven engineering, and national-first innovation to ensure AI serves both India's advancement and the benefit of humanity.
              </p>
            </div>
          </div>

          {/* Key Facts Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 sm:text-4xl">Key Facts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 mb-2">2021</div>
                <div className="text-gray-600">Founded</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 mb-2">1 Founder</div>
                <div className="text-gray-600">Youngest AI Founder in India</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 mb-2">20B+ Parameters</div>
                <div className="text-gray-600">In-development flagship model</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 mb-2">5+ Major Model Families</div>
                <div className="text-gray-600">NGen, IGen, StellarTTS, Neura, Tokenize2</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg md:col-span-2">
                <div className="text-2xl font-bold text-gray-900 mb-2">Global</div>
                <div className="text-gray-600">Recognition and collaborations</div>
              </div>
            </div>
          </div>

          {/* Our Principles Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 sm:text-4xl">Our Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Foundational Innovation</h3>
                <p className="text-gray-600">Building every major component from scratch.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety & Ethics</h3>
                <p className="text-gray-600">Ensuring AI is beneficial, transparent, and secure.</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">National Leadership</h3>
                <p className="text-gray-600">Strengthening India's technological independence.</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Open Contribution</h3>
                <p className="text-gray-600">Advancing global AI knowledge through shared research.</p>
              </div>
            </div>
          </div>

          {/* Our Achievements Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 sm:text-4xl">Our Achievements</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">NGen Series</h3>
                <p className="text-gray-600">Competitive performance across multiple benchmarks.</p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">IGen Series</h3>
                <p className="text-gray-600">Efficient, scalable, and visually accurate generative models.</p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">StellarTTS</h3>
                <p className="text-gray-600">Human-like, multilingual, and optimized for real-time.</p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Neura BETA</h3>
                <p className="text-gray-600">First AGI framework capable of reasoning-based tasks.</p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tokenize2</h3>
                <p className="text-gray-600">Industry-optimized tokenizer for large-scale multilingual datasets.</p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Partnerships</h3>
                <p className="text-gray-600">Microsoft for Startups, Google TPU Research Cloud.</p>
              </div>
            </div>
          </div>

          {/* Trusted Partners Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 sm:text-4xl">Trusted Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Microsoft</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Azure credits</li>
                  <li>• Technical mentorship</li>
                  <li>• Market enablement</li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-red-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• TPU Research Cloud access</li>
                  <li>• High-performance training</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
