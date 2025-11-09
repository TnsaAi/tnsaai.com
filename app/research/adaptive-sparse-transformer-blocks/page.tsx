'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function PaperPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        {/* Date and Title */}
        <div className="text-center">
          <p className="text-sm text-gray-500">25 May, 2025</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>Adaptive Sparse Transformer Blocks</h1>
        </div>

        {/* Image */}
        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/abstral-official-kzTYEGMY4N0-unsplash.jpg"
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
            This paper introduces the Adaptive Sparse Transformer Block, a novel architectural component designed to significantly reduce the computational overhead of large language models (LLMs) while preserving or enhancing performance. By dynamically adjusting its attention patterns per input through a sophisticated gating mechanism, this block moves beyond static sparsity, enabling more efficient and scalable LLMs. The report outlines a comprehensive approach, from architectural principles and advanced training strategies to rigorous benchmarking against established baselines and practical implementation considerations for a 7M parameter LLM. The proposed block promises substantial gains in efficiency (FLOPs, latency, throughput) and effectiveness (perplexity, accuracy) across diverse language and vision tasks, paving the way for more accessible and powerful AI models.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Core Innovations.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Dynamic and Learnable Sparsity: The model learns to dynamically adjust attention patterns for each input, moving beyond static, predefined sparsity.</li>
              <li>Learnable Gating Mechanism: An integrated gating mechanism, inspired by Mixture-of-Experts (MoE), intelligently selects which attention heads or token blocks to activate, prioritizing the most salient information.</li>
              <li>End-to-End Trainability: The entire sparse attention mechanism is differentiable and trained jointly with the model, allowing it to learn task-aware sparsity patterns.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Performance Highlights.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
                <li>The paper mentions that similar dynamic sparse attention mechanisms have shown significant speedups (e.g., 11.6x decoding, 9.0x forward on 64k sequence length) and reduction in KV cache usage (up to 8.8x).</li>
                <li>The proposed block is expected to yield substantial reductions in FLOPs, latency, and memory usage while maintaining or improving performance on tasks like language modeling and computer vision.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Applications Across Industries.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
            The principles are broadly applicable to any domain using LLMs, especially those requiring the processing of long contexts, such as document summarization, question answering, and video analysis.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Ethics & Trust.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
            While not a primary focus, the paper mentions that making models more efficient and accessible can help in deploying them in a more responsible and democratized manner. The development workflow also includes steps to identify and mitigate biases.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Future Directions.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
                <li>Further optimization of the gating mechanism&apos;s overhead.</li>
                <li>Development of universal sparse attention solutions that can adapt to an even wider array of tasks and architectures.</li>
                <li>Continued exploration of hybrid architectures that combine sparse and dense attention for enhanced robustness.</li>
            </ul>
          </div>

          <div className="flex justify-center" style={{ marginBottom: '77px' }}>
            <Link href="/Adaptive_Sparse_Transformer_Blocks__A_Paradigm_Shift_for_Efficient_Large_Language_Models.pdf" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              Read Full Paper →
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
