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
            backgroundImage: 'url(/dark-green-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-5xl  tracking-tight mb-16 font-sans bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent sm:text-6xl lg:text-7xl xl:text-8xl">
              Adaptive Sparse Transformer Blocks.
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
            This paper introduces the Adaptive Sparse Transformer Block, a novel architectural component designed to significantly reduce the computational overhead of large language models (LLMs) while preserving or enhancing performance. By dynamically adjusting its attention patterns per input through a sophisticated gating mechanism, this block moves beyond static sparsity, enabling more efficient and scalable LLMs. The report outlines a comprehensive approach, from architectural principles and advanced training strategies to rigorous benchmarking against established baselines and practical implementation considerations for a 7M parameter LLM. The proposed block promises substantial gains in efficiency (FLOPs, latency, throughput) and effectiveness (perplexity, accuracy) across diverse language and vision tasks, paving the way for more accessible and powerful AI models.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Core Innovations.</h2>
            <ul className="list-disc list-inside text-xl text-gray-900  sm:text-2xl lg:text-3xl space-y-4">
              <li>Dynamic and Learnable Sparsity: The model learns to dynamically adjust attention patterns for each input, moving beyond static, predefined sparsity.</li>
              <li>Learnable Gating Mechanism: An integrated gating mechanism, inspired by Mixture-of-Experts (MoE), intelligently selects which attention heads or token blocks to activate, prioritizing the most salient information.</li>
              <li>End-to-End Trainability: The entire sparse attention mechanism is differentiable and trained jointly with the model, allowing it to learn task-aware sparsity patterns.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Performance Highlights.</h2>
            <ul className="list-disc list-inside text-xl text-gray-900  sm:text-2xl lg:text-3xl space-y-4">
                <li>The paper mentions that similar dynamic sparse attention mechanisms have shown significant speedups (e.g., 11.6x decoding, 9.0x forward on 64k sequence length) and reduction in KV cache usage (up to 8.8x).</li>
                <li>The proposed block is expected to yield substantial reductions in FLOPs, latency, and memory usage while maintaining or improving performance on tasks like language modeling and computer vision.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Applications Across Industries.</h2>
            <p className="text-xl text-gray-900  sm:text-2xl lg:text-3xl">
            The principles are broadly applicable to any domain using LLMs, especially those requiring the processing of long contexts, such as document summarization, question answering, and video analysis.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Ethics & Trust.</h2>
            <p className="text-xl text-gray-900  sm:text-2xl lg:text-3xl">
            While not a primary focus, the paper mentions that making models more efficient and accessible can help in deploying them in a more responsible and democratized manner. The development workflow also includes steps to identify and mitigate biases.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Future Directions.</h2>
            <ul className="list-disc list-inside text-xl text-gray-900  sm:text-2xl lg:text-3xl space-y-4">
                <li>Further optimization of the gating mechanism&apos;s overhead.</li>
                <li>Development of universal sparse attention solutions that can adapt to an even wider array of tasks and architectures.</li>
                <li>Continued exploration of hybrid architectures that combine sparse and dense attention for enhanced robustness.</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <Link href="/Adaptive_Sparse_Transformer_Blocks__A_Paradigm_Shift_for_Efficient_Large_Language_Models.pdf" passHref>
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
