'use client'

import Link from 'next/link'
import Image from 'next/image'

const papers = [
  {
    title: 'Computational Hardware and Data Foundations for Sustainable Superintelligence',
    description: 'Navigating Energy, Multimodality, and Ethical Data at Scale.',
    href: '/research/computational-hardware-and-data-foundations-for-sustainable-superintelligence',
    backgroundImage: '/green-blue-bg.png',
  },
  {
    title: 'Adaptive Sparse Transformer Blocks',
    description: 'A Paradigm Shift for Efficient Large Language Models.',
    href: '/research/adaptive-sparse-transformer-blocks',
    backgroundImage: '/dark-green-bg.png',
  },
  {
    title: 'Cross Modal Contrastive Curriculum Learning',
    description: 'Enhancing Multi Modal Alignment Through Progressive Difficulty.',
    href: '/research/cross-modal-contrastive-curriculum-learning',
    backgroundImage: '/brown-blue-bg.png',
  },
  {
    title: 'Interpretable Attention Visualization Module',
    description: 'Transforming Raw Attention into Human Readable Explanations.',
    href: '/research/interpretable-attention-visualization-module',
    backgroundImage: '/pink-strong-bg.png',
  },
  {
    title: 'Quantum Language Models',
    description: 'Architectures, Applications, and a Practical Approach to Quantum Tensor Conversion for Enhanced Efficiency.',
    href: '/research/quantum-language-models',
    backgroundImage: '/gold-bg.png',
  },
  {
    title: 'LLMs can be Creative and Independent',
    description: 'Exploring the creative and independent capabilities of Large Language Models.',
    href: '/research/llms-can-be-creative-and-independent',
    backgroundImage: '/violet-purple-bg.png',
  },
  {
    title: 'Quantum Intelligence and Future AI Systems',
    description: 'A look into the future of AI with Quantum Intelligence.',
    href: '/research/quantum-intelligence-and-future-ai-systems',
    backgroundImage: '/black-violet-bg.png',
  },
]

export default function ResearchPage() {
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
            <h1 className="text-5xl font-medium tracking-tight mb-16 font-sans bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent sm:text-6xl lg:text-7xl xl:text-8xl">
              Research.
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
              <Link key={paper.title} href={paper.href}>
                <div
                  className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                  style={{
                    backgroundImage: `url(${paper.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">{paper.title}</h3>
                    <p className="text-white mb-6">
                      {paper.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-semibold text-white">Read More →</span>
                    <Image
                      src="/TNSA.png"
                      alt="TNSA"
                      width={60}
                      height={24}
                      className="opacity-80"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}