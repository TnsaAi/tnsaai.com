'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function PaperPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">10 January, 2025</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>TNSA X Microsoft for Startups & Google TPU Research Cloud</h1>
        </div>

        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-steve-1509534.jpg"
            alt="TNSA Partnerships"
            fill
            priority
            className="object-cover rounded-[40px]"
          />
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Partnership Announcement.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              TNSA is excited to announce our collaboration with Microsoft for Startups and our acceptance into the Google TPU Research Cloud program. These partnerships mark a significant milestone in our mission to advance AI research and development.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Microsoft for Startups.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Access to Azure cloud infrastructure and services</li>
              <li>Technical support and mentorship from Microsoft experts</li>
              <li>Collaboration opportunities with the Microsoft ecosystem</li>
              <li>Resources to scale AI development and deployment</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Google TPU Research Cloud.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Access to cutting-edge TPU hardware for AI research</li>
              <li>Accelerated model training and experimentation</li>
              <li>Support for large-scale AI research projects</li>
              <li>Collaboration with the global AI research community</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Impact on TNSA.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              These partnerships will significantly accelerate our AI research capabilities, enabling us to develop more powerful models, conduct cutting-edge research, and deliver better AI solutions to our users and partners worldwide.
            </p>
          </div>

          <div className="flex justify-center" style={{ marginBottom: '77px' }}>
            <Link href="/company/news" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              View All News →
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
