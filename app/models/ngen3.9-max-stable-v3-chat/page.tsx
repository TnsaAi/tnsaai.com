'use client'

import Link from 'next/link'
import Image from 'next/image'
import BenchmarkChart from '@/components/ui/BenchmarkChart'
import BenchmarkTables from '@/components/ui/BenchmarkTables'

export default function NGen39MaxStableV3ChatPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">Sept 2025</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>
            NGen 3.9 Max
          </h1>
        </div>

        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/and-machines-FvjBNfAdTYE-unsplash.jpg"
            alt="NGen 3.9 Max Stable V3"
            fill
            priority
            className="object-cover rounded-[40px]"
          />
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Overview.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              NGen 3.9 Max Stable V3 is the enterprise-grade stable version optimized for production workloads,
              delivering maximum reliability and performance for mission-critical applications.
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
              <li>Enterprise-grade stability for production workloads</li>
              <li>Superior performance across reasoning and coding tasks</li>
              <li>256K token context length with 64K max generation</li>
              <li>Maximum reliability for mission-critical applications</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Pricing.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              ₹0.83 input / ₹1.25 output per 1K tokens
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
