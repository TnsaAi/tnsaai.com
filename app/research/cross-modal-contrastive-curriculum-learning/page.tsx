'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function PaperPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        {/* Date and Title */}
        <div className="text-center">
          <p className="text-sm text-gray-500">27 May, 2025</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>Cross Modal Contrastive Curriculum Learning</h1>
        </div>

        {/* Image */}
        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/kukai-art-xS_lI4mtyzs-unsplash.jpg"
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
            Cross-Modal Contrastive Curriculum Learning (CMCCL) represents a sophisticated paradigm designed to significantly enhance multi-modal alignment. This approach synergistically combines the discriminative power of contrastive learning with the structured, progressive training methodology of curriculum learning. The core objective is to improve the ability of models to understand and relate information across disparate data types, such as images and text, by gradually introducing more challenging paired examples. CMCCL addresses the inherent complexities of bridging the semantic gap between modalities, leading to improved learning efficiency, enhanced robustness to complex data, and superior performance across critical downstream tasks, including cross-modal retrieval and generation.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Core Innovations.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Synergy of Contrastive and Curriculum Learning: Combines contrastive learning&apos;s ability to create robust shared representations with curriculum learning&apos;s structured, easy-to-hard training approach.</li>
              <li>Progressive Difficulty: The model is first trained on easy-to-align data pairs and then progressively introduced to more complex and abstract pairs, allowing it to build a strong foundational understanding.</li>
              <li>Handling Hard Negatives: The curriculum-based approach provides a principled way to introduce &quot;hard negatives&quot; (samples that are semantically similar but distinct) without destabilizing the training process.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Performance Highlights.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
            The paper is conceptual and does not present specific performance metrics. However, it argues that CMCCL leads to improved learning efficiency, accelerated convergence, and enhanced generalization capabilities, especially in scenarios with limited training data.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Applications Across Industries.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
                <li>Visual Question Answering (VQA)</li>
                <li>Cross-modal retrieval (e.g., text-to-image search)</li>
                <li>Image captioning</li>
                <li>Content generation (e.g., text-to-image with DALL-E)</li>
                <li>Healthcare diagnostics, robotics, and emotion recognition.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Future Directions.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
                <li>Extending CMCCL frameworks beyond image-text modalities to include audio, video, depth information, and structured data.</li>
                <li>Developing more transparent and interpretable methods for defining and adapting curriculum difficulty, moving beyond &quot;black box&quot; learned evaluators.</li>
                <li>Improving the robustness of CMCCL models to noise, ambiguity, and domain shifts in real-world datasets.</li>
            </ul>
          </div>

          <div className="flex justify-center" style={{ marginBottom: '77px' }}>
            <Link href="/Cross_Modal_Contrastive_Curriculum_Learning__Enhancing_Multi_Modal_Alignment_Through_Progressive_Difficulty.pdf" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              Read Full Paper →
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
