'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function NGen31ProPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <div className="bg-white p-1 h-screen flex items-center justify-center">
        <div 
          className="relative isolate w-full h-full flex items-center justify-center rounded-3xl overflow-hidden border border-gray-200"
          style={{
            backgroundImage: 'url(/blue-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
            <h1 className="text-5xl font-medium tracking-tight mb-8 font-sans sm:text-6xl lg:text-7xl xl:text-8xl">
              NGen 3.1 Pro
            </h1>
            <p className="text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
              Next-generation multimodal model with breakthrough performance across all benchmarks.
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

      {/* Benchmark Results */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">Benchmark Results</h2>
            <p className="text-xl text-gray-600">NGen 3.1 Pro sets new standards across industry benchmarks</p>
          </div>

          {/* Bar Graph */}
          <div className="mb-16">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Performance Comparison</h3>
              <div className="flex justify-center">
                <Image
                  src="/ngen3.1-bar-graph.png"
                  alt="NGen 3.1 Performance Bar Graph"
                  width={800}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Detailed Benchmarks */}
          <div className="mb-16">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Detailed Benchmark Analysis</h3>
              <div className="flex justify-center">
                <Image
                  src="/ngen3.1-detaild-bench.png"
                  alt="NGen 3.1 Detailed Benchmarks"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 text-center">The Next Generation of AI</h2>
          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="text-xl leading-relaxed mb-6">
              NGen 3.1 Pro represents a quantum leap in artificial intelligence, combining cutting-edge multimodal capabilities 
              with unprecedented reasoning power. As our flagship model, it sets new standards for AI performance 
              across text understanding, image analysis, and complex problem-solving.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Built on advanced transformer architecture with specialized multimodal fusion layers, NGen 3.1 Pro seamlessly 
              processes and understands both textual and visual information, making it ideal for applications requiring 
              sophisticated reasoning across multiple data types.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Revolutionary Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gray-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">True Multimodal Understanding</h3>
              <p className="text-gray-600">Seamlessly processes text and images together, understanding context and relationships between visual and textual information.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-50">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Reasoning Engine</h3>
              <p className="text-gray-600">Sophisticated logical reasoning capabilities with enhanced chain-of-thought processing for complex analytical tasks.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-50">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Frontier Performance</h3>
              <p className="text-gray-600">State-of-the-art results across industry benchmarks, setting new standards for AI model performance.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Real-World Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Document Intelligence</h3>
              <p className="text-gray-600">Analyze complex documents with charts, graphs, and mixed content for comprehensive understanding.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Visual Question Answering</h3>
              <p className="text-gray-600">Answer detailed questions about images, diagrams, and visual content with high accuracy.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Educational AI</h3>
              <p className="text-gray-600">Create intelligent tutoring systems that understand both textbook content and visual learning materials.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Content Moderation</h3>
              <p className="text-gray-600">Advanced content analysis combining text and image understanding for comprehensive moderation.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Research Assistant</h3>
              <p className="text-gray-600">Analyze research papers, scientific diagrams, and data visualizations for insights and summaries.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">E-commerce Intelligence</h3>
              <p className="text-gray-600">Product analysis, visual search, and recommendation systems with multimodal understanding.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Pricing</h2>
          <div className="bg-blue-50 rounded-2xl p-8 max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">NGen 3.1 Pro - Balanced & Multimodal (Text + Image)</h3>
            <div className="grid grid-cols-2 gap-8 mb-6">
              <div>
                <div className="text-3xl font-bold text-blue-600">₹84.00</div>
                <div className="text-sm text-gray-600">Input / 1M tokens</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">₹168.00</div>
                <div className="text-sm text-gray-600">Output / 1M tokens</div>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Stable • Context 40K • Multimodal
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
                  <li>• Multimodal transformer</li>
                  <li>• Text + Image processing</li>
                  <li>• Context window: 40K tokens</li>
                  <li>• Advanced training techniques</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Performance</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Response time: 300ms average</li>
                  <li>• Accuracy: 98%+ on benchmarks</li>
                  <li>• Multimodal reasoning</li>
                  <li>• 99.99% uptime SLA</li>
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Experience the Future</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the next generation of AI with NGen 3.1 Pro&apos;s breakthrough capabilities.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="https://platform.tnsaai.com"
                className="rounded-md bg-black px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
              >
                Start Building
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
