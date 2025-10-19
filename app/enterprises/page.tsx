'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function EnterprisesPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-white p-1 h-screen flex items-center justify-center">
        <div
          className="relative isolate w-full h-full flex items-center justify-center rounded-3xl overflow-hidden border border-gray-200"
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-5xl font-medium tracking-tight mb-16 font-sans bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent sm:text-6xl lg:text-7xl xl:text-8xl">
              Enterprise AI<br />
              Solutions.
            </h1>
          </div>
        </div>
      </div>

      {/* Custom AI Services Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Custom AI Services.</h2>
            <p className="text-xl text-gray-900 font-medium sm:text-2xl lg:text-3xl">Tailored solutions for your enterprise needs.</p>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-8">
            {/* Custom Fine-Tuning */}
            <Link href="/enterprises/fine-tuning">
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
            <Link href="/enterprises/pre-training">
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
            <Link href="/enterprises/infrastructure">
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
            <Link href="/enterprises/consulting">
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
            <Link href="/enterprises/data-engineering">
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
            <Link href="/enterprises/deployment">
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

      {/* Industry Solutions Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Industry Solutions.</h2>
            <p className="text-xl text-gray-900 font-medium sm:text-2xl lg:text-3xl">Specialized AI for every sector.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Financial Services */}
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
                <h3 className="text-2xl font-semibold mb-8">Financial Services</h3>
                <p className="text-lg leading-relaxed">
                  Risk assessment, fraud detection, and automated compliance solutions.
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

            {/* Healthcare */}
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
                <h3 className="text-2xl font-semibold mb-8">Healthcare</h3>
                <p className="text-lg leading-relaxed">
                  Medical imaging analysis, patient data processing, and diagnostic assistance.
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

            {/* Education */}
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
                <h3 className="text-2xl font-semibold mb-8">Education</h3>
                <p className="text-lg leading-relaxed">
                  Personalized learning, automated assessment, and educational content generation.
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
          </div>
        </div>
      </div>



      {/* Action Buttons */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 sm:text-4xl">Ready to Transform Your Enterprise?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule a consultation to discuss your specific needs and see how TNSA AI can drive your business forward.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="mailto:enterprise@tnsaai.com"
                className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
              >
                Schedule Consultation →
              </Link>
              <Link
                href="https://platform.tnsaai.com"
                className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
              >
                Try API →
              </Link>
              <Link
                href="/products"
                className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
              >
                View Products →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
