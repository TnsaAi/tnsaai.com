'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function PaperPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        {/* Date and Title */}
        <div className="text-center">
          <p className="text-sm text-gray-500">6 November, 2025</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>Quantum-Based Language Models: A Survey of Principles and Advances</h1>
        </div>

        {/* Image */}
        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/boliviainteligente-ybSql-GGUOE-unsplash.jpg"
            alt="Research visual"
            fill
            priority
            className="object-cover rounded-[40px]"
          />
        </div>
      </div>

      {/* Paper Content */}
      <div className="bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Abstract.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
            This survey provides a comprehensive overview of quantum-based language models, exploring the intersection of quantum computing and natural language processing. We examine the fundamental principles of quantum mechanics that enable novel approaches to language modeling, including superposition, entanglement, and quantum interference. The paper reviews recent advances in quantum neural networks, quantum attention mechanisms, and hybrid quantum-classical architectures designed for language tasks.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Core Innovations.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Quantum attention mechanisms that leverage superposition for parallel processing of multiple attention patterns.</li>
              <li>Hybrid quantum-classical architectures optimized for near-term quantum devices.</li>
              <li>Novel quantum encoding schemes for natural language representation.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Applications Across Industries.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
            Quantum language models show promise in cryptography, drug discovery, financial modeling, and complex optimization problems where classical approaches face computational limitations.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Future Directions.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Scaling quantum language models to larger qubit systems.</li>
              <li>Developing error-correction techniques for quantum NLP.</li>
              <li>Exploring quantum advantage in specific language tasks.</li>
            </ul>
          </div>

          <div className="flex justify-center" style={{ marginBottom: '77px' }}>
            <Link href="/Quantum_Based_Language_Models__A_Survey_of_Principles_and_Advances.pdf" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              Read Full Paper →
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
