'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function PaperPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        {/* Date and Title */}
        <div className="text-center">
          <p className="text-sm text-gray-500">17 November, 2024</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>LLMs can be Creative and Independent</h1>
        </div>

        {/* Image */}
        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/kukai-art-oDQqO9opEXc-unsplash.jpg"
            alt="Research visual"
            fill
            priority
            className="object-cover rounded-[40px]"
          />
        </div>

        {/* Content */}
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl text-black mb-4">Abstract.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              TNSA AI&apos;s research introduces AutoPA (Autoregressive Generation with Full Prompt Attention), a groundbreaking framework that redefines how Large Language Models (LLMs) handle context. Traditional autoregressive models predict text one token at a time using only recent tokens, which can cause repetition, rigidity, and loss of thematic flow. AutoPA solves this by allowing the model to attend to the entire prompt at every generation step, enabling richer, more coherent, and contextually aware outputs.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-black mb-4">Core Innovations.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Full Prompt Attention: Maintains global context, improving narrative consistency and thematic alignment.</li>
              <li>Adaptive Attention & Memory: Dynamically balances local and global context for fluid text generation.</li>
              <li>Controlled Decoding: Ensures outputs remain aligned with the original prompt&apos;s structure and intent.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl text-black mb-4">Performance Highlights.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Perplexity Reductions: GPT-2 improved from 45.3 → 35.6 (−21.6%), NGen-2 from 38.7 → 30.4 (−21.4%), showing significant fluency and coherence gains.</li>
              <li>Small Model Optimization: Compact models with AutoPA rival large models, enabling cost-effective deployment.</li>
              <li>Enhanced Creativity: AutoPA outputs excel in novelty, coherence, and engagement across poetry, storytelling, and brainstorming tasks.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl text-black mb-4">Applications Across Industries.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Education: Adaptive tutoring, automated assessments, dynamic curriculum design.</li>
              <li>Healthcare: Personalized treatment planning, diagnosis assistance, and outcome prediction.</li>
              <li>Business: Market analysis, strategic planning, and risk management.</li>
              <li>Entertainment: Scriptwriting, music composition, and interactive storytelling.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl text-black mb-4">Ethics & Trust.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              AutoPA integrates fairness checks, bias mitigation, explainable AI, and privacy safeguards, making it reliable for sensitive domains.
            </p>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2 mt-4">
              <li>Multimodal Integration: Text, image, audio, and sensor data processing.</li>
              <li>Global Adaptability: Multilingual and culturally sensitive generation.</li>
              <li>Continuous Learning: Real-time adaptation and autonomous improvement.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl text-black mb-4">Impact.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              By transforming context handling in LLMs, AutoPA democratizes high-quality AI, making advanced creativity, independence, and decision-making available even in resource-limited environments—paving the way for next-generation intelligent systems.
            </p>
          </div>
        </div>

        <div className="flex justify-center" style={{ marginBottom: '77px', marginTop: '48px' }}>
          <Link href="/LLMs_can_be_Creative_and_Independent.pdf" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
            Read Full Paper →
          </Link>
        </div>
      </div>
    </div>
  )
}
