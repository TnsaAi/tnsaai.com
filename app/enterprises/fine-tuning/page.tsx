'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function FineTuningPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <div className="bg-white p-1 h-screen flex items-center justify-center">
        <div 
          className="relative isolate w-full h-full flex items-center justify-center rounded-3xl overflow-hidden border border-gray-200"
          style={{
            backgroundImage: 'url(/emerald-blue-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
            </div>
            <h1 className="text-5xl font-medium tracking-tight mb-8 font-sans sm:text-6xl lg:text-7xl xl:text-8xl">
              Custom Fine-Tuning
            </h1>
            <p className="text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
              Transform our foundational models into domain-specific experts tailored for your unique business needs.
            </p>
            
            <div className="flex justify-center gap-4 mb-8">
              <Link
                href="mailto:enterprise@tnsaai.com"
                className="rounded-md bg-white/20 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/30 transition-all border border-white/30"
              >
                Get Started →
              </Link>
              <Link
                href="/enterprises"
                className="rounded-md bg-white/20 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/30 transition-all border border-white/30"
              >
                Back to Enterprise →
              </Link>
            </div>

            <div className="flex justify-center">
              <Image
                src="/TNSA.png"
                alt="TNSA"
                width={80}
                height={32}
                className="opacity-80"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* What is Fine-Tuning */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">What is Custom Fine-Tuning?</h2>
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                Fine-tuning is the process of taking our pre-trained foundational models and adapting them to your specific domain, 
                use case, or industry. By training on your proprietary data and requirements, we create a specialized AI model 
                that understands your business context, terminology, and objectives better than any general-purpose model.
              </p>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Why Choose Custom Fine-Tuning?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Domain Expertise</h3>
                <p className="text-gray-600">Models trained specifically on your industry data perform significantly better than general models.</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Data Privacy</h3>
                <p className="text-gray-600">Your proprietary data remains secure and is used exclusively for your custom model.</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Superior Performance</h3>
                <p className="text-gray-600">Achieve higher accuracy and relevance for your specific use cases and requirements.</p>
              </div>
            </div>
          </div>

          {/* Fine-Tuning Process */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Our Fine-Tuning Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 border border-gray-200 rounded-xl">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-emerald-600 font-bold text-lg">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Data Assessment</h3>
                <p className="text-gray-600">We analyze your data quality, quantity, and structure to design the optimal training approach.</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Model Selection</h3>
                <p className="text-gray-600">Choose the best base model from our NGen series based on your performance and resource requirements.</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-lg">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Training & Optimization</h3>
                <p className="text-gray-600">Fine-tune the model using advanced techniques and continuous optimization for best results.</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-xl">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 font-bold text-lg">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Deployment & Support</h3>
                <p className="text-gray-600">Deploy your custom model with ongoing monitoring, updates, and technical support.</p>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Fine-Tuning Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Legal Document Analysis</h3>
                <p className="text-gray-600">Train models to understand legal terminology, contract structures, and compliance requirements.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Medical Diagnosis Support</h3>
                <p className="text-gray-600">Fine-tune for medical terminology, patient data analysis, and diagnostic assistance.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Financial Risk Assessment</h3>
                <p className="text-gray-600">Customize models for financial data analysis, risk evaluation, and regulatory compliance.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Customer Service Automation</h3>
                <p className="text-gray-600">Train models on your product knowledge base and customer interaction patterns.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Technical Documentation</h3>
                <p className="text-gray-600">Specialize models for technical writing, API documentation, and code explanation.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Industry-Specific Content</h3>
                <p className="text-gray-600">Create models that understand your industry's unique language, processes, and requirements.</p>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Technical Capabilities</h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Supported Base Models</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• NGen 3.9 Series (Lite, Pro, Max)</li>
                    <li>• NGen 3 Series (3B, 7B, 10B)</li>
                    <li>• Specialized models (140M variants)</li>
                    <li>• Custom architectures available</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Training Features</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Parameter-efficient fine-tuning</li>
                    <li>• Multi-task learning capabilities</li>
                    <li>• Reinforcement learning from human feedback</li>
                    <li>• Continuous learning and adaptation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing & Timeline */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Investment & Timeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <h3 className="text-xl font-semibold mb-3">Starter Package</h3>
                <p className="text-3xl font-bold text-emerald-600 mb-4">Custom Quote</p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Small dataset (&lt;10K samples)</li>
                  <li>• Single use case</li>
                  <li>• 2-4 week timeline</li>
                  <li>• Basic support included</li>
                </ul>
              </div>
              <div className="text-center p-6 rounded-2xl bg-emerald-50 border-2 border-emerald-200">
                <h3 className="text-xl font-semibold mb-3">Professional Package</h3>
                <p className="text-3xl font-bold text-emerald-600 mb-4">Custom Quote</p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Medium dataset (&lt;100K samples)</li>
                  <li>• Multiple use cases</li>
                  <li>• 4-8 week timeline</li>
                  <li>• Priority support included</li>
                </ul>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <h3 className="text-xl font-semibold mb-3">Enterprise Package</h3>
                <p className="text-3xl font-bold text-emerald-600 mb-4">Custom Quote</p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Large dataset (100K+ samples)</li>
                  <li>• Complex multi-domain training</li>
                  <li>• 8-16 week timeline</li>
                  <li>• Dedicated support team</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div className="text-center bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Ready to Create Your Custom Model?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your specific requirements and design a fine-tuning solution that delivers exceptional results for your business.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="mailto:enterprise@tnsaai.com"
                className="rounded-md bg-black px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/enterprises"
                className="rounded-md border border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-all"
              >
                Explore Other Services
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
