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
            backgroundImage: 'url(/brown-blue-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-5xl  tracking-tight mb-16 font-sans bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent sm:text-6xl lg:text-7xl xl:text-8xl">
              Cross Modal Contrastive Curriculum Learning.
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
            Cross-Modal Contrastive Curriculum Learning (CMCCL) represents a sophisticated paradigm designed to significantly enhance multi-modal alignment. This approach synergistically combines the discriminative power of contrastive learning with the structured, progressive training methodology of curriculum learning. The core objective is to improve the ability of models to understand and relate information across disparate data types, such as images and text, by gradually introducing more challenging paired examples. CMCCL addresses the inherent complexities of bridging the semantic gap between modalities, leading to improved learning efficiency, enhanced robustness to complex data, and superior performance across critical downstream tasks, including cross-modal retrieval and generation.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Core Innovations.</h2>
            <ul className="list-disc list-inside text-xl text-gray-900  sm:text-2xl lg:text-3xl space-y-4">
              <li>Synergy of Contrastive and Curriculum Learning: Combines contrastive learning&apos;s ability to create robust shared representations with curriculum learning&apos;s structured, easy-to-hard training approach.</li>
              <li>Progressive Difficulty: The model is first trained on easy-to-align data pairs and then progressively introduced to more complex and abstract pairs, allowing it to build a strong foundational understanding.</li>
              <li>Handling Hard Negatives: The curriculum-based approach provides a principled way to introduce &quot;hard negatives&quot; (samples that are semantically similar but distinct) without destabilizing the training process.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Performance Highlights.</h2>
            <p className="text-xl text-gray-900  sm:text-2xl lg:text-3xl">
            The paper is conceptual and does not present specific performance metrics. However, it argues that CMCCL leads to improved learning efficiency, accelerated convergence, and enhanced generalization capabilities, especially in scenarios with limited training data.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Applications Across Industries.</h2>
            <ul className="list-disc list-inside text-xl text-gray-900  sm:text-2xl lg:text-3xl space-y-4">
                <li>Visual Question Answering (VQA)</li>
                <li>Cross-modal retrieval (e.g., text-to-image search)</li>
                <li>Image captioning</li>
                <li>Content generation (e.g., text-to-image with DALL-E)</li>
                <li>Healthcare diagnostics, robotics, and emotion recognition.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Future Directions.</h2>
            <ul className="list-disc list-inside text-xl text-gray-900  sm:text-2xl lg:text-3xl space-y-4">
                <li>Extending CMCCL frameworks beyond image-text modalities to include audio, video, depth information, and structured data.</li>
                <li>Developing more transparent and interpretable methods for defining and adapting curriculum difficulty, moving beyond &quot;black box&quot; learned evaluators.</li>
                <li>Improving the robustness of CMCCL models to noise, ambiguity, and domain shifts in real-world datasets.</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <Link href="/Cross_Modal_Contrastive_Curriculum_Learning__Enhancing_Multi_Modal_Alignment_Through_Progressive_Difficulty.pdf" passHref>
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
