'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function PaperPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-white p-1 h-screen flex items-center justify-center">
        <div 
          className="relative isolate w-full h-full flex items-center justify-center rounded-3xl overflow-hidden border border-gray-200"
          style={{
            backgroundImage: 'url(/violet-purple-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-5xl  tracking-tight mb-16 font-sans bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent sm:text-6xl lg:text-7xl xl:text-8xl">
              LLMs Can Be Creative and Independent.
            </h1>
          </div>
        </div>
      </div>

      {/* Paper Content */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Abstract.</h2>
            <p className="text-xl text-gray-900  sm:text-2xl lg:text-3xl">
            TNSA AI’s research introduces AutoPA (Autoregressive Generation with Full Prompt Attention), a groundbreaking framework that redefines how Large Language Models (LLMs) handle context. Traditional autoregressive models predict text one token at a time using only recent tokens, which can cause repetition, rigidity, and loss of thematic flow. AutoPA solves this by allowing the model to attend to the entire prompt at every generation step, enabling richer, more coherent, and contextually aware outputs.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Core Innovations.</h2>
            <ul className="list-disc list-inside text-xl text-gray-900  sm:text-2xl lg:text-3xl space-y-4">
              <li>Full Prompt Attention: Maintains global context, improving narrative consistency and thematic alignment.</li>
              <li>Adaptive Attention & Memory: Dynamically balances local and global context for fluid text generation.</li>
              <li>Controlled Decoding: Ensures outputs remain aligned with the original prompt’s structure and intent.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Performance Highlights.</h2>
            <ul className="list-disc list-inside text-xl text-gray-900  sm:text-2xl lg:text-3xl space-y-4">
                <li>Perplexity Reductions: GPT-2 improved from 45.3 → 35.6 (−21.6%), NGen-2 from 38.7 → 30.4 (−21.4%), showing significant fluency and coherence gains.</li>
                <li>Small Model Optimization: Compact models with AutoPA rival large models, enabling cost-effective deployment.</li>
                <li>Enhanced Creativity: AutoPA outputs excel in novelty, coherence, and engagement across poetry, storytelling, and brainstorming tasks.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Applications Across Industries.</h2>
            <ul className="list-disc list-inside text-xl text-gray-900  sm:text-2xl lg:text-3xl space-y-4">
                <li>Education: Adaptive tutoring, automated assessments, dynamic curriculum design.</li>
                <li>Healthcare: Personalized treatment planning, diagnosis assistance, and outcome prediction.</li>
                <li>Business: Market analysis, strategic planning, and risk management.</li>
                <li>Entertainment: Scriptwriting, music composition, and interactive storytelling.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Ethics & Trust.</h2>
            <p className="text-xl text-gray-900  sm:text-2xl lg:text-3xl">
            AutoPA integrates fairness checks, bias mitigation, explainable AI, and privacy safeguards, making it reliable for sensitive domains.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Future Directions.</h2>
            <ul className="list-disc list-inside text-xl text-gray-900  sm:text-2xl lg:text-3xl space-y-4">
                <li>Multimodal Integration: Text, image, audio, and sensor data processing.</li>
                <li>Global Adaptability: Multilingual and culturally sensitive generation.</li>
                <li>Continuous Learning: Real-time adaptation and autonomous improvement.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Impact.</h2>
            <p className="text-xl text-gray-900  sm:text-2xl lg:text-3xl">
            By transforming context handling in LLMs, AutoPA democratizes high-quality AI, making advanced creativity, independence, and decision-making available even in resource-limited environments—paving the way for next-generation intelligent systems.
            </p>
          </div>

          <div className="flex justify-center">
            <Link href="/LLMs_can_be_Creative_and_Independent.pdf" passHref>
              <div className="bg-gray-900 text-white font-semibold py-4 px-8 rounded-full hover:bg-gray-800 transition-colors cursor-pointer">
                Read Full Paper
              </div>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
