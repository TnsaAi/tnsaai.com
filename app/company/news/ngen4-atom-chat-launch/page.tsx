'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function PaperPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">20 January, 2025</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>NGen4 Atom Chat Launch</h1>
        </div>

        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-zaksheuskaya-709412-1568607.jpg"
            alt="NGen4 Atom Chat Launch"
            fill
            priority
            className="object-cover rounded-[40px]"
          />
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Introduction.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Today marks a significant milestone in TNSA's journey as we introduce NGen4 Atom Chat, our most massive conversational AI model to date. With over 100 billion parameters, NGen4 Atom represents a 10X scale increase from our largest open-weight model, NGen3 10B, setting new standards for conversational AI capabilities.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Key Features.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>100B+ parameter massive-scale architecture</li>
              <li>Advanced conversational understanding and generation</li>
              <li>Enhanced reasoning and problem-solving capabilities</li>
              <li>Multilingual support with deep contextual awareness</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Performance Highlights.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>State-of-the-art performance across major benchmarks</li>
              <li>Superior long-context understanding and retention</li>
              <li>Enhanced creative and analytical capabilities</li>
              <li>Improved instruction following and task completion</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Availability.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              NGen4 Atom Chat is now available through the TNSA API Platform for developers and enterprises looking to integrate cutting-edge conversational AI into their applications.
            </p>
          </div>

          <div className="flex justify-center" style={{ marginBottom: '77px' }}>
            <Link href="/models/ngen4-atom-chat" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              Learn More →
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
