'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function SafetyPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">Company</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>AI Safety</h1>
        </div>

        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-eugene-golovesov-1810803-16152015.jpg"
            alt="AI Safety"
            fill
            priority
            className="object-cover rounded-[40px]"
          />
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">What is AI Safety?</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              AI Safety is the field dedicated to ensuring artificial intelligence systems operate reliably, align with human values, and remain beneficial as they become more capable. As we advance toward AGI and superintelligence, safety becomes paramount.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              At TNSA AI, we believe that artificial intelligence has the potential to transform humanity for the better, but only if developed and deployed responsibly. Our commitment to AI safety is foundational to everything we do.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Core Safety Principles.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Alignment — Ensuring AI systems pursue human-intended goals</li>
              <li>Robustness — Building systems resilient to adversarial attacks</li>
              <li>Interpretability — Understanding how AI makes decisions</li>
              <li>Transparency — Clear communication about capabilities and limitations</li>
              <li>Accountability — Maintaining responsibility for AI behavior</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Safety Methods.</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              We employ multiple layers of safety measures throughout the AI development lifecycle:
            </p>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Constitutional AI — Training models with explicit ethical guidelines</li>
              <li>Reinforcement Learning from Human Feedback (RLHF) — Aligning outputs with human preferences</li>
              <li>Red Teaming — Adversarial testing to identify vulnerabilities</li>
              <li>Content Filtering — Preventing harmful or biased outputs</li>
              <li>Continuous Monitoring — Real-time detection of anomalous behavior</li>
              <li>Capability Control — Limiting access to potentially dangerous functions</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Achieving Superintelligence Safely.</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              The path to superintelligence requires unprecedented safety measures. Our approach includes:
            </p>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Scalable Oversight — Developing methods to supervise systems smarter than humans</li>
              <li>Iterative Deployment — Gradual capability increases with safety validation at each stage</li>
              <li>Value Learning — Teaching AI to understand and respect human values</li>
              <li>Corrigibility — Ensuring AI systems accept corrections and shutdown commands</li>
              <li>Multi-Agent Safety — Coordinating multiple AI systems safely</li>
              <li>Formal Verification — Mathematical proofs of safety properties</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Research & Collaboration.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              We actively contribute to AI safety research and collaborate with leading institutions worldwide. Our safety team publishes findings, participates in safety conferences, and works with policymakers to establish responsible AI governance frameworks.
            </p>
          </div>

          <div className="flex justify-center" style={{ marginBottom: '77px' }}>
            <Link href="/research" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              Read Our Research →
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
