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
            backgroundImage: 'url(/gold-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-5xl  tracking-tight mb-16 font-sans bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent sm:text-6xl lg:text-7xl xl:text-8xl">
              Quantum Language Models.
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
            Quantum Language Models (QLMs) represent a burgeoning frontier at the intersection of quantum computing and natural language processing (NLP), poised to fundamentally reshape artificial intelligence. Classical language models, while powerful, grapple with escalating computational demands and energy consumption, pushing the boundaries of traditional hardware. QLMs leverage the unique principles of quantum mechanics—superposition, entanglement, and interference—to offer enhanced semantic processing, dramatic reductions in power consumption, and the ability to analyze multidimensional data concurrently. This paper delineates the foundational principles, architectural paradigms, and key applications of QLMs, highlighting their advantages over classical counterparts. It also addresses the significant challenges posed by the noisy intermediate-scale quantum (NISQ) era, particularly concerning hardware limitations, data encoding, and training complexities. Finally, a conceptual framework and Python code are presented for converting classical model parameters, stored in the safetensors format, into a quantum-compatible representation, termed &quot;Quantum Tensors,&quot; illustrating a practical step towards integrating quantum capabilities into existing large language models for future power and efficiency gains.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Core Innovations.</h2>
            <ul className="list-disc list-inside text-xl text-gray-900  sm:text-2xl lg:text-3xl space-y-4">
              <li>Quantum Principles for Language: Leverages quantum phenomena like superposition and entanglement to process language in a fundamentally new way, allowing for richer semantic representations.</li>
              <li>Computational Efficiency: Promises dramatic reductions in power consumption and accelerated processing compared to classical LLMs, addressing key sustainability and scalability concerns.</li>
              <li>Hybrid Quantum-Classical Architectures: Proposes practical hybrid models that combine the strengths of both classical and quantum computing, making near-term applications feasible.</li>
              <li>Quantum-Enhanced Fine-Tuning (PEFT): Introduces novel PEFT methods like QuanTA and QPA that use quantum principles to fine-tune classical LLMs more efficiently.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Performance Highlights.</h2>
            <ul className="list-disc list-inside text-xl text-gray-900  sm:text-2xl lg:text-3xl space-y-4">
                <li>The paper is largely theoretical but cites experiments showing that QTN classifiers can achieve high classification accuracy (up to 0.95) with fewer parameters and less training data.</li>
                <li>It also highlights significant parameter reduction in fine-tuning (e.g., 52.06% of original LoRA for GPT-2) while maintaining or improving performance.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Applications Across Industries.</h2>
            <ul className="list-disc list-inside text-xl text-gray-900  sm:text-2xl lg:text-3xl space-y-4">
                <li>Complex Problem Solving: Cryptography, optimization, and machine learning.</li>
                <li>Bioinformatics and Scientific Discovery: Simulating biological processes, protein folding, and drug discovery.</li>
                <li>Real-time Analytics and Decision-Making: Financial modeling, risk assessment, and portfolio optimization.</li>
                <li>Foundation for AGI: Positions QLMs as a potential cornerstone for achieving Artificial General Intelligence.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Future Directions.</h2>
            <ul className="list-disc list-inside text-xl text-gray-900  sm:text-2xl lg:text-3xl space-y-4">
                <li>Hardware Improvements: Overcoming the limitations of the current Noisy Intermediate-Scale Quantum (NISQ) era, including qubit stability and scalability.</li>
                <li>Data Encoding: Developing more efficient and robust methods for encoding classical data into quantum states.</li>
                <li>Error Correction: Improving quantum error correction techniques to mitigate the effects of decoherence.</li>
                <li>Training Algorithms: Addressing training complexities like the &quot;barren plateau&quot; problem.</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <Link href="/Quantum_Language_Models__Architectures__Applications__and_a_Practical_Approach_to_Quantum_Tensor_Conversion_for_Enhanced_Efficiency.pdf" passHref>
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
