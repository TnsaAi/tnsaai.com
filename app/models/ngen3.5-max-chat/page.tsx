'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function NGen35MaxChatPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        {/* Date and Title */}
        <div className="text-center">
          <p className="text-sm text-gray-500">January 2025</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>NGen 3.5 Max</h1>
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
              NGen 3.5 Max represents the pinnacle of TNSA's conversational AI capabilities, delivering maximum performance across knowledge, reasoning, coding, and vision intelligence tasks. Built for enterprise applications requiring the highest level of accuracy and capability.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Benchmark Performance.</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse text-gray-900">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-3 px-2 font-semibold">Category</th>
                    <th className="text-left py-3 px-2 font-semibold">Benchmark</th>
                    <th className="text-right py-3 px-2 font-semibold">NGen 3.5 Max</th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-500">Llama-3.3-70B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={4}>Knowledge</td>
                    <td className="py-3 px-2">MMLU-Pro</td>
                    <td className="text-right py-3 px-2 font-semibold">75.8</td>
                    <td className="text-right py-3 px-2 text-gray-500">82.5</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">MMLU-Redux</td>
                    <td className="text-right py-3 px-2 font-semibold">90.2</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">GPQA</td>
                    <td className="text-right py-3 px-2 font-semibold">71.2</td>
                    <td className="text-right py-3 px-2 text-gray-500">69.4</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">SuperGPQA</td>
                    <td className="text-right py-3 px-2 font-semibold">57.8</td>
                    <td className="text-right py-3 px-2 text-gray-500">55.1</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={3}>Reasoning</td>
                    <td className="py-3 px-2">AIME25</td>
                    <td className="text-right py-3 px-2 font-semibold">89.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">78.5</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">HMMT25</td>
                    <td className="text-right py-3 px-2 font-semibold">63.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">51.2</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">LiveBench</td>
                    <td className="text-right py-3 px-2 font-semibold">76.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">75.6</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={3}>Coding</td>
                    <td className="py-3 px-2">LiveCodeBench v6</td>
                    <td className="text-right py-3 px-2 font-semibold">62.5</td>
                    <td className="text-right py-3 px-2 text-gray-500">61.9</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">CFEval</td>
                    <td className="text-right py-3 px-2 font-semibold">1912</td>
                    <td className="text-right py-3 px-2 text-gray-500">2100</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">OJBench</td>
                    <td className="text-right py-3 px-2 font-semibold">22.9</td>
                    <td className="text-right py-3 px-2 text-gray-500">19.8</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={2}>Alignment</td>
                    <td className="py-3 px-2">IFEval</td>
                    <td className="text-right py-3 px-2 font-semibold">92.8</td>
                    <td className="text-right py-3 px-2 text-gray-500">90</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">Arena-Hard v2</td>
                    <td className="text-right py-3 px-2 font-semibold">41.8</td>
                    <td className="text-right py-3 px-2 text-gray-500">39.1</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={8}>Vision Intelligence</td>
                    <td className="py-3 px-2">MMMU</td>
                    <td className="text-right py-3 px-2 font-semibold">75.6</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">MMMU Full</td>
                    <td className="text-right py-3 px-2 font-semibold">61.9</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">MathVista</td>
                    <td className="text-right py-3 px-2 font-semibold">83.2</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">MathVerse mini</td>
                    <td className="text-right py-3 px-2 font-semibold">68.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">RealWorldQA</td>
                    <td className="text-right py-3 px-2 font-semibold">76.9</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">DocVQA</td>
                    <td className="text-right py-3 px-2 font-semibold">95.6</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">ChartQA</td>
                    <td className="text-right py-3 px-2 font-semibold">85.9</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">A12Test</td>
                    <td className="text-right py-3 px-2 font-semibold">95.5</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
              ₹1.00 input / ₹1.50 output per 1K tokens
            </p>
          </div>

          <div className="flex justify-center" style={{ marginBottom: '77px' }}>
            <Link href="https://platform.tnsaai.com" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              Try on API Platform →
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
