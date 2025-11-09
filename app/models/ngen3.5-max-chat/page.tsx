'use client'

import Link from 'next/link'
import Image from 'next/image'
import BenchmarkChart from '@/components/ui/BenchmarkChart'
import BenchmarkTables from '@/components/ui/BenchmarkTables'

export default function NGen35MaxChatPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        {/* Date and Title */}
        <div className="text-center">
          <p className="text-sm text-gray-500">Nov 2025</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>
            NGen 3.5 Max
          </h1>
        </div>

        {/* Image */}
        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/mymind-tZCrFpSNiIQ-unsplash.jpg"
            alt="NGen 3.5 Max"
            fill
            priority
            className="object-cover rounded-[40px]"
          />
        </div>
      </div>

      {/* Paper Content */}
      <div className="bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Overview.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              NGen 3.5 Max represents the pinnacle of TNSA&apos;s conversational AI capabilities, delivering maximum
              performance across knowledge, reasoning, coding, and vision intelligence tasks. Built for enterprise
              applications requiring the highest level of accuracy and capability.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Benchmark Performance.</h2>
            <BenchmarkChart />
            <BenchmarkTables />
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Key Capabilities.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Maximum performance and capability across all benchmarks</li>
              <li>Advanced vision intelligence with multimodal understanding</li>
              <li>Superior reasoning and mathematical problem-solving</li>
              <li>Enterprise-grade alignment and instruction following</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Pricing.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              ₹0.79 input / ₹1.18 output per 1K tokens
            </p>
          </div>

          <div className="flex justify-center" style={{ marginBottom: '77px' }}>
            <Link
              href="https://platform.tnsaai.com"
              className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
            >
              Try on API Platform →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
