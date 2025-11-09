'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function PaperPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">5 January, 2025</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>TNSA API & GensChat are Live</h1>
        </div>

        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-diva-34592788.jpg"
            alt="TNSA API and GensChat Launch"
            fill
            priority
            className="object-cover rounded-[40px]"
          />
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Launch Announcement.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              We are thrilled to announce that the TNSA API Platform and GensChat are now live and available for developers and users worldwide. This marks a major milestone in making advanced AI accessible to everyone.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">TNSA API Platform.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Unified access to all TNSA models through simple APIs</li>
              <li>Comprehensive documentation and SDKs</li>
              <li>Free tier available for developers to get started</li>
              <li>Enterprise-ready infrastructure with high availability</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">GensChat.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>India&apos;s own conversational AI platform</li>
              <li>Support for 22+ Indian languages</li>
              <li>Free access for all users</li>
              <li>Privacy-first design with secure conversations</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Get Started Today.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Visit platform.tnsaai.com to access the API or chat.tnsaai.com to try GensChat. Join thousands of developers and users already building with TNSA AI.
            </p>
          </div>

          <div className="flex justify-center" style={{ marginBottom: '77px' }}>
            <Link href="https://platform.tnsaai.com" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              Try Platform →
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
