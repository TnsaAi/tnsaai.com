'use client'

import Link from 'next/link'

export default function SafetyPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-white p-1 h-screen flex items-center justify-center">
        <div 
          className="relative isolate w-full h-full flex items-center justify-center rounded-3xl overflow-hidden border border-gray-200"
          style={{
            backgroundImage: 'url(/green-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-5xl font-medium tracking-tight mb-16 font-sans bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent sm:text-6xl lg:text-7xl xl:text-8xl">
              AI Safety.
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          
          {/* Safety Philosophy */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 sm:text-4xl">Our Safety Philosophy</h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                At TNSA AI, we believe that artificial intelligence has the potential to transform humanity for the better, but only if developed and deployed responsibly. Our commitment to AI safety is foundational to everything we do.
              </p>
              <p>
                We recognize that AI systems can have far-reaching impacts on society, and we take our responsibility seriously. Our safety-first approach ensures that our AI models are beneficial, transparent, and secure.
              </p>
            </div>
          </div>

          {/* Core Safety Principles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 sm:text-4xl">Core Safety Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Beneficial AI</h3>
                <p className="text-gray-600">
                  We ensure our AI systems are designed to benefit humanity and avoid causing harm. Every model undergoes rigorous testing to verify it serves positive purposes.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparency</h3>
                <p className="text-gray-600">
                  We believe in open communication about our AI capabilities, limitations, and potential risks. Users deserve to understand how our systems work.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Robustness</h3>
                <p className="text-gray-600">
                  Our AI systems are designed to be robust and reliable, with built-in safeguards against misuse and failure modes.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Accountability</h3>
                <p className="text-gray-600">
                  We maintain clear lines of responsibility and accountability for our AI systems, ensuring we can address issues quickly and effectively.
                </p>
              </div>
            </div>
          </div>

          {/* Safety Measures */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 sm:text-4xl">Safety Measures</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Content Filtering</h3>
                <p className="text-gray-600">
                  Advanced content filtering systems prevent our AI from generating harmful, biased, or inappropriate content. We continuously update our filters based on emerging threats.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Bias Detection</h3>
                <p className="text-gray-600">
                  Comprehensive bias detection and mitigation systems ensure our AI models are fair and equitable across different demographics and use cases.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Red Teaming</h3>
                <p className="text-gray-600">
                  Regular red teaming exercises help us identify potential vulnerabilities and misuse scenarios, allowing us to strengthen our safety measures proactively.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Monitoring & Auditing</h3>
                <p className="text-gray-600">
                  Continuous monitoring and regular audits of our AI systems ensure they operate safely and as intended in real-world environments.
                </p>
              </div>
            </div>
          </div>

          {/* Research & Development */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 sm:text-4xl">Safety Research & Development</h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                We invest heavily in AI safety research, collaborating with leading institutions and researchers worldwide. Our safety team works on:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Alignment Research</strong> — Ensuring AI systems pursue human-intended goals</li>
                <li><strong>Robustness Testing</strong> — Making AI systems resilient to adversarial attacks</li>
                <li><strong>Interpretability</strong> — Understanding how AI systems make decisions</li>
                <li><strong>Value Learning</strong> — Teaching AI systems human values and preferences</li>
                <li><strong>Safety Standards</strong> — Developing industry-wide safety protocols</li>
              </ul>
            </div>
          </div>

          

          {/* Contact */}
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">Questions About AI Safety?</h2>
            <p className="text-gray-600 mb-8">
              We're committed to transparency and welcome questions about our safety practices.
            </p>
            <Link
              href="/company/contact"
              className="inline-flex items-center rounded-md bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
            >
              Contact Our Safety Team
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
