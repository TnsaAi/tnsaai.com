'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function PaperPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">18 January, 2025</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>NGen 3.1 Models Series Launch</h1>
        </div>

        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-pixabay-355288.jpg"
            alt="NGen 3.1 Models Series Launch"
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
              We are excited to announce the launch of the NGen 3.1 series, representing the next generation of frontier AI models with breakthrough performance across all benchmarks. The NGen 3.1 series introduces advanced multimodal capabilities and enhanced reasoning.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Model Lineup.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>NGen 3.1 Pro - Professional-grade multimodal model</li>
              <li>NGen 3.1 Pro Multimodal - Advanced vision and text capabilities</li>
              <li>Enhanced context understanding and generation</li>
              <li>Improved performance across diverse tasks</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Key Innovations.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Breakthrough multimodal architecture</li>
              <li>Enhanced vision-language understanding</li>
              <li>Superior reasoning and analytical capabilities</li>
              <li>Optimized for real-world applications</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Availability.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              The NGen 3.1 series is now available through the TNSA API Platform, offering developers access to cutting-edge multimodal AI capabilities.
            </p>
          </div>

          <div className="flex justify-center" style={{ marginBottom: '77px' }}>
            <Link href="/models/ngen3.1-pro" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              Explore Models →
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
