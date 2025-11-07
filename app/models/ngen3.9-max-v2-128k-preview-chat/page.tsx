'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function NGen39MaxV2128KPreviewChatPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">January 2025</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>NGen 3.9 Max V2 128K Preview</h1>
        </div>

        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/mymind-tZCrFpSNiIQ-unsplash.jpg"
            alt="NGen 3.9 Max V2 128K Preview"
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
              NGen 3.9 Max V2 128K Preview handles long documents and books with a massive 128K token context window, perfect for processing extensive text and maintaining context over book-length content.
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
                    <th className="text-right py-3 px-2 font-semibold">NGen 3.9 Max 128K</th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-500">Llama-3.3-70B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={4}>Knowledge</td>
                    <td className="py-3 px-2">MMLU-Pro</td>
                    <td className="text-right py-3 px-2 font-semibold">81.8</td>
                    <td className="text-right py-3 px-2 text-gray-500">82.5</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">MMLU-Redux</td>
                    <td className="text-right py-3 px-2 font-semibold">93.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">GPQA</td>
                    <td className="text-right py-3 px-2 font-semibold">73.8</td>
                    <td className="text-right py-3 px-2 text-gray-500">69.4</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">SuperGPQA</td>
                    <td className="text-right py-3 px-2 font-semibold">55.8</td>
                    <td className="text-right py-3 px-2 text-gray-500">55.1</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={3}>Reasoning</td>
                    <td className="py-3 px-2">AIME25</td>
                    <td className="text-right py-3 px-2 font-semibold">88.3</td>
                    <td className="text-right py-3 px-2 text-gray-500">78.5</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">HMMT25</td>
                    <td className="text-right py-3 px-2 font-semibold">61.5</td>
                    <td className="text-right py-3 px-2 text-gray-500">51.2</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">LiveBench</td>
                    <td className="text-right py-3 px-2 font-semibold">77.8</td>
                    <td className="text-right py-3 px-2 text-gray-500">75.6</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={3}>Coding</td>
                    <td className="py-3 px-2">LiveCodeBench v6</td>
                    <td className="text-right py-3 px-2 font-semibold">61.2</td>
                    <td className="text-right py-3 px-2 text-gray-500">61.9</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">CFEval</td>
                    <td className="text-right py-3 px-2 font-semibold">1952</td>
                    <td className="text-right py-3 px-2 text-gray-500">2100</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">OJBench</td>
                    <td className="text-right py-3 px-2 font-semibold">23.9</td>
                    <td className="text-right py-3 px-2 text-gray-500">19.8</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={2}>Alignment</td>
                    <td className="py-3 px-2">IFEval</td>
                    <td className="text-right py-3 px-2 font-semibold">93.4</td>
                    <td className="text-right py-3 px-2 text-gray-500">90</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">Arena-Hard v2</td>
                    <td className="text-right py-3 px-2 font-semibold">40.9</td>
                    <td className="text-right py-3 px-2 text-gray-500">39.1</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium">Agent</td>
                    <td className="py-3 px-2">ScreenSpot Pro</td>
                    <td className="text-right py-3 px-2 font-semibold">60.2</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={4}>Multilingualism</td>
                    <td className="py-3 px-2">MultiIF</td>
                    <td className="text-right py-3 px-2 font-semibold">83.3</td>
                    <td className="text-right py-3 px-2 text-gray-500">80.1</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">MMLU-ProX</td>
                    <td className="text-right py-3 px-2 font-semibold">70.2</td>
                    <td className="text-right py-3 px-2 text-gray-500">84.5</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">INCLUDE</td>
                    <td className="text-right py-3 px-2 font-semibold">70.4</td>
                    <td className="text-right py-3 px-2 text-gray-500">83.2</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">PolyMATH</td>
                    <td className="text-right py-3 px-2 font-semibold">52.2</td>
                    <td className="text-right py-3 px-2 text-gray-500">54.6</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Key Capabilities.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>128K token context length for long documents</li>
              <li>Book-length context understanding</li>
              <li>Advanced reasoning on large text volumes</li>
              <li>64K max generation for comprehensive outputs</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Pricing.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              ₹0.66 input / ₹1.00 output per 1K tokens
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
