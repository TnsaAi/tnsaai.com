'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FlightCard } from '@/components/ui/flight-card'

export default function EnterprisesPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-white p-1 h-screen flex items-center justify-center">
        <div
          className="relative isolate w-full h-full flex items-center justify-center rounded-3xl overflow-hidden border border-gray-200"
          style={{
            backgroundImage: 'url(/green-blue-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-5xl font-medium tracking-tight mb-16 font-sans bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent sm:text-6xl lg:text-7xl xl:text-8xl">
              Enterprise AI<br />
              Solutions.
            </h1>
          </div>
        </div>
      </div>

      {/* Custom AI Services Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Custom AI Services.</h2>
            <p className="text-xl text-gray-900 font-medium sm:text-2xl lg:text-3xl">Tailored solutions for your enterprise needs.</p>
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
              href="/enterprises/fine-tuning"
            />

            <FlightCard
              title="Pre-Training Services"
              subtitle="Custom Model Architecture"
              category="Enterprise Service"
              price="Custom Quote"
              buttonText="Learn more"
              imageUrl="/violet-purple-bg.png"
              imageAlt="Pre-Training Services"
              href="/enterprises/pre-training"
            />

            <FlightCard
              title="Infrastructure Support"
              subtitle="Cloud & On-Premise"
              category="Enterprise Service"
              price="Custom Quote"
              buttonText="Learn more"
              imageUrl="/green-blue-bg.png"
              imageAlt="Infrastructure Support"
              href="/enterprises/infrastructure"
            />

            <FlightCard
              title="AI Consulting"
              subtitle="Strategy Development"
              category="Enterprise Service"
              price="Custom Quote"
              buttonText="Learn more"
              imageUrl="/pink-bg.png"
              imageAlt="AI Consulting"
              href="/enterprises/consulting"
            />

            <FlightCard
              title="Data Engineering"
              subtitle="Pipeline Design"
              category="Enterprise Service"
              price="Custom Quote"
              buttonText="Learn more"
              imageUrl="/brown-bg.png"
              imageAlt="Data Engineering"
              href="/enterprises/data-engineering"
            />

            <FlightCard
              title="Model Deployment"
              subtitle="Production Scaling"
              category="Enterprise Service"
              price="Custom Quote"
              buttonText="Learn more"
              imageUrl="/black-bg.png"
              imageAlt="Model Deployment"
              href="/enterprises/deployment"
            />
          </div>
        </div>
      </div>

      {/* Industry Solutions Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Industry Solutions.</h2>
            <p className="text-xl text-gray-900 font-medium sm:text-2xl lg:text-3xl">Specialized AI for every sector.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3 justify-items-center lg:gap-8 xl:gap-12">
            <FlightCard
              title="Financial Services"
              subtitle="Risk & Compliance"
              category="Industry Solution"
              price="Custom Quote"
              buttonText="Learn more"
              imageUrl="/blue-bg.png"
              imageAlt="Financial Services AI"
              href="/enterprises/consulting"
            />

            <FlightCard
              title="Healthcare"
              subtitle="Medical AI"
              category="Industry Solution"
              price="Custom Quote"
              buttonText="Learn more"
              imageUrl="/green-bg.png"
              imageAlt="Healthcare AI"
              href="/enterprises/consulting"
            />

            <FlightCard
              title="Education"
              subtitle="Learning AI"
              category="Industry Solution"
              price="Custom Quote"
              buttonText="Learn more"
              imageUrl="/purple-bg.png"
              imageAlt="Education AI"
              href="/enterprises/consulting"
            />
          </div>
        </div>
      </div>



      {/* Action Buttons */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 sm:text-4xl">Ready to Transform Your Enterprise?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule a consultation to discuss your specific needs and see how TNSA AI can drive your business forward.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="mailto:enterprise@tnsaai.com"
                className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
              >
                Schedule Consultation →
              </Link>
              <Link
                href="https://platform.tnsaai.com"
                className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
              >
                Try API →
              </Link>
              <Link
                href="/products"
                className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
              >
                View Products →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
