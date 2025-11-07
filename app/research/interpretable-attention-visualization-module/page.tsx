'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function PaperPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        {/* Date and Title */}
        <div className="text-center">
          <p className="text-sm text-gray-500">24 May, 2025</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>Interpretable Attention Visualization Module</h1>
        </div>

        {/* Image */}
        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/rini-nur-rohmah-ZkGf87NclJ0-unsplash.jpg"
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
            This report details the development of an Interpretable Attention Visualization Module, a novel plug-in designed to convert the complex, high-dimensional raw attention maps from transformer-based Large Language Models (LLMs), specifically GPT-2 small, into intuitive, human-readable explanations. The module addresses a critical need for enhanced transparency and trustworthiness in LLM applications by demystifying the internal workings of the attention mechanism. The proposed approach involves a multi-stage process: precise extraction of raw attention data, advanced clustering of tokens based on their co-attention patterns, and the generation of natural language rationales for each identified cluster. The module's effectiveness and utility will be rigorously validated through comprehensive user studies, ensuring that the explanations are not only faithful to the model's behavior but also clear and useful for human understanding. This initiative aims to provide developers and researchers with a powerful tool for debugging, validating, and fostering greater confidence in LLM predictions.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Core Innovations.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>From Raw Attention to Explanations: The module transforms raw, high-dimensional attention maps into human-readable natural language explanations.</li>
              <li>Graph-Based Clustering: It conceptualizes attention maps as graphs, with tokens as nodes and attention weights as edges, and uses community detection algorithms like Louvain to identify clusters of co-attending tokens.</li>
              <li>LLM-Powered Rationale Generation: It leverages large language models (LLMs) with Chain-of-Thought prompting to generate coherent and faithful explanations for why certain tokens are clustered together.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Applications Across Industries.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
            The module is designed to be a general-purpose tool for developers and researchers working with LLMs. It can be applied in any domain where understanding the internal reasoning of an LLM is important, such as:
            </p>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2 mt-8">
              <li>Debugging and model validation</li>
              <li>Building trust in high-stakes applications (e.g., legal, medical)</li>
              <li>AI safety and alignment research</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Ethics & Trust.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
            The entire purpose of the module is to enhance the transparency and trustworthiness of LLMs. By providing clear explanations for the model's behavior, it directly addresses the "black box" problem and helps to build confidence in AI systems.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Future Directions.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
                <li>Scalability: Adapting the module to handle larger LLMs and longer input sequences.</li>
                <li>Multimodal Attention: Extending the module to interpret attention in multimodal models (e.g., LVLMs).</li>
                <li>Interactive Refinement: Allowing users to interactively refine the generated explanations.</li>
                <li>Causal Interpretability: Moving beyond correlational explanations to infer causal relationships in the model's reasoning.</li>
            </ul>
          </div>

          <div className="flex justify-center" style={{ marginBottom: '77px' }}>
            <Link href="/Interpretable_Attention_Visualization_Module__Transforming_Raw_Attention_into_Human_Readable_Explanations.pdf" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              Read Full Paper →
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
