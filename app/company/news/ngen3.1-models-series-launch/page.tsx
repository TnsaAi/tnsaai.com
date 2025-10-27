'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function NGen31LaunchPage() {
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
              NGen 3.1 Models Series
            </h1>
            <p className="text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
              Introducing the next generation of frontier AI models with breakthrough performance
            </p>
            
            <div className="flex justify-center gap-4 mb-8">
              <Link
                href="/models/ngen3.1-pro"
                className="rounded-md bg-white/20 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/30 transition-all border border-white/30"
              >
                Explore NGen 3.1 Pro →
              </Link>
              <Link
                href="https://platform.tnsaai.com"
                className="rounded-md bg-white/20 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/30 transition-all border border-white/30"
              >
                Try API →
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

      {/* Article Content */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">A New Era of AI Performance</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Today marks a significant milestone in AI development as we introduce the NGen 3.1 Models Series, 
              featuring our flagship NGen 3.1 Pro model. This new generation represents a quantum leap in AI 
              capabilities, setting new benchmarks across reasoning, coding, and mathematical problem-solving.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The NGen 3.1 series embodies our commitment to pushing the boundaries of what&apos;s possible in
              artificial intelligence, delivering unprecedented performance while maintaining the reliability 
              and efficiency that enterprises demand.
            </p>
          </div>

          {/* Benchmark Results Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Breakthrough Benchmark Results</h2>
            
            {/* Performance Comparison */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4">Performance Comparison</h3>
              <div className="bg-gray-50 rounded-2xl p-6">
                <Image
                  src="/ngen3.1-bar-graph.png"
                  alt="NGen 3.1 Performance Comparison"
                  width={800}
                  height={500}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                NGen 3.1 Pro demonstrates superior performance across all major AI benchmarks, 
                outperforming previous generation models by significant margins.
              </p>
            </div>

            {/* Detailed Analysis */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4">Detailed Benchmark Analysis</h3>
              <div className="bg-gray-50 rounded-2xl p-6">
                <Image
                  src="/ngen3.1-detaild-bench.png"
                  alt="NGen 3.1 Detailed Benchmarks"
                  width={800}
                  height={600}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                Comprehensive evaluation across diverse tasks shows consistent excellence in reasoning, 
                mathematical computation, and code generation capabilities.
              </p>
            </div>
          </div>

          {/* Key Innovations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Revolutionary Innovations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Advanced Architecture</h3>
                <p className="text-gray-600">
                  Built on next-generation transformer architecture with optimized attention mechanisms 
                  and enhanced training techniques for superior performance.
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Extended Context</h3>
                <p className="text-gray-600">
                  Featuring a 128K token context window, enabling complex reasoning over extensive 
                  documents and maintaining coherence across long conversations.
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Enhanced Reasoning</h3>
                <p className="text-gray-600">
                  Breakthrough improvements in logical reasoning, mathematical problem-solving, 
                  and chain-of-thought capabilities for complex analytical tasks.
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Multimodal Excellence</h3>
                <p className="text-gray-600">
                  Superior performance across text, code, and mathematical domains with seamless 
                  integration and understanding of diverse content types.
                </p>
              </div>
            </div>
          </div>

          {/* Applications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Real-World Applications</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The NGen 3.1 series is designed to excel across a wide range of professional and research applications:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Research & Development</h4>
                <p className="text-blue-800 text-sm">Advanced scientific reasoning and hypothesis generation</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Software Engineering</h4>
                <p className="text-green-800 text-sm">Complex code generation and architectural design</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">Financial Analysis</h4>
                <p className="text-purple-800 text-sm">Sophisticated market modeling and risk assessment</p>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Availability & Access</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              NGen 3.1 Pro is now available through our API platform, offering developers and enterprises 
              immediate access to frontier AI capabilities. The model is optimized for production workloads 
              with industry-leading performance and reliability guarantees.
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Context Window:</strong> 128K tokens<br/>
                  <strong>Response Time:</strong> 200ms average<br/>
                  <strong>Throughput:</strong> 50,000+ tokens/sec
                </div>
                <div>
                  <strong>Accuracy:</strong> 98%+ on benchmarks<br/>
                  <strong>Uptime SLA:</strong> 99.99%<br/>
                  <strong>API Compatibility:</strong> OpenAI-compatible
                </div>
              </div>
            </div>
          </div>

          {/* Future Roadmap */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Looking Ahead</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The launch of NGen 3.1 Pro is just the beginning. We&apos;re actively developing additional models
              in the 3.1 series, including specialized variants optimized for specific domains and use cases. 
              Our commitment to advancing the state of AI continues with ongoing research into even more 
              capable and efficient architectures.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Stay tuned for announcements about upcoming models in the NGen 3.1 series, including 
              lightweight variants for edge deployment and specialized models for scientific computing.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Experience NGen 3.1 Today</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the next generation of AI development with NGen 3.1 Pro&apos;s breakthrough capabilities.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/models/ngen3.1-pro"
                className="rounded-md bg-black px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
              >
                Explore NGen 3.1 Pro
              </Link>
              <Link
                href="https://platform.tnsaai.com"
                className="rounded-md border border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-all"
              >
                Start Building
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
