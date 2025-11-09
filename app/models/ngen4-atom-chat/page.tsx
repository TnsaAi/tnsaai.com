'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function NGen4AtomChatPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        {/* Date and Title */}
        <div className="text-center">
          <p className="text-sm text-gray-500">January 2025</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>NGen4 Atom Chat</h1>
        </div>

        {/* Image */}
        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/craig-melville-iv-8WY0khgE-unsplash.jpg"
            alt="NGen4 Atom Chat"
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
              NGen4 Atom Chat represents a massive leap in model scale and conversational capability. Built as a non-reasoning large language model, it&apos;s designed specifically for natural, engaging conversations and content generation at unprecedented scale. At 10X the size of TNSA&apos;s biggest open-weight model NGen3 10B, NGen4 Atom Chat delivers exceptional performance in dialogue, creative writing, and general language understanding with massive-scale AI capabilities.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Key Capabilities.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>100B+ parameter transformer architecture optimized for conversational AI</li>
              <li>32K token context window for extended dialogue and content generation</li>
              <li>10X scale of TNSA&apos;s biggest open-weight model NGen3 10B</li>
              <li>Exceptional performance in natural dialogue and creative writing</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Benchmark Performance.</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse text-gray-900">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-3 px-2 font-semibold">Model</th>
                    <th className="text-right py-3 px-2 font-semibold">MMLU (%)</th>
                    <th className="text-right py-3 px-2 font-semibold">GPQA Diamond (%)</th>
                    <th className="text-right py-3 px-2 font-semibold">Humanity&apos;s Last Exam (%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-semibold">NGen4-Atom-Chat</td>
                    <td className="text-right py-3 px-2 font-semibold">93</td>
                    <td className="text-right py-3 px-2 font-semibold">82</td>
                    <td className="text-right py-3 px-2 font-semibold">24</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 text-gray-500">OpenAI o3</td>
                    <td className="text-right py-3 px-2 text-gray-500">93</td>
                    <td className="text-right py-3 px-2 text-gray-500">83</td>
                    <td className="text-right py-3 px-2 text-gray-500">15</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 text-gray-500">Gemini 2.5 Pro</td>
                    <td className="text-right py-3 px-2 text-gray-500">86</td>
                    <td className="text-right py-3 px-2 text-gray-500">22</td>
                    <td className="text-right py-3 px-2 text-gray-500">0</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 text-gray-500">Grok-4</td>
                    <td className="text-right py-3 px-2 text-gray-500">88</td>
                    <td className="text-right py-3 px-2 text-gray-500">40</td>
                    <td className="text-right py-3 px-2 text-gray-500">0</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 text-gray-500">gpt-oss-120b</td>
                    <td className="text-right py-3 px-2 text-gray-500">90</td>
                    <td className="text-right py-3 px-2 text-gray-500">80</td>
                    <td className="text-right py-3 px-2 text-gray-500">15</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Performance Comparison.</h2>
            <div className="space-y-8">
              <div className="flex gap-2 text-xs mb-4">
                <div className="flex items-center gap-2"><div className="w-4 h-4 bg-blue-600"></div><span className="text-black">NGen4-Atom-Chat</span></div>
                <div className="flex items-center gap-2"><div className="w-4 h-4 bg-gray-400"></div><span className="text-black">OpenAI o3</span></div>
                <div className="flex items-center gap-2"><div className="w-4 h-4 bg-gray-300"></div><span className="text-black">Gemini 2.5 Pro</span></div>
                <div className="flex items-center gap-2"><div className="w-4 h-4 bg-gray-200"></div><span className="text-black">Grok-4</span></div>
                <div className="flex items-center gap-2"><div className="w-4 h-4 bg-gray-500"></div><span className="text-black">gpt-oss-120b</span></div>
              </div>
              
              <div>
                <div className="text-sm font-medium mb-2">MMLU (%)</div>
                <div className="flex gap-1 items-end h-32">
                  <div className="flex-1 bg-blue-600 rounded-t" style={{height: '93%'}}><span className="text-xs text-white p-1">93</span></div>
                  <div className="flex-1 bg-gray-400 rounded-t" style={{height: '93%'}}><span className="text-xs text-white p-1">93</span></div>
                  <div className="flex-1 bg-gray-300 rounded-t" style={{height: '86%'}}><span className="text-xs text-black p-1">86</span></div>
                  <div className="flex-1 bg-gray-200 rounded-t" style={{height: '88%'}}><span className="text-xs text-black p-1">88</span></div>
                  <div className="flex-1 bg-gray-500 rounded-t" style={{height: '90%'}}><span className="text-xs text-white p-1">90</span></div>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium mb-2">GPQA Diamond (%)</div>
                <div className="flex gap-1 items-end h-32">
                  <div className="flex-1 bg-blue-600 rounded-t" style={{height: '82%'}}><span className="text-xs text-white p-1">82</span></div>
                  <div className="flex-1 bg-gray-400 rounded-t" style={{height: '83%'}}><span className="text-xs text-white p-1">83</span></div>
                  <div className="flex-1 bg-gray-300 rounded-t" style={{height: '22%'}}><span className="text-xs text-black p-1">22</span></div>
                  <div className="flex-1 bg-gray-200 rounded-t" style={{height: '40%'}}><span className="text-xs text-black p-1">40</span></div>
                  <div className="flex-1 bg-gray-500 rounded-t" style={{height: '80%'}}><span className="text-xs text-white p-1">80</span></div>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium mb-2">Humanity&apos;s Last Exam (%)</div>
                <div className="flex gap-1 items-end h-32">
                  <div className="flex-1 bg-blue-600 rounded-t" style={{height: '24%'}}><span className="text-xs text-white p-1">24</span></div>
                  <div className="flex-1 bg-gray-400 rounded-t" style={{height: '15%'}}><span className="text-xs text-white p-1">15</span></div>
                  <div className="flex-1 bg-gray-300 rounded-t" style={{height: '5%'}}><span className="text-xs text-black p-1">0</span></div>
                  <div className="flex-1 bg-gray-200 rounded-t" style={{height: '5%'}}><span className="text-xs text-black p-1">0</span></div>
                  <div className="flex-1 bg-gray-500 rounded-t" style={{height: '15%'}}><span className="text-xs text-white p-1">15</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Applications Across Industries.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              NGen4 Atom Chat excels in conversational AI, content generation, creative writing, language translation, research and education, and custom fine-tuning for domain-specific applications. Build sophisticated chatbots, generate high-quality content at scale, and create human-like creative expressions across diverse contexts.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Pricing.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              $2.00 per 1K tokens
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
