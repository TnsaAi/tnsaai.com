'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-white p-1 h-screen flex items-center justify-center">
        <div
          className="relative isolate w-full h-full flex items-center justify-center rounded-3xl overflow-hidden border border-gray-200"
          style={{
            backgroundImage: 'url(/gold-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-5xl font-medium tracking-tight mb-16 font-sans bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent sm:text-6xl lg:text-7xl xl:text-8xl">
              AI Products &<br />
              Enterprise Services.
            </h1>
          </div>
        </div>
      </div>

      {/* Core Products Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Core Products.</h2>
            <p className="text-xl text-gray-900 font-medium sm:text-2xl lg:text-3xl">Making AI accessible to All Humanity.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* TNSA Platform Card */}
            <Link href="/products/platform">
              <div
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/green-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-8">TNSA Platform</h3>
                  <p className="text-lg leading-relaxed">
                    Build the World with the Best Frontier Models.
                  </p>
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
              </div>
            </Link>

            {/* GenGChat Card */}
            <Link href="/products/genchat">
              <div
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/pink-strong-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-8">GensChat</h3>
                  <p className="text-lg leading-relaxed">
                    Access the Power of India&apos;s own Foundational Model.
                  </p>
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
              </div>
            </Link>

            {/* EdgeChat Card */}
            <Link href="/products/edgechat">
              <div
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/brown-blue-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-8">EdgeChat</h3>
                  <p className="text-lg leading-relaxed">
                    AI accessible to all Humanity run AI without Network
                  </p>
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
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* API Services Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">API Services.</h2>
            <p className="text-xl text-gray-900 font-medium sm:text-2xl lg:text-3xl">Integrate AI into your applications.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Text Generation API */}
            <Link href="https://api.tnsaai.com">
              <div
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/blue-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-8">Text Generation API</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Multiple Models</li>
                    <li>• Streaming Responses</li>
                    <li>• Custom Parameters</li>
                  </ul>
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
              </div>
            </Link>

            {/* Image Generation API */}
            <Link href="https://api.tnsaai.com">
              <div
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/purple-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-8">Image Generation API</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• High-Quality Images</li>
                    <li>• Style Control</li>
                    <li>• Batch Processing</li>
                  </ul>
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
              </div>
            </Link>

            {/* Voice API */}
            <Link href="https://api.tnsaai.com">
              <div
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/cream-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-8">Voice Interaction API</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Natural Voices</li>
                    <li>• Real-time Processing</li>
                    <li>• Voice Cloning</li>
                  </ul>
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
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Enterprise Services Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Enterprise Services.</h2>
            <p className="text-xl text-gray-900 font-medium sm:text-2xl lg:text-3xl">Custom AI solutions for your business needs.</p>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-8">
            {/* Custom Fine-Tuning */}
            <Link href="/enterprises">
              <div
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/emerald-blue-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-8">Custom Fine-Tuning</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Domain-Specific Training</li>
                    <li>• Custom Datasets</li>
                    <li>• Performance Optimization</li>
                  </ul>
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
              </div>
            </Link>

            {/* Pre-Training Services */}
            <Link href="/enterprises">
              <div
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/violet-purple-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-8">Pre-Training Services</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Custom Model Architecture</li>
                    <li>• Large-Scale Training</li>
                    <li>• Proprietary Data Integration</li>
                  </ul>
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
              </div>
            </Link>

            {/* Infrastructure Support */}
            <Link href="/enterprises">
              <div
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/green-blue-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-8">Infrastructure Support</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Cloud Deployment</li>
                    <li>• On-Premise Solutions</li>
                    <li>• 24/7 Technical Support</li>
                  </ul>
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
              </div>
            </Link>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* AI Consulting */}
            <Link href="/enterprises">
              <div
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/pink-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-8">AI Consulting</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Strategy Development</li>
                    <li>• Implementation Planning</li>
                    <li>• ROI Assessment</li>
                  </ul>
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
              </div>
            </Link>

            {/* Data Engineering */}
            <Link href="/enterprises">
              <div
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/brown-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-8">Data Engineering</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Data Pipeline Design</li>
                    <li>• Quality Assurance</li>
                    <li>• Privacy Compliance</li>
                  </ul>
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
              </div>
            </Link>

            {/* Model Deployment */}
            <Link href="/enterprises">
              <div
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/black-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-8">Model Deployment</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Production Scaling</li>
                    <li>• Performance Monitoring</li>
                    <li>• Continuous Integration</li>
                  </ul>
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
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 sm:text-4xl">Ready to Get Started?</h2>
            <div className="flex justify-center gap-4">
              <Link
                href="https://api.tnsaai.com"
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
              <Link
                href="/enterprises"
                className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
              >
                Enterprise Solutions →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}