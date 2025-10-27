'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PromptInputBox } from '@/components/ui/ai-prompt-box'

export default function Home() {
  const handleSendMessage = (message: string, files?: File[]) => {
    console.log('Message:', message);
    console.log('Files:', files);
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message.trim())
      window.open(`https://chat.tnsaai.com/?message=${encodedMessage}`, '_blank')
    }
  }

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-white p-1 h-screen flex items-center justify-center">
        <div 
          className="relative isolate w-full h-full flex items-center justify-center rounded-3xl overflow-hidden border border-gray-200"
          style={{
            backgroundImage: 'url(/black-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-5xl font-medium tracking-tight mb-16 font-sans bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent sm:text-6xl lg:text-7xl xl:text-8xl">
              Building World&apos;s First ASI.
            </h1>
            
            {/* Chat Input */}
            <div className="mx-auto max-w-2xl">
              <PromptInputBox 
                onSend={handleSendMessage}
                placeholder="Talk to GensChat"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Models Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Models.</h2>
            <p className="text-xl text-gray-900 font-medium sm:text-2xl lg:text-3xl">Best Frontier Models, Working for you.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* NGen 3.9 Lite Card */}
            <Link href="/models/ngen3-lite">
              <Card
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/cream-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <CardHeader className="p-0 mb-8">
                    <CardTitle className="text-2xl font-semibold">NGen 3.9 Lite</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-2 text-lg">
                      <li>• Ultra-Fast</li>
                      <li>• Real-time</li>
                      <li>• Lightweight</li>
                    </ul>
                  </CardContent>
                </div>
                <div className="flex justify-between items-end">
                  <Image
                    src="/TNSA.png"
                    alt="TNSA"
                    width={60}
                    height={24}
                    className="opacity-80"
                  />
                </div>
              </Card>
            </Link>

            {/* NGen 3.9 Pro Card */}
            <Link href="/models/ngen3-pro">
              <Card
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/blue-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <CardHeader className="p-0 mb-8">
                    <CardTitle className="text-2xl font-semibold">NGen 3.9 Pro</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-2 text-lg">
                      <li>• Professional</li>
                      <li>• Enterprise</li>
                      <li>• Advanced</li>
                    </ul>
                  </CardContent>
                </div>
                <div className="flex justify-between items-end">
                  <Image
                    src="/TNSA.png"
                    alt="TNSA"
                    width={60}
                    height={24}
                    className="opacity-80"
                  />
                </div>
              </Card>
            </Link>

            {/* NGen 3.9 Max Card */}
            <Link href="/models/ngen3-max">
              <Card
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/purple-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <CardHeader className="p-0 mb-8">
                    <CardTitle className="text-2xl font-semibold">NGen 3.9 Max</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-2 text-lg">
                      <li>• Maximum Power</li>
                      <li>• Research-Grade</li>
                      <li>• Cutting-Edge</li>
                    </ul>
                  </CardContent>
                </div>
                <div className="flex justify-between items-end">
                  <Image
                    src="/TNSA.png"
                    alt="TNSA"
                    width={60}
                    height={24}
                    className="opacity-80"
                  />
                </div>
              </Card>
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <Link
              href="/models"
              className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
            >
              View All Models →
            </Link>
            <Link
              href="https://platform.tnsaai.com"
              className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
            >
              Try API →
            </Link>
            <Link
              href="/products/genchat"
              className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
            >
              GenGChat →
            </Link>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Products.</h2>
            <p className="text-xl text-gray-900 font-medium sm:text-2xl lg:text-3xl">Making AI accessible to All Humanity.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* TNSA Platform Card */}
            <Link href="/products/platform">
              <Card
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/green-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <CardHeader className="p-0 mb-8">
                    <CardTitle className="text-2xl font-semibold">TNSA Platform</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-lg leading-relaxed">
                      Build the World with the Best Frontier Models.
                    </p>
                  </CardContent>
                </div>
                <div className="flex justify-between items-end">
                  <Image
                    src="/TNSA.png"
                    alt="TNSA"
                    width={60}
                    height={24}
                    className="opacity-80"
                  />
                </div>
              </Card>
            </Link>

            {/* GensChat Card */}
            <Link href="/products/genchat">
              <Card
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/pink-strong-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <CardHeader className="p-0 mb-8">
                    <CardTitle className="text-2xl font-semibold">GensChat</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-lg leading-relaxed">
                      Access the Power of India&apos;s own Foundational Model.
                    </p>
                  </CardContent>
                </div>
                <div className="flex justify-between items-end">
                  <Image
                    src="/TNSA.png"
                    alt="TNSA"
                    width={60}
                    height={24}
                    className="opacity-80"
                  />
                </div>
              </Card>
            </Link>

            {/* EdgeChat Card */}
            <Link href="/products/edgechat">
              <Card
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/brown-blue-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <CardHeader className="p-0 mb-8">
                    <CardTitle className="text-2xl font-semibold">EdgeChat</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-lg leading-relaxed">
                      AI accessible to all Humanity run AI without Network
                    </p>
                  </CardContent>
                </div>
                <div className="flex justify-between items-end">
                  <Image
                    src="/TNSA.png"
                    alt="TNSA"
                    width={60}
                    height={24}
                    className="opacity-80"
                  />
                </div>
              </Card>
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <Link
              href="/products"
              className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
            >
              View All Products →
            </Link>
            <Link
              href="https://platform.tnsaai.com"
              className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
            >
              Try API →
            </Link>
            <Link
              href="/products/genchat"
              className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
            >
              GensChat →
            </Link>
          </div>
        </div>
      </div>

      {/* AI Companies Comparison Table Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">AI Companies Comparison.</h2>
            <p className="text-xl text-gray-900 font-medium sm:text-2xl lg:text-3xl">Compare leading AI companies and their flagship models.</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-xl bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 border-r border-gray-200">Aspect</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-green-700 bg-green-50">TNSA</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">OpenAI</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">DeepMind</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Anthropic</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">DeepSeek</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                  <td className="px-6 py-4 font-semibold text-gray-800 bg-gray-50 border-r border-gray-200">Founded</td>
                  <td className="px-6 py-4 text-gray-700 bg-green-50/30">2021, India</td>
                  <td className="px-6 py-4 text-gray-700">2015, USA</td>
                  <td className="px-6 py-4 text-gray-700">2010, UK (Google-owned)</td>
                  <td className="px-6 py-4 text-gray-700">2021, USA</td>
                  <td className="px-6 py-4 text-gray-700">2023, China</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                  <td className="px-6 py-4 font-semibold text-gray-800 bg-gray-50 border-r border-gray-200">Founders</td>
                  <td className="px-6 py-4 text-gray-700 bg-green-50/30">Thishyaketh & Nachiketh Abimalla</td>
                  <td className="px-6 py-4 text-gray-700">Elon Musk, Sam Altman, Greg Brockman</td>
                  <td className="px-6 py-4 text-gray-700">Demis Hassabis, Shane Legg, Mustafa Suleyman</td>
                  <td className="px-6 py-4 text-gray-700">Dario & Daniela Amodei</td>
                  <td className="px-6 py-4 text-gray-700">Zhipu AI alumni, Jidong Sha</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                  <td className="px-6 py-4 font-semibold text-gray-800 bg-gray-50 border-r border-gray-200">Mission</td>
                  <td className="px-6 py-4 text-gray-700 bg-green-50/30">
                    <span className="font-semibold text-green-700">Build Super Intelligence (ASI)</span><br/>
                    <span className="text-sm text-gray-600">1T Qubit Quantum Processor, Quantum Applied AI</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">Ensure AGI benefits all humanity</td>
                  <td className="px-6 py-4 text-gray-700">Solve intelligence → apply to science & society</td>
                  <td className="px-6 py-4 text-gray-700">Safe, interpretable, steerable AI</td>
                  <td className="px-6 py-4 text-gray-700">Democratize AI with efficient training</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                  <td className="px-6 py-4 font-semibold text-gray-800 bg-gray-50 border-r border-gray-200">Flagship Models</td>
                  <td className="px-6 py-4 text-gray-700 bg-green-50/30">
                    <span className="font-semibold text-green-700">NGen 3.9 Reasoning</span><br/>
                    <span className="text-sm text-gray-600">NGen 3.1 Pro Multimodal, IGen 1 Nano</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">GPT-4, DALL·E 3, Codex</td>
                  <td className="px-6 py-4 text-gray-700">Gemini, AlphaFold, AlphaGo</td>
                  <td className="px-6 py-4 text-gray-700">Claude 3.5</td>
                  <td className="px-6 py-4 text-gray-700">DeepSeek-V3, DeepSeek-Coder</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                  <td className="px-6 py-4 font-semibold text-gray-800 bg-gray-50 border-r border-gray-200">Core Technologies</td>
                  <td className="px-6 py-4 text-gray-700 bg-green-50/30">
                    <span className="font-semibold text-green-700">NGen LLMs, Neura AGI</span><br/>
                    <span className="text-sm text-gray-600">Tokenize2, IGen, OAX Framework, Quantum AI</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">GPT series, Codex, DALL·E, ChatGPT</td>
                  <td className="px-6 py-4 text-gray-700">AlphaFold (biology), Reinforcement Learning, Gemini</td>
                  <td className="px-6 py-4 text-gray-700">Constitutional AI, Claude series</td>
                  <td className="px-6 py-4 text-gray-700">Sparse MoE, efficient LLM training</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                  <td className="px-6 py-4 font-semibold text-gray-800 bg-gray-50 border-r border-gray-200">Enterprise Focus</td>
                  <td className="px-6 py-4 text-gray-700 bg-green-50/30">
                    <span className="font-semibold text-green-700">Enterprise-first</span><br/>
                    <span className="text-sm text-gray-600">Customizable, sovereign AI</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">API-first SaaS, limited customization</td>
                  <td className="px-6 py-4 text-gray-700">Research-first, enterprise only via Google Cloud</td>
                  <td className="px-6 py-4 text-gray-700">Safety-first APIs, not fully enterprise-driven</td>
                  <td className="px-6 py-4 text-gray-700">Mass adoption, cost-driven AI</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                  <td className="px-6 py-4 font-semibold text-gray-800 bg-gray-50 border-r border-gray-200">Data Control</td>
                  <td className="px-6 py-4 text-gray-700 bg-green-50/30">
                    <span className="font-semibold text-green-700">Full ownership</span><br/>
                    <span className="text-sm text-gray-600">Sovereign deployment</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">Data hosted on OpenAI infra (Azure/US)</td>
                  <td className="px-6 py-4 text-gray-700">Data tied to Google Cloud</td>
                  <td className="px-6 py-4 text-gray-700">Cloud-only US infra</td>
                  <td className="px-6 py-4 text-gray-700">China-linked infra (trust concerns)</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                  <td className="px-6 py-4 font-semibold text-gray-800 bg-gray-50 border-r border-gray-200">Pricing</td>
                  <td className="px-6 py-4 text-gray-700 bg-green-50/30">
                    <span className="font-semibold text-green-700">Flexible enterprise licensing</span><br/>
                    <span className="text-sm text-gray-600">Partnerships</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">Subscription/API-based (per token)</td>
                  <td className="px-6 py-4 text-gray-700">Google Cloud pricing (bundled)</td>
                  <td className="px-6 py-4 text-gray-700">Premium API costs</td>
                  <td className="px-6 py-4 text-gray-700">Low-cost training/inference</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                  <td className="px-6 py-4 font-semibold text-gray-800 bg-gray-50 border-r border-gray-200">Scale</td>
                  <td className="px-6 py-4 text-gray-700 bg-green-50/30">Small but rapidly growing</td>
                  <td className="px-6 py-4 text-gray-700">Thousands of staff + Microsoft infra</td>
                  <td className="px-6 py-4 text-gray-700">Global Google-scale labs</td>
                  <td className="px-6 py-4 text-gray-700">~400 staff, scaling</td>
                  <td className="px-6 py-4 text-gray-700">~200 engineers</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Key Differentiators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ultra-Fast Performance</h3>
              <p className="text-gray-600">TNSA models deliver lightning-fast responses with optimized inference speeds.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost-Effective</h3>
              <p className="text-gray-600">Competitive pricing with enterprise-grade performance and reliability.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation Focus</h3>
              <p className="text-gray-600">Cutting-edge research in quantum intelligence and ASI development.</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <Link
              href="/models"
              className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
            >
              View TNSA Models →
            </Link>
            <Link
              href="https://platform.tnsaai.com"
              className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
            >
              Try TNSA API →
            </Link>
            <Link
              href="/enterprises"
              className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
            >
              Enterprise Solutions →
            </Link>
          </div>
        </div>
      </div>

      {/* Collaborations Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">
              Our Partners
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              TNSA is excited to announce its collaboration with Microsoft for Startups and our acceptance into the Google TPU Research Cloud program, providing us with resources to accelerate our AI research.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-8 sm:gap-x-16">
              <Image
                src="/ms_startups.png"
                alt="Microsoft for Startups Logo"
                width={400}
                height={160}
                className="object-contain"
              />
              <Image
                src="/google_trc.png"
                alt="Google TPU Research Cloud Logo"
                width={200}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="mt-16">
              <Link
                href="/company/news/tnsa-x-microsoft-for-startups-tnsa-x-google-tpu-research-cloud"
                className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
              >
                Read the Announcement →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Updates Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Latest Updates.</h2>
            <p className="text-xl text-gray-900 font-medium sm:text-2xl lg:text-3xl">Latest News and Updates from our Lab.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Top Row - Two Cards */}
            <Card>
              <CardHeader>
                <CardTitle>Quantum Approach for Machine Learning</CardTitle>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>LLMs can be Creative and Independent</CardTitle>
              </CardHeader>
            </Card>

            {/* Bottom Row - Two Cards */}
            <Card>
              <CardHeader>
                <CardTitle>How to Build AI Agents with NGen3 Models - Complete Guide</CardTitle>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>OpenArchX v0.1.5</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">
                  Breakthrough in Machine Learning Speed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
