'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FlightCard } from '@/components/ui/flight-card'

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-white p-1 h-screen flex items-center justify-center">
        <div
          className="relative isolate w-full h-full flex items-center justify-center rounded-3xl overflow-hidden border border-gray-200"
          style={{
            backgroundImage: 'url(/gold-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-5xl font-medium tracking-tight mb-16 font-sans bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent sm:text-6xl lg:text-7xl xl:text-8xl">
              AI Products &<br />
              Enterprise Services.
            </h1>
          </div>
        </div>
      </div>

      {/* Core Products Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Core Products.</h2>
            <p className="text-xl text-gray-900 font-medium sm:text-2xl lg:text-3xl">Making AI accessible to All Humanity.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3 justify-items-center lg:gap-8 xl:gap-12">
            <FlightCard
              title="TNSA Platform"
              subtitle="API Platform"
              category="Enterprise Ready"
              price="Free Tier"
              buttonText="Explore platform"
              imageUrl="/green-bg.png"
              imageAlt="TNSA Platform"
              href="/products/platform"
            />

            <FlightCard
              title="GensChat"
              subtitle="Conversational AI"
              category="India's Own Model"
              price="Free"
              buttonText="Try GensChat"
              imageUrl="/pink-strong-bg.png"
              imageAlt="GensChat"
              href="/products/genchat"
            />

            <FlightCard
              title="EdgeChat"
              subtitle="Offline AI"
              category="Network-Free"
              price="Coming Soon"
              buttonText="Learn more"
              imageUrl="/brown-blue-bg.png"
              imageAlt="EdgeChat"
              href="/products/edgechat"
            />
          </div>
        </div>
      </div>

      {/* API Services Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">API Services.</h2>
            <p className="text-xl text-gray-900 font-medium sm:text-2xl lg:text-3xl">Integrate AI into your applications.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3 justify-items-center lg:gap-8 xl:gap-12">
            <FlightCard
              title="Text Generation API"
              subtitle="Language Models"
              category="Multiple Models"
              price="Pay per use"
              buttonText="Try API"
              imageUrl="/blue-bg.png"
              imageAlt="Text Generation API"
              href="https://platform.tnsaai.com"
            />

            <FlightCard
              title="Image Generation API"
              subtitle="Visual AI"
              category="High-Quality Images"
              price="Pay per image"
              buttonText="Try API"
              imageUrl="/purple-bg.png"
              imageAlt="Image Generation API"
              href="https://platform.tnsaai.com"
            />

            <FlightCard
              title="Voice Interaction API"
              subtitle="Speech AI"
              category="Natural Voices"
              price="Pay per minute"
              buttonText="Try API"
              imageUrl="/cream-bg.png"
              imageAlt="Voice Interaction API"
              href="https://platform.tnsaai.com"
            />
          </div>
        </div>
      </div>

      {/* Enterprise Services Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Enterprise Services.</h2>
            <p className="text-xl text-gray-900 font-medium sm:text-2xl lg:text-3xl">Custom AI solutions for your business needs.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3 justify-items-center lg:gap-8 xl:gap-12">
            <FlightCard
              title="Custom Fine-Tuning"
              subtitle="Domain-Specific Training"
              category="Enterprise Service"
              price="Custom Quote"
              buttonText="Learn more"
              imageUrl="/emerald-blue-bg.png"
              imageAlt="Custom Fine-Tuning"
              href="/enterprises"
            />

            <FlightCard
              title="Pre-Training Services"
              subtitle="Custom Model Architecture"
              category="Enterprise Service"
              price="Custom Quote"
              buttonText="Learn more"
              imageUrl="/violet-purple-bg.png"
              imageAlt="Pre-Training Services"
              href="/enterprises"
            />

            <FlightCard
              title="Infrastructure Support"
              subtitle="Cloud & On-Premise"
              category="Enterprise Service"
              price="Custom Quote"
              buttonText="Learn more"
              imageUrl="/green-blue-bg.png"
              imageAlt="Infrastructure Support"
              href="/enterprises"
            />

            <FlightCard
              title="AI Consulting"
              subtitle="Strategy Development"
              category="Enterprise Service"
              price="Custom Quote"
              buttonText="Learn more"
              imageUrl="/pink-bg.png"
              imageAlt="AI Consulting"
              href="/enterprises"
            />

            <FlightCard
              title="Data Engineering"
              subtitle="Pipeline Design"
              category="Enterprise Service"
              price="Custom Quote"
              buttonText="Learn more"
              imageUrl="/brown-bg.png"
              imageAlt="Data Engineering"
              href="/enterprises"
            />

            <FlightCard
              title="Model Deployment"
              subtitle="Production Scaling"
              category="Enterprise Service"
              price="Custom Quote"
              buttonText="Learn more"
              imageUrl="/black-bg.png"
              imageAlt="Model Deployment"
              href="/enterprises"
            />
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
                Try API →
              </Link>
              <Link
                href="/products/genchat"
                className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
              >
                GensChat →
              </Link>
              <Link
                href="/enterprises"
                className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
              >
                Enterprise Solutions →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
