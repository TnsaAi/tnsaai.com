'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function NGen35ProChatPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">January 2025</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>NGen 3.5 Pro</h1>
        </div>

        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/blur-1721080_1280.jpg"
            alt="NGen 3.5 Pro"
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
              NGen 3.5 Pro delivers professional-grade conversational AI with strong contextual and logical understanding. Optimized for enterprise applications requiring high performance at efficient cost.
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
                    <th className="text-right py-3 px-2 font-semibold">NGen 3.5 Pro</th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-500">Llama-3.3-70B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={4}>Knowledge</td>
                    <td className="py-3 px-2">MMLU-Pro</td>
                    <td className="text-right py-3 px-2 font-semibold">73.4</td>
                    <td className="text-right py-3 px-2 text-gray-500">82.5</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">MMLU-Redux</td>
                    <td className="text-right py-3 px-2 font-semibold">87.5</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">GPQA</td>
                    <td className="text-right py-3 px-2 font-semibold">61.4</td>
                    <td className="text-right py-3 px-2 text-gray-500">69.4</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">SuperGPQA</td>
                    <td className="text-right py-3 px-2 font-semibold">51.2</td>
                    <td className="text-right py-3 px-2 text-gray-500">55.1</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={3}>Reasoning</td>
                    <td className="py-3 px-2">AIME25</td>
                    <td className="text-right py-3 px-2 font-semibold">71.6</td>
                    <td className="text-right py-3 px-2 text-gray-500">78.5</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">HMMT25</td>
                    <td className="text-right py-3 px-2 font-semibold">49.2</td>
                    <td className="text-right py-3 px-2 text-gray-500">51.2</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">LiveBench</td>
                    <td className="text-right py-3 px-2 font-semibold">68.4</td>
                    <td className="text-right py-3 px-2 text-gray-500">75.6</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={3}>Coding</td>
                    <td className="py-3 px-2">LiveCodeBench v6</td>
                    <td className="text-right py-3 px-2 font-semibold">55.6</td>
                    <td className="text-right py-3 px-2 text-gray-500">61.9</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">CFEval</td>
                    <td className="text-right py-3 px-2 font-semibold">1730</td>
                    <td className="text-right py-3 px-2 text-gray-500">2100</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">OJBench</td>
                    <td className="text-right py-3 px-2 font-semibold">21.2</td>
                    <td className="text-right py-3 px-2 text-gray-500">19.8</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={2}>Alignment</td>
                    <td className="py-3 px-2">IFEval</td>
                    <td className="text-right py-3 px-2 font-semibold">86.4</td>
                    <td className="text-right py-3 px-2 text-gray-500">90</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">Arena-Hard v2</td>
                    <td className="text-right py-3 px-2 font-semibold">20.4</td>
                    <td className="text-right py-3 px-2 text-gray-500">39.1</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={8}>Vision Intelligence</td>
                    <td className="py-3 px-2">MMMU</td>
                    <td className="text-right py-3 px-2 font-semibold">73.4</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">MMMU Full</td>
                    <td className="text-right py-3 px-2 font-semibold">59.2</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">MathVista</td>
                    <td className="text-right py-3 px-2 font-semibold">79.7</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">MathVerse mini</td>
                    <td className="text-right py-3 px-2 font-semibold">52.8</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">RealWorldQA</td>
                    <td className="text-right py-3 px-2 font-semibold">76.9</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">DocVQA</td>
                    <td className="text-right py-3 px-2 font-semibold">90.3</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">ChartQA</td>
                    <td className="text-right py-3 px-2 font-semibold">82.2</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">A12Test</td>
                    <td className="text-right py-3 px-2 font-semibold">90.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Key Capabilities.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Professional-grade conversational AI with strong contextual understanding</li>
              <li>Vision intelligence with multimodal capabilities</li>
              <li>Balanced performance across reasoning and coding tasks</li>
              <li>Cost-effective solution for enterprise applications</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Pricing.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              ₹0.60 input / ₹0.90 output per 1K tokens
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
