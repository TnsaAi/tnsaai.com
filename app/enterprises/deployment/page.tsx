'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function DeploymentPage() {
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
            <h1 className="text-5xl font-medium tracking-tight mb-16 font-sans text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Model Deployment<br />
              Services.
            </h1>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Scale with Confidence.</h2>
            <p className="text-xl text-gray-900 font-medium sm:text-2xl lg:text-3xl">
              Deploy AI models to production with enterprise-grade reliability, monitoring, and continuous integration.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Deployment Solutions.</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Production Scaling */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Production Scaling</h3>
              <p className="text-gray-600 mb-6">
                Scale your AI models to handle enterprise workloads with automatic load balancing and resource optimization.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Auto-scaling infrastructure</li>
                <li>• Load balancing and failover</li>
                <li>• Multi-region deployment</li>
                <li>• Cost optimization strategies</li>
              </ul>
            </div>

            {/* Performance Monitoring */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Performance Monitoring</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive monitoring and alerting systems to ensure optimal model performance and reliability.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Real-time performance metrics</li>
                <li>• Model drift detection</li>
                <li>• Custom alerting systems</li>
                <li>• Performance analytics dashboards</li>
              </ul>
            </div>

            {/* Continuous Integration */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Continuous Integration</h3>
              <p className="text-gray-600 mb-6">
                Automated CI/CD pipelines for seamless model updates and version management.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Automated testing pipelines</li>
                <li>• Blue-green deployments</li>
                <li>• Version control and rollback</li>
                <li>• A/B testing frameworks</li>
              </ul>
            </div>

            {/* Security & Compliance */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Security & Compliance</h3>
              <p className="text-gray-600 mb-6">
                Enterprise-grade security measures and compliance frameworks for regulated industries.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• End-to-end encryption</li>
                <li>• Access control and authentication</li>
                <li>• Compliance reporting</li>
                <li>• Audit trail maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Deployment Options */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Deployment Options.</h2>
            <p className="text-xl text-gray-900 font-medium sm:text-2xl lg:text-3xl">
              Choose the deployment strategy that fits your requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Cloud Deployment */}
            <div 
              className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[300px] flex flex-col justify-between"
              style={{
                backgroundImage: 'url(/blue-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4">Cloud Deployment</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Scalable cloud-native deployments with managed infrastructure.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• AWS, GCP, Azure support</li>
                  <li>• Serverless options</li>
                  <li>• Managed Kubernetes</li>
                </ul>
              </div>
            </div>

            {/* On-Premises */}
            <div 
              className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[300px] flex flex-col justify-between"
              style={{
                backgroundImage: 'url(/green-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4">On-Premises</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Secure on-premises deployment for sensitive data and compliance.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• Air-gapped environments</li>
                  <li>• Custom hardware optimization</li>
                  <li>• Full data control</li>
                </ul>
              </div>
            </div>

            {/* Hybrid Solutions */}
            <div 
              className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[300px] flex flex-col justify-between"
              style={{
                backgroundImage: 'url(/purple-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4">Hybrid Solutions</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Best of both worlds with hybrid cloud-on-premises architectures.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• Flexible data placement</li>
                  <li>• Burst scaling to cloud</li>
                  <li>• Unified management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Deployment Process.</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            <div className="text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Planning</h3>
              <p className="text-gray-600">Architecture design and resource planning for your deployment requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Setup</h3>
              <p className="text-gray-600">Infrastructure provisioning and environment configuration.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Deploy</h3>
              <p className="text-gray-600">Model deployment with comprehensive testing and validation.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Monitor</h3>
              <p className="text-gray-600">Continuous monitoring and performance optimization.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">5</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Scale</h3>
              <p className="text-gray-600">Ongoing optimization and scaling based on usage patterns.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 sm:text-4xl">Ready to Deploy at Scale?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your deployment requirements and create a solution that scales with your business.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="mailto:enterprise@tnsaai.com"
                className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
              >
                Schedule Consultation →
              </Link>
              <Link
                href="/enterprises"
                className="rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-all"
              >
                ← Back to Enterprise
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}