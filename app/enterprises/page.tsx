'use client'

import Link from 'next/link'
import { FlightCard } from '@/components/ui/flight-card'

export default function EnterprisesPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-white pb-16 flex items-center justify-center" style={{ paddingTop: '222px' }}>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-5xl font-normal tracking-tight font-sans text-black sm:text-6xl lg:text-7xl">
            Enterprise.
          </h1>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl tracking-tight text-gray-900 mb-4 sm:text-4xl">Custom AI Services.</h2>
            <p className="text-lg text-gray-900 sm:text-xl">Tailored solutions for your enterprise needs</p>
          </div>

          <div className="flex flex-wrap justify-center" style={{ gap: '20px' }}>
            <FlightCard
              title="Custom Fine-Tuning"
              subtitle="Domain-Specific Training"
              category="Enterprise Service"
              price="Custom Quote"
              buttonText="Learn more"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/susan-wilkinson-6YNPuJ3Ybac-unsplash.jpg"
              imageAlt="Custom Fine-Tuning"
              href="/enterprises/fine-tuning"
            />

            <FlightCard
              title="Pre-Training Services"
              subtitle="Custom Model Architecture"
              category="Enterprise Service"
              price="Custom Quote"
              buttonText="Learn more"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/brandon-stecz-9rX32anLiVA-unsplash.jpg"
              imageAlt="Pre-Training Services"
              href="/enterprises/pre-training"
            />

            <FlightCard
              title="Infrastructure Support"
              subtitle="Cloud & On-Premise"
              category="Enterprise Service"
              price="Custom Quote"
              buttonText="Learn more"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-eva-bronzini-7605542.jpg"
              imageAlt="Infrastructure Support"
              href="/enterprises/infrastructure"
            />

            <FlightCard
              title="AI Consulting"
              subtitle="Strategy Development"
              category="Enterprise Service"
              price="Custom Quote"
              buttonText="Learn more"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-alexant-16738884.jpg"
              imageAlt="AI Consulting"
              href="/enterprises/consulting"
            />

            <FlightCard
              title="Data Engineering"
              subtitle="Pipeline Design"
              category="Enterprise Service"
              price="Custom Quote"
              buttonText="Learn more"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-karola-g-4046791.jpg"
              imageAlt="Data Engineering"
              href="/enterprises/data-engineering"
            />

            <FlightCard
              title="Model Deployment"
              subtitle="Production Scaling"
              category="Enterprise Service"
              price="Custom Quote"
              buttonText="Learn more"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-karola-g-4046757.jpg"
              imageAlt="Model Deployment"
              href="/enterprises/deployment"
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-gray-50 rounded-[40px] flex flex-col items-center justify-center" style={{width: '100%', maxWidth: '1028px', height: '575px', margin: '0 auto'}}>
            <h2 className="text-5xl font-normal text-center mb-8 text-black">
              Ready to transform your enterprise?
            </h2>
            <Link href="/company/contact" className="px-8 py-3 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
