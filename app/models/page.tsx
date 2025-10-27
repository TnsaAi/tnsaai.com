'use client'

import Link from 'next/link'
import { FlightCard } from '@/components/ui/flight-card'

export default function ModelsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero section */}
      <div className="bg-white p-1 h-screen flex items-center justify-center">
        <div
          className="relative isolate w-full h-full flex items-center justify-center rounded-3xl overflow-hidden border border-gray-200"
          style={{
            backgroundImage: 'url(/emerald-blue-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-5xl font-medium tracking-tight mb-16 font-sans bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent sm:text-6xl lg:text-7xl xl:text-8xl">
              Best Frontier Models<br />
              in your Hand.
            </h1>
          </div>
        </div>
      </div>

      {/* NGen 4 Models Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">NGen 4 Models.</h2>
            <p className="text-xl text-gray-600 mb-8">Massive scale non-reasoning models for conversational AI</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-5xl mx-auto">
            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen4 Atom Chat"
                subtitle="Conversational AI"
                category="100B+ params"
                price="$2.00/1K tokens"
                buttonText="Know More"
                imageUrl="/emerald-blue-bg.png"
                imageAlt="NGen4 Atom Chat Model"
                href="/models/ngen4-atom-chat"
              />
            </div>
          </div>
        </div>
      </div>

      {/* NGen 3.1 Models Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">NGen 3.1 Models.</h2>
            <p className="text-xl text-gray-600 mb-8">Next-generation multimodal models with breakthrough performance</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-5xl mx-auto">
            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen3.1-Pro"
                subtitle="Text + Image reasoning"
                category="Multimodal"
                price="₹0.42 input / ₹0.58 output"
                buttonText="Know More"
                imageUrl="/purple-bg.png"
                imageAlt="NGen3.1-Pro Model"
                href="/models/NGen3.1-Pro"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Omni Models Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Omni Models.</h2>
            <p className="text-xl text-gray-600 mb-8">Real-time multimodal and audio processing capabilities</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-5xl mx-auto">
            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen-Realtime-Omni"
                subtitle="Real-time multimodal assistant"
                category="Omni"
                price="₹1.25 input / ₹1.66 output"
                buttonText="Know More"
                imageUrl="/emerald-blue-bg.png"
                imageAlt="NGen-Realtime-Omni Model"
                href="/models/NGen-Realtime-Omni"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen-Realtime-Omni-Audio"
                subtitle="Real-time audio understanding"
                category="Omni"
                price="₹1.66 per minute"
                buttonText="Know More"
                imageUrl="/dark-pink-bg.png"
                imageAlt="NGen-Realtime-Omni-Audio Model"
                href="/models/NGen-Realtime-Omni-Audio"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Audio Models Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Audio Models.</h2>
            <p className="text-xl text-gray-600 mb-8">Advanced audio processing and text-to-speech capabilities</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-5xl mx-auto">
            <div className="w-full max-w-sm">
              <FlightCard
                title="AudioTextSpeech-Pro"
                subtitle="Professional text-to-speech"
                category="Audio"
                price="₹1.00 per minute"
                buttonText="Know More"
                imageUrl="/black-violet-bg.png"
                imageAlt="AudioTextSpeech-Pro Model"
                href="/models/AudioTextSpeech-Pro"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="AudioTextSpeech-1"
                subtitle="Basic text-to-speech"
                category="Audio"
                price="₹0.33 per minute"
                buttonText="Know More"
                imageUrl="/ground-brown-bg.png"
                imageAlt="AudioTextSpeech-1 Model"
                href="/models/AudioTextSpeech-1"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Image Models Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Image Models.</h2>
            <p className="text-xl text-gray-600 mb-8">Advanced image generation capabilities</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-5xl mx-auto">
            <div className="w-full max-w-sm">
              <FlightCard
                title="IGen-1 Nano"
                subtitle="Compact image generator"
                category="Image"
                price="₹0.83 per image"
                buttonText="Know More"
                imageUrl="/violet-purple-bg.png"
                imageAlt="IGen-1 Nano Model"
                href="/models/igen1-nano"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="IGen-1"
                subtitle="Advanced image generation"
                category="Image"
                price="₹2.50 per image"
                buttonText="Know More"
                imageUrl="/black-white-bg.png"
                imageAlt="IGen-1 Model"
                href="/models/IGen-1"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="IGen-1 Fast"
                subtitle="Fast image generation"
                category="Image"
                price="₹1.25 per image"
                buttonText="Know More"
                imageUrl="/green-blue-bg.png"
                imageAlt="IGen-1 Fast Model"
                href="/models/igen1-fast"
              />
            </div>
          </div>
        </div>
      </div>

      {/* NGen 3.9 Models Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">NGen 3.9 Models.</h2>
            <p className="text-xl text-gray-600 mb-8">Latest generation conversational AI models</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen3.9-Lite"
                subtitle="Lightweight conversational AI"
                category="Chat"
                price="₹0.10 input / ₹0.12 output"
                buttonText="Know More"
                imageUrl="/cream-bg.png"
                imageAlt="NGen3.9-Lite Model"
                href="/models/NGen3.9-Lite"
              />
            </div>
            
            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen3.9-Pro"
                subtitle="Advanced conversational AI"
                category="Chat"
                price="₹0.33 input / ₹0.50 output"
                buttonText="Know More"
                imageUrl="/blue-bg.png"
                imageAlt="NGen3.9-Pro Model"
                href="/models/NGen3.9-Pro"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen3.9-Lite-2006-Preview"
                subtitle="Preview version of Lite"
                category="Chat"
                price="₹0.08 input / ₹0.10 output"
                buttonText="Know More"
                imageUrl="/pink-bg.png"
                imageAlt="NGen3.9-Lite Preview Model"
                href="/models/NGen3.9-Lite-2006-Preview"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen3.9-Pro-2406-Preview"
                subtitle="Preview version of Pro"
                category="Chat"
                price="₹0.25 input / ₹0.37 output"
                buttonText="Know More"
                imageUrl="/purple-bg.png"
                imageAlt="NGen3.9-Pro Preview Model"
                href="/models/NGen3.9-Pro-2406-Preview"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen3.9-Max-v2-128K-Preview"
                subtitle="Max context 128K model"
                category="Chat"
                price="₹0.66 input / ₹1.00 output"
                buttonText="Know More"
                imageUrl="/dark-green-bg.png"
                imageAlt="NGen3.9-Max Model"
                href="/models/NGen3.9-Max-v2-128K-Preview"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen3.9-Max-Stable-v3"
                subtitle="Stable enterprise version"
                category="Chat"
                price="₹0.83 input / ₹1.25 output"
                buttonText="Know More"
                imageUrl="/gold-bg.png"
                imageAlt="NGen3.9-Max Stable Model"
                href="/models/NGen3.9-Max-Stable-v3"
              />
            </div>
          </div>
        </div>
      </div>

      {/* NGen 3 Models Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">NGen 3 Models.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-7xl mx-auto">
            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen 3 10B"
                subtitle="Frontier Model"
                category="10B params"
                price="$0.80/1K tokens"
                buttonText="Know More"
                imageUrl="/green-bg.png"
                imageAlt="NGen 3 10B Model"
                href="/models/ngen3-10b"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen 3 7B"
                subtitle="Foundational Model"
                category="7B params"
                price="$0.60/1K tokens"
                buttonText="Know More"
                imageUrl="/pink-strong-bg.png"
                imageAlt="NGen 3 7B Model"
                href="/models/ngen3-7b"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen 3 3B"
                subtitle="Accessible AI"
                category="3B params"
                price="$0.40/1K tokens"
                buttonText="Know More"
                imageUrl="/brown-blue-bg.png"
                imageAlt="NGen 3 3B Model"
                href="/models/ngen3-3b"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen 3 140M"
                subtitle="Compact"
                category="140M params"
                price="$0.05/1K tokens"
                buttonText="Know More"
                imageUrl="/brown-bg.png"
                imageAlt="NGen 3 140M Model"
                href="/models/ngen3-140m"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen 3 140M V2"
                subtitle="Enhanced"
                category="140M params"
                price="$0.06/1K tokens"
                buttonText="Know More"
                imageUrl="/blue-bg.png"
                imageAlt="NGen 3 140M V2 Model"
                href="/models/ngen3-140m-v2"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen 3 90M"
                subtitle="Smart"
                category="90M params"
                price="$0.04/1K tokens"
                buttonText="Know More"
                imageUrl="/violet-purple-bg.png"
                imageAlt="NGen 3 90M Model"
                href="/models/ngen3-90m"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen 3 15M"
                subtitle="Micro"
                category="15M params"
                price="$0.01/1K tokens"
                buttonText="Know More"
                imageUrl="/pink-bg.png"
                imageAlt="NGen 3 15M Model"
                href="/models/ngen3-15m"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen 3 15M Embed"
                subtitle="Embedding"
                category="Vector Search"
                price="$0.01/1K tokens"
                buttonText="Know More"
                imageUrl="/ground-brown-bg.png"
                imageAlt="NGen 3 15M Embed Model"
                href="/models/ngen3-15m-embed"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen 3 140M Instruct"
                subtitle="Instruction-Tuned"
                category="Task-Focused"
                price="$0.05/1K tokens"
                buttonText="Know More"
                imageUrl="/black-violet-bg.png"
                imageAlt="NGen 3 140M Instruct Model"
                href="/models/ngen3-140m-instruct"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen3-7B-0625"
                subtitle="7B parameter efficient model"
                category="Chat"
                price="₹0.42 input / ₹0.58 output"
                buttonText="Know More"
                imageUrl="/dark-green-bg.png"
                imageAlt="NGen3-7B Model"
                href="/models/NGen3-7B-0625"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen3-7B-0525-Preview"
                subtitle="Preview version of 7B"
                category="Chat"
                price="₹0.33 input / ₹0.50 output"
                buttonText="Know More"
                imageUrl="/pink-strong-bg.png"
                imageAlt="NGen3-7B Preview Model"
                href="/models/NGen3-7B-0525-Preview"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen3-1B"
                subtitle="1B parameter lightweight model"
                category="Chat"
                price="₹0.20 input / ₹0.30 output"
                buttonText="Know More"
                imageUrl="/brown-blue-bg.png"
                imageAlt="NGen3-1B Model"
                href="/models/NGen3-1B"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen3-1B-it"
                subtitle="1B parameter instruction-tuned"
                category="Chat"
                price="₹0.25 input / ₹0.35 output"
                buttonText="Know More"
                imageUrl="/violet-purple-bg.png"
                imageAlt="NGen3-1B-it Model"
                href="/models/NGen3-1B-it"
              />
            </div>
          </div>
        </div>
      </div>

      {/* NGen 2 Models Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">NGen 2 Models.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-5xl mx-auto">
            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen 2 170M"
                subtitle="Gen-2 Core"
                category="170M params"
                price="$0.03/1K tokens"
                buttonText="Know More"
                imageUrl="/emerald-blue-bg.png"
                imageAlt="NGen 2 170M Model"
                href="/models/ngen2-170m"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen 2 30M"
                subtitle="Compact Core"
                category="30M params"
                price="$0.02/1K tokens"
                buttonText="Know More"
                imageUrl="/violet-purple-bg.png"
                imageAlt="NGen 2 30M Model"
                href="/models/ngen2-30m"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen 2 15M"
                subtitle="Micro-Scale"
                category="15M params"
                price="$0.01/1K tokens"
                buttonText="Know More"
                imageUrl="/green-blue-bg.png"
                imageAlt="NGen 2 15M Model"
                href="/models/ngen2-15m"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stellar - 2 Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Stellar - 2.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-5xl mx-auto">
            <div className="w-full max-w-sm">
              <FlightCard
                title="Stellar Large"
                subtitle="Stellar Scale"
                category="Enterprise Ready"
                price="$1.20/1K tokens"
                buttonText="Know More"
                imageUrl="/blue-bg.png"
                imageAlt="Stellar Large Model"
                href="/models/stellar-large"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="Stellar Mini"
                subtitle="Compact Power"
                category="Smart Reasoning"
                price="$0.30/1K tokens"
                buttonText="Know More"
                imageUrl="/cream-bg.png"
                imageAlt="Stellar Mini Model"
                href="/models/stellar-mini"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="Stellar Nano"
                subtitle="Ultra-Compact"
                category="Edge-Native"
                price="$0.15/1K tokens"
                buttonText="Know More"
                imageUrl="/purple-bg.png"
                imageAlt="Stellar Nano Model"
                href="/models/stellar-nano"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Special Tool Models Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Special Tool Models.</h2>
            <p className="text-xl text-gray-600 mb-8">Specialized models for search, research, code, and agent coordination</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
            <div className="w-full max-w-sm">
              <FlightCard
                title="WebSearch-1"
                subtitle="Web search & information retrieval"
                category="Search"
                price="₹0.16 per query"
                buttonText="Know More"
                imageUrl="/blue-bg.png"
                imageAlt="WebSearch-1 Model"
                href="/models/WebSearch-1"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="Scientist-1"
                subtitle="Scientific reasoning & analysis"
                category="Research"
                price="₹0.50 per query"
                buttonText="Know More"
                imageUrl="/dark-green-bg.png"
                imageAlt="Scientist-1 Model"
                href="/models/Scientist-1"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="Code-1"
                subtitle="Code generation and debugging"
                category="Code"
                price="₹0.42 input / ₹0.58 output"
                buttonText="Know More"
                imageUrl="/green-bg.png"
                imageAlt="Code-1 Model"
                href="/models/Code-1"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="MultiAgent-1"
                subtitle="Multi-agent coordination"
                category="Agent"
                price="₹0.83 input / ₹1.25 output"
                buttonText="Know More"
                imageUrl="/purple-bg.png"
                imageAlt="MultiAgent-1 Model"
                href="/models/MultiAgent-1"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="AGent*"
                subtitle="Autonomous strategic agent"
                category="Agent"
                price="$2.50/1K tokens"
                buttonText="Know More"
                imageUrl="/black-white-bg.png"
                imageAlt="AGent* Model"
                href="/models/agent-star"
              />
            </div>
          </div>
        </div>
      </div>

      {/* NGen 1 Models Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">NGen 1 Models.</h2>
            <p className="text-xl text-gray-600 mb-8">Pioneer foundation models that started it all</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-5xl mx-auto">
            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen 1"
                subtitle="Pioneer foundation model"
                category="Foundation"
                price="$0.02/1K tokens"
                buttonText="Know More"
                imageUrl="/gold-bg.png"
                imageAlt="NGen 1 Model"
                href="/models/ngen1"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 sm:text-4xl">Ready to Get Started?</h2>
            <div className="flex justify-center gap-4">
              <Link
                href="https://platform.tnsaai.com"
                className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
              >
                Try Our API
              </Link>
              <Link
                href="/developers"
                className="rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-all"
              >
                Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
