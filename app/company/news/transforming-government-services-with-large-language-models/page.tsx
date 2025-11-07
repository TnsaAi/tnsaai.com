'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function PaperPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">15 January, 2025</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>Transforming Government Services with Large Language Models</h1>
        </div>

        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-artempodrez-7233314.jpg"
            alt="Research for India"
            fill
            priority
            className="object-cover rounded-[40px]"
          />
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Abstract.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              This research explores the transformative potential of Large Language Models (LLMs) in revolutionizing government services across India. We examine how AI-powered systems can enhance citizen engagement, streamline administrative processes, and improve service delivery at scale. The paper presents a comprehensive framework for implementing LLM-based solutions in government sectors, addressing challenges of multilingual support, data privacy, and accessibility while ensuring inclusive digital governance for all citizens.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Core Innovations.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Multilingual AI Systems: Supporting 22+ Indian languages for inclusive citizen services</li>
              <li>Automated Query Resolution: Intelligent systems handling citizen queries 24/7 with contextual understanding</li>
              <li>Document Processing: AI-powered analysis and processing of government documents and applications</li>
              <li>Privacy-Preserving AI: Secure implementation ensuring citizen data protection and compliance</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Impact Areas.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Citizen Services: Enhanced accessibility and responsiveness of government services</li>
              <li>Administrative Efficiency: Streamlined processes reducing bureaucratic delays</li>
              <li>Rural Connectivity: Bridging the digital divide with AI-powered assistance</li>
              <li>Transparency: Improved information access and government accountability</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Applications Across Sectors.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Healthcare: AI-assisted medical information and appointment systems</li>
              <li>Education: Personalized learning support and administrative automation</li>
              <li>Agriculture: Real-time advisory services for farmers in local languages</li>
              <li>Public Safety: Intelligent emergency response and citizen alert systems</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Future Vision.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Building AI infrastructure for nationwide government service transformation</li>
              <li>Developing India-specific models trained on local context and requirements</li>
              <li>Creating frameworks for ethical AI deployment in public sector</li>
              <li>Fostering digital literacy and AI adoption across all demographics</li>
            </ul>
          </div>

          <div className="flex justify-center" style={{ marginBottom: '77px' }}>
            <Link href="/research" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              View All Research →
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
