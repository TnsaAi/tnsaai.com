'use client'

import Link from 'next/link'
import { FlightCard } from '@/components/ui/flight-card'

export default function CompanyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-white pb-16 flex items-center justify-center" style={{ paddingTop: '222px' }}>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-5xl font-normal tracking-tight font-sans text-black sm:text-6xl lg:text-7xl">
            Company.
          </h1>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl tracking-tight text-gray-900 mb-4 sm:text-4xl">About TNSA.</h2>
            <p className="text-lg text-gray-900 sm:text-xl">Learn more about our mission and values</p>
          </div>

          <div className="flex flex-wrap justify-center" style={{ gap: '20px' }}>
            <FlightCard
              title="About Us"
              subtitle="Our Story"
              category="Company"
              price="Learn More"
              buttonText="Read more"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-diva-30441220.jpg"
              imageAlt="About Us"
              href="/about"
            />

            <FlightCard
              title="AI Safety"
              subtitle="Responsible AI"
              category="Safety"
              price="Learn More"
              buttonText="Read more"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-eugene-golovesov-1810803-16152015.jpg"
              imageAlt="AI Safety"
              href="/safety"
            />

            <FlightCard
              title="News"
              subtitle="Latest Updates"
              category="News & Press"
              price="Stay Updated"
              buttonText="View news"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-mustang-2179483.jpg"
              imageAlt="News"
              href="/company/news"
            />

            <FlightCard
              title="Careers"
              subtitle="Join Our Team"
              category="Opportunities"
              price="We're Hiring"
              buttonText="View openings"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-anniroenkae-3418400.jpg"
              imageAlt="Careers"
              href="/company/careers"
            />

            <FlightCard
              title="Contact"
              subtitle="Get in Touch"
              category="Support"
              price="Reach Out"
              buttonText="Contact us"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-anniroenkae-4175054.jpg"
              imageAlt="Contact"
              href="/company/contact"
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-gray-50 rounded-[40px] flex flex-col items-center justify-center" style={{width: '100%', maxWidth: '1028px', height: '575px', margin: '0 auto'}}>
            <h2 className="text-5xl font-normal text-center mb-8 text-black">
              Join us in shaping the future of AI
            </h2>
            <Link href="/company/careers" className="px-8 py-3 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              View Careers
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
