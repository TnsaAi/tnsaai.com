'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function NGen4AtomChatLaunchPage() {
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
              NGen4 Atom Chat Launch
            </h1>
            <p className="text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
              Introducing TNSA&apos;s most massive model - 10X larger than our biggest open-weight model NGen3 10B
            </p>
            
            <div className="flex justify-center gap-4 mb-8">
              <Link
                href="/models/ngen4-atom-chat"
                className="rounded-md bg-white/20 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/30 transition-all border border-white/30"
              >
                Explore Model →
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Scaling New Heights in Conversational AI</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Today, we&apos;re proud to announce the launch of NGen4 Atom Chat, TNSA&apos;s most ambitious language model to date.
              This massive-scale model represents a 10X increase in parameters compared to our NGen3 10B model, 
              delivering unprecedented conversational capabilities and natural language understanding.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Unlike our reasoning-focused models, NGen4 Atom Chat is specifically designed as a non-reasoning large 
              language model, optimized for natural conversation, creative content generation, and engaging dialogue. 
              With over 100 billion parameters, it sets a new standard for massive-scale conversational AI.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At 10X the scale of TNSA&apos;s biggest open-weight model NGen3 10B, NGen4 Atom Chat represents our
              most ambitious conversational AI model, delivering unprecedented capabilities for enterprise and 
              research applications.
            </p>
          </div>

          {/* Benchmark Results Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Performance Excellence</h2>
            
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4">Benchmark Analysis</h3>
              <div className="bg-gray-50 rounded-2xl p-6">
                <Image
                  src="/ngen4-atom-chat-bench.png"
                  alt="NGen4 Atom Chat Benchmark Results"
                  width={800}
                  height={600}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                NGen4 Atom Chat demonstrates exceptional performance across conversational AI benchmarks, 
                showcasing its ability to engage in natural, contextually aware dialogue.
              </p>
            </div>
          </div>

          {/* Scale and Architecture */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Massive Scale, Open Access</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">10X Scale</h3>
                <p className="text-gray-600">
                  With over 100 billion parameters, NGen4 Atom Chat is 10 times larger than our NGen3 10B model, 
                  enabling unprecedented depth in conversational understanding and generation.
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Massive Scale Model</h3>
                <p className="text-gray-600">
                  10X larger than TNSA&apos;s biggest open-weight model, delivering unprecedented conversational
                  capabilities and language understanding at enterprise scale.
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Non-Reasoning Focus</h3>
                <p className="text-gray-600">
                  Optimized specifically for natural conversation and content generation rather than complex reasoning, 
                  delivering more human-like and engaging interactions.
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Advanced Architecture</h3>
                <p className="text-gray-600">
                  Built on cutting-edge transformer architecture with optimizations for conversational flow, 
                  context retention, and natural language generation.
                </p>
              </div>
            </div>
          </div>

          {/* Applications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Transforming Conversational AI</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              NGen4 Atom Chat opens new possibilities across numerous applications:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Virtual Assistants</h4>
                <p className="text-green-800 text-sm">Next-generation chatbots with human-like conversation</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Content Creation</h4>
                <p className="text-blue-800 text-sm">High-quality articles, stories, and creative writing</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">Educational Tools</h4>
                <p className="text-purple-800 text-sm">Interactive learning and tutoring applications</p>
              </div>
            </div>
          </div>

          {/* Scale Impact */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Unprecedented Scale</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              NGen4 Atom Chat pushes the boundaries of conversational AI through massive scale. At 10X the size 
              of our biggest open-weight model NGen3 10B, it represents a new frontier in language model 
              capabilities for enterprise applications requiring unprecedented conversational depth.
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Scale Advantages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Massive Parameters:</strong> 100B+ parameters for deep understanding<br/>
                  <strong>Enhanced Context:</strong> Superior long-form conversation handling<br/>
                  <strong>Rich Knowledge:</strong> Comprehensive world knowledge integration
                </div>
                <div>
                  <strong>Natural Flow:</strong> Human-like conversational patterns<br/>
                  <strong>Enterprise Ready:</strong> Built for production-scale deployments<br/>
                  <strong>Versatile:</strong> Adaptable across diverse conversational domains
                </div>
              </div>
            </div>
          </div>

          {/* Technical Details */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Technical Specifications</h2>
            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-6">Model Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                <div>
                  <strong>Parameters:</strong> 100B+<br/>
                  <strong>Architecture:</strong> Transformer-based<br/>
                  <strong>Context Window:</strong> 32K tokens<br/>
                  <strong>Training:</strong> Conversational optimization
                </div>
                <div>
                  <strong>Model Type:</strong> Non-reasoning LLM<br/>
                  <strong>License:</strong> Enterprise<br/>
                  <strong>Availability:</strong> API + Download<br/>
                  <strong>Scale:</strong> 10X NGen3 10B
                </div>
              </div>
            </div>
          </div>

          {/* Future Vision */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Looking Forward</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              NGen4 Atom Chat represents just the beginning of our exploration into massive-scale conversational AI. 
              We&apos;re committed to continuing this research direction, developing even more capable models while
              maintaining our open-source philosophy.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We&apos;re excited to see how the community will use, adapt, and build upon NGen4 Atom Chat to create
              innovative applications and push the boundaries of what&apos;s possible in conversational AI.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Experience NGen4 Atom Chat</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Start building with TNSA&apos;s most massive conversational AI model today.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/models/ngen4-atom-chat"
                className="rounded-md bg-black px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
              >
                Explore Model
              </Link>
              <Link
                href="https://platform.tnsaai.com"
                className="rounded-md border border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-all"
              >
                Access API
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
