'use client'

import Link from 'next/link'
import Image from 'next/image'

const papers = [
  {
    title: 'Computational Hardware and Data Foundations for Sustainable Superintelligence',
    description: 'Navigating Energy, Multimodality, and Ethical Data at Scale.',
    href: '/papers/computational-hardware-and-data-foundations-for-sustainable-superintelligence',
    pdfUrl: '/Computational__Hardware__and_Data_Foundations_for_Sustainable_Superintelligence__Navigating_Energy__Multimodality__and_Ethical_Data_at_Scale.pdf',
  },
  {
    title: 'Adaptive Sparse Transformer Blocks',
    description: 'A Paradigm Shift for Efficient Large Language Models.',
    href: '/papers/adaptive-sparse-transformer-blocks',
    pdfUrl: '/Adaptive_Sparse_Transformer_Blocks__A_Paradigm_Shift_for_Efficient_Large_Language_Models.pdf',
  },
  {
    title: 'Cross Modal Contrastive Curriculum Learning',
    description: 'Enhancing Multi Modal Alignment Through Progressive Difficulty.',
    href: '/papers/cross-modal-contrastive-curriculum-learning',
    pdfUrl: '/Cross_Modal_Contrastive_Curriculum_Learning__Enhancing_Multi_Modal_Alignment_Through_Progressive_Difficulty.pdf',
  },
  {
    title: 'Interpretable Attention Visualization Module',
    description: 'Transforming Raw Attention into Human Readable Explanations.',
    href: '/papers/interpretable-attention-visualization-module',
    pdfUrl: '/Interpretable_Attention_Visualization_Module__Transforming_Raw_Attention_into_Human_Readable_Explanations.pdf',
  },
  {
    title: 'Quantum Language Models',
    description: 'Architectures, Applications, and a Practical Approach to Quantum Tensor Conversion for Enhanced Efficiency.',
    href: '/papers/quantum-language-models',
    pdfUrl: '/Quantum_Language_Models__Architectures__Applications__and_a_Practical_Approach_to_Quantum_Tensor_Conversion_for_Enhanced_Efficiency.pdf',
  },
  {
    title: 'LLMs can be Creative and Independent',
    description: 'Exploring the creative and independent capabilities of Large Language Models.',
    href: '/papers/llms-can-be-creative-and-independent',
    pdfUrl: '/LLMs_can_be_Creative_and_Independent.pdf',
  },
  {
    title: 'Quantum Intelligence and Future AI Systems',
    description: 'A look into the future of AI with Quantum Intelligence.',
    href: '/papers/quantum-intelligence-and-future-ai-systems',
    pdfUrl: '/Quantum_Intelligence_and_Future_AI_Systems.pdf',
  },
  {
    title: 'A Guide to Build Agents with NGen and MCP',
    description: 'A practical guide to building agents using NGen and the Model Context Protocol (MCP).',
    href: '/papers/a-guide-to-build-agents-with-ngen-and-mcp',
    pdfUrl: '/A%20Guide%20to%20Build%20Agents%20with%20NGen%20and%20MCP.pdf',
  },
]

export default function PapersPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-white p-1 h-screen flex items-center justify-center">
        <div 
          className="relative isolate w-full h-full flex items-center justify-center rounded-3xl overflow-hidden border border-gray-200"
          style={{
            backgroundImage: 'url(/bw-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-5xl font-medium tracking-tight mb-16 font-sans bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent sm:text-6xl lg:text-7xl xl:text-8xl">
              Research Papers.
            </h1>
          </div>
        </div>
      </div>

      {/* Papers List */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Our Research.</h2>
            <p className="text-xl text-gray-900 font-medium sm:text-2xl lg:text-3xl">
              Explore our latest research papers and publications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {papers.map((paper) => (
              <div key={paper.title} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{paper.title}</h3>
                <p className="text-gray-600 mb-6">
                  {paper.description}
                </p>
                <a href={paper.pdfUrl} target="_blank" rel="noopener noreferrer" className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all">
                  Read Paper
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
