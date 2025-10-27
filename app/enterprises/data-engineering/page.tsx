'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function DataEngineeringPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-white p-1 h-screen flex items-center justify-center">
        <div 
          className="relative isolate w-full h-full flex items-center justify-center rounded-3xl overflow-hidden border border-gray-200"
          style={{
            backgroundImage: 'url(/brown-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-5xl font-medium tracking-tight mb-16 font-sans text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Data Engineering<br />
              Services.
            </h1>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Transform Your Data.</h2>
            <p className="text-xl text-gray-900 font-medium sm:text-2xl lg:text-3xl">
              Build robust data pipelines that power your AI initiatives with enterprise-grade quality and compliance.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Our Services.</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Data Pipeline Design */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Data Pipeline Design</h3>
              <p className="text-gray-600 mb-6">
                Design and implement scalable data pipelines that handle massive volumes while maintaining performance and reliability.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Real-time and batch processing</li>
                <li>• Scalable architecture design</li>
                <li>• Multi-source data integration</li>
                <li>• Automated data validation</li>
              </ul>
            </div>

            {/* Quality Assurance */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Quality Assurance</h3>
              <p className="text-gray-600 mb-6">
                Ensure data integrity and quality through comprehensive testing and monitoring frameworks.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Data quality monitoring</li>
                <li>• Automated testing pipelines</li>
                <li>• Anomaly detection systems</li>
                <li>• Data lineage tracking</li>
              </ul>
            </div>

            {/* Privacy Compliance */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Privacy Compliance</h3>
              <p className="text-gray-600 mb-6">
                Implement privacy-first data engineering practices that meet regulatory requirements and protect sensitive information.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• GDPR and CCPA compliance</li>
                <li>• Data anonymization techniques</li>
                <li>• Secure data handling protocols</li>
                <li>• Audit trail implementation</li>
              </ul>
            </div>

            {/* Data Transformation */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Data Transformation</h3>
              <p className="text-gray-600 mb-6">
                Transform raw data into AI-ready formats with optimized preprocessing and feature engineering.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• ETL/ELT pipeline development</li>
                <li>• Feature engineering automation</li>
                <li>• Data format standardization</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Technology Stack.</h2>
            <p className="text-xl text-gray-900 font-medium sm:text-2xl lg:text-3xl">
              We work with industry-leading tools and platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Cloud Platforms</h3>
              <p className="text-gray-600">AWS, Google Cloud, Azure, Snowflake, Databricks</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Processing Frameworks</h3>
              <p className="text-gray-600">Apache Spark, Kafka, Airflow, dbt, Prefect</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Storage Solutions</h3>
              <p className="text-gray-600">Data Lakes, Data Warehouses, Vector Databases</p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Our Process.</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Assessment</h3>
              <p className="text-gray-600">Analyze your current data infrastructure and identify optimization opportunities.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Design</h3>
              <p className="text-gray-600">Create comprehensive architecture plans tailored to your specific requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Implementation</h3>
              <p className="text-gray-600">Build and deploy robust data pipelines with comprehensive testing.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Optimization</h3>
              <p className="text-gray-600">Monitor performance and continuously optimize for efficiency and cost.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 sm:text-4xl">Ready to Optimize Your Data Infrastructure?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our data engineering services can accelerate your AI initiatives.
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
