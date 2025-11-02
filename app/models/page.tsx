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
                title="NGen3.1-Pro Multimodal"
                subtitle="Handles image and text inputs"
                category="Multimodal"
                price="₹0.42 input / ₹0.58 + ₹1.66/image output"
                buttonText="Know More"
                imageUrl="/purple-bg.png"
                imageAlt="NGen3.1-Pro Multimodal Model"
                href="/models/ngen3.1-pro"
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
                title="NGen-Realtime-Omni Multimodal"
                subtitle="Text, audio, and image in real-time"
                category="Omni"
                price="₹1.25 input / ₹1.66 output"
                buttonText="Know More"
                imageUrl="/emerald-blue-bg.png"
                imageAlt="NGen-Realtime-Omni Multimodal Model"
                href="/models/ngen-realtime-omni-multimodal"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen-Realtime-Omni-Audio"
                subtitle="Real-time audio processing and understanding"
                category="Omni"
                price="₹1.66 per minute"
                buttonText="Know More"
                imageUrl="/dark-pink-bg.png"
                imageAlt="NGen-Realtime-Omni-Audio Model"
                href="/models/ngen-realtime-omni-audio-audio"
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
                subtitle="Professional-grade text-to-speech synthesis"
                category="Audio"
                price="₹1.00 per minute"
                buttonText="Know More"
                imageUrl="/black-violet-bg.png"
                imageAlt="AudioTextSpeech-Pro Model"
                href="/models/audiotextspeech-pro-audio"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="AudioTextSpeech-1"
                subtitle="Basic text-to-speech for simple applications"
                category="Audio"
                price="₹0.33 per minute"
                buttonText="Know More"
                imageUrl="/ground-brown-bg.png"
                imageAlt="AudioTextSpeech-1 Model"
                href="/models/audiotextspeech-1-audio"
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
                subtitle="512×512, fast and efficient"
                category="Image"
                price="₹0.83 per image"
                buttonText="Know More"
                imageUrl="/pink-text-bg.png"
                imageAlt="IGen-1 Nano Model"
                href="/models/igen-1-nano-image"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="IGen-1"
                subtitle="Up to 4K resolution with advanced editing features"
                category="Image"
                price="₹2.50 per image"
                buttonText="Know More"
                imageUrl="/black-white-bg.png"
                imageAlt="IGen-1 Model"
                href="/models/igen-1-image"
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
                title="NGen3.9-Lite Chat"
                subtitle="Fast & efficient for basic chat applications"
                category="Chat"
                price="₹0.10 input / ₹0.12 output"
                buttonText="Know More"
                imageUrl="/cream-bg.png"
                imageAlt="NGen3.9-Lite Chat Model"
                href="/models/ngen3.9-lite-chat"
              />
            </div>
            
            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen3.9-Pro Chat"
                subtitle="Strong contextual and logical understanding"
                category="Chat"
                price="₹0.33 input / ₹0.50 output"
                buttonText="Know More"
                imageUrl="/blue-bg.png"
                imageAlt="NGen3.9-Pro Chat Model"
                href="/models/ngen3.9-pro-chat"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen3.9-Lite-2006-Preview Chat"
                subtitle="Preview version with latest experimental features"
                category="Chat"
                price="₹0.08 input / ₹0.10 output"
                buttonText="Know More"
                imageUrl="/pink-bg.png"
                imageAlt="NGen3.9-Lite-2006-Preview Chat Model"
                href="/models/ngen3.9-lite-2006-preview-chat"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen3.9-Pro-2406-Preview Chat"
                subtitle="Preview version with enhanced capabilities"
                category="Chat"
                price="₹0.25 input / ₹0.37 output"
                buttonText="Know More"
                imageUrl="/purple-bg.png"
                imageAlt="NGen3.9-Pro-2406-Preview Chat Model"
                href="/models/ngen3.9-pro-2406-preview-chat"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen3.9-Max-v2-128K-Preview Chat"
                subtitle="Handles long documents and books"
                category="Chat"
                price="₹0.66 input / ₹1.00 output"
                buttonText="Know More"
                imageUrl="/dark-green-bg.png"
                imageAlt="NGen3.9-Max-v2-128K-Preview Chat Model"
                href="/models/ngen3.9-max-v2-128k-preview-chat"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen3.9-Max-Stable-v3 Chat"
                subtitle="Stable enterprise version for production workloads"
                category="Chat"
                price="₹0.83 input / ₹1.25 output"
                buttonText="Know More"
                imageUrl="/gold-bg.png"
                imageAlt="NGen3.9-Max-Stable-v3 Chat Model"
                href="/models/ngen3.9-max-stable-v3-chat"
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
                title="NGen3-7B-0625 Chat"
                subtitle="High-efficiency conversational model"
                category="Chat"
                price="₹0.42 input / ₹0.58 output"
                buttonText="Know More"
                imageUrl="/dark-green-bg.png"
                imageAlt="NGen3-7B-0625 Chat Model"
                href="/models/ngen3-7b-0625-chat"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen3-7B-0525-Preview Chat"
                subtitle="Preview version of 7B parameter model"
                category="Chat"
                price="₹0.33 input / ₹0.50 output"
                buttonText="Know More"
                imageUrl="/pink-strong-bg.png"
                imageAlt="NGen3-7B-0525-Preview Chat Model"
                href="/models/ngen3-7b-0525-preview-chat"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen3-1B Chat"
                subtitle="Compact 1B parameter model for edge deployment"
                category="Chat"
                price="₹0.20 input / ₹0.30 output"
                buttonText="Know More"
                imageUrl="/brown-blue-bg.png"
                imageAlt="NGen3-1B Chat Model"
                href="/models/ngen3-1b-chat"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="NGen3-1B-it Chat"
                subtitle="Instruction-tuned variant for better task performance"
                category="Chat"
                price="₹0.25 input / ₹0.35 output"
                buttonText="Know More"
                imageUrl="/violet-purple-bg.png"
                imageAlt="NGen3-1B-it Chat Model"
                href="/models/ngen3-1b-it-chat"
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
                subtitle="Real-time web search with source citations"
                category="Search"
                price="₹0.16 per query"
                buttonText="Know More"
                imageUrl="/blue-bg.png"
                imageAlt="WebSearch-1 Model"
                href="/models/websearch-1-search"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="Scientist-1"
                subtitle="Specialized for scientific research and analysis"
                category="Research"
                price="₹0.50 per query"
                buttonText="Know More"
                imageUrl="/dark-green-bg.png"
                imageAlt="Scientist-1 Model"
                href="/models/scientist-1-research"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="Code-1"
                subtitle="Supports 30+ programming languages with advanced debugging"
                category="Code"
                price="₹0.42 input / ₹0.58 output"
                buttonText="Know More"
                imageUrl="/green-bg.png"
                imageAlt="Code-1 Model"
                href="/models/code-1-code"
              />
            </div>

            <div className="w-full max-w-sm">
              <FlightCard
                title="MultiAgent-1"
                subtitle="Coordinates multiple AI agents for complex tasks"
                category="Agent"
                price="₹0.83 input / ₹1.25 output"
                buttonText="Know More"
                imageUrl="/purple-bg.png"
                imageAlt="MultiAgent-1 Model"
                href="/models/multiagent-1-agent"
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
