'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function InfrastructurePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <div className="bg-white p-1 h-screen flex items-center justify-center">
        <div 
          className="relative isolate w-full h-full flex items-center justify-center rounded-3xl overflow-hidden border border-gray-200"
          style={{
            backgroundImage: 'url(/green-blue-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h6m-2 10a2 2 0 100 4 2 2 0 000-4zm8-10a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
            </div>
            <h1 className="text-5xl font-medium tracking-tight mb-8 font-sans sm:text-6xl lg:text-7xl xl:text-8xl">
              Infrastructure Support
            </h1>
            <p className="text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
              Enterprise-grade infrastructure solutions with cloud deployment, on-premise options, and 24/7 technical support.
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
          
          {/* Infrastructure Overview */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Enterprise Infrastructure Solutions</h2>
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                Our infrastructure support services ensure your AI models run reliably, securely, and efficiently at scale. 
                Whether you need cloud deployment, on-premise solutions, or hybrid architectures, we provide comprehensive 
                infrastructure management with enterprise-grade security and 24/7 technical support.
              </p>
            </div>
          </div>

          {/* Deployment Options */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Deployment Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Cloud Deployment</h3>
                <p className="text-gray-600">Scalable cloud infrastructure with auto-scaling, load balancing, and global distribution.</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">On-Premise Solutions</h3>
                <p className="text-gray-600">Complete control with on-premise deployment for maximum security and compliance.</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Hybrid Architecture</h3>
                <p className="text-gray-600">Best of both worlds with hybrid cloud-on-premise solutions for optimal flexibility.</p>
              </div>
            </div>
          </div>

          {/* Infrastructure Features */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Infrastructure Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 border border-gray-200 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">Auto-Scaling</h3>
                <p className="text-gray-600">Automatic resource scaling based on demand and usage patterns.</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">Security</h3>
                <p className="text-gray-600">Enterprise-grade security with encryption, access controls, and compliance.</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">Monitoring</h3>
                <p className="text-gray-600">Real-time monitoring, alerting, and performance analytics.</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-xl">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock technical support and incident response.</p>
              </div>
            </div>
          </div>

          {/* Support Services */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Support Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Infrastructure Setup</h3>
                <p className="text-gray-600">Complete infrastructure design, setup, and configuration for your specific requirements.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Performance Optimization</h3>
                <p className="text-gray-600">Continuous optimization of infrastructure performance and cost efficiency.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Security Management</h3>
                <p className="text-gray-600">Comprehensive security management including compliance and audit support.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Disaster Recovery</h3>
                <p className="text-gray-600">Backup and disaster recovery solutions to ensure business continuity.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Migration Services</h3>
                <p className="text-gray-600">Seamless migration from existing infrastructure to optimized AI-ready environments.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Training & Documentation</h3>
                <p className="text-gray-600">Team training and comprehensive documentation for infrastructure management.</p>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Technical Specifications</h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Cloud Infrastructure</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Multi-cloud support (AWS, Azure, GCP)</li>
                    <li>• Kubernetes orchestration</li>
                    <li>• Auto-scaling and load balancing</li>
                    <li>• Global CDN and edge deployment</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">On-Premise Solutions</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• GPU cluster management</li>
                    <li>• High-availability configurations</li>
                    <li>• Network security and isolation</li>
                    <li>• Custom hardware recommendations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Service Tiers */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Service Tiers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <h3 className="text-xl font-semibold mb-3">Standard Support</h3>
                <p className="text-3xl font-bold text-green-600 mb-4">Custom Quote</p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Business hours support</li>
                  <li>• Standard SLA (99.9% uptime)</li>
                  <li>• Basic monitoring and alerts</li>
                  <li>• Email and ticket support</li>
                </ul>
              </div>
              <div className="text-center p-6 rounded-2xl bg-green-50 border-2 border-green-200">
                <h3 className="text-xl font-semibold mb-3">Premium Support</h3>
                <p className="text-3xl font-bold text-green-600 mb-4">Custom Quote</p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• 24/7 technical support</li>
                  <li>• Enhanced SLA (99.95% uptime)</li>
                  <li>• Advanced monitoring and analytics</li>
                  <li>• Phone and priority support</li>
                </ul>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <h3 className="text-xl font-semibold mb-3">Enterprise Support</h3>
                <p className="text-3xl font-bold text-green-600 mb-4">Custom Quote</p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Dedicated support team</li>
                  <li>• Premium SLA (99.99% uptime)</li>
                  <li>• Custom monitoring solutions</li>
                  <li>• On-site support available</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div className="text-center bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Ready to Scale Your AI Infrastructure?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let our infrastructure experts design and manage a solution that scales with your business needs.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="mailto:enterprise@tnsaai.com"
                className="rounded-md bg-black px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
              >
                Schedule Infrastructure Review
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
