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
            backgroundImage: 'url(/pink-strong-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-5xl  tracking-tight mb-16 font-sans bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent sm:text-6xl lg:text-7xl xl:text-8xl">
              Interpretable Attention Visualization Module.
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
            This report details the development of an Interpretable Attention Visualization Module, a novel plug-in designed to convert the complex, high-dimensional raw attention maps from transformer-based Large Language Models (LLMs), specifically GPT-2 small, into intuitive, human-readable explanations. The module addresses a critical need for enhanced transparency and trustworthiness in LLM applications by demystifying the internal workings of the attention mechanism. The proposed approach involves a multi-stage process: precise extraction of raw attention data, advanced clustering of tokens based on their co-attention patterns, and the generation of natural language rationales for each identified cluster. The module's effectiveness and utility will be rigorously validated through comprehensive user studies, ensuring that the explanations are not only faithful to the model's behavior but also clear and useful for human understanding. This initiative aims to provide developers and researchers with a powerful tool for debugging, validating, and fostering greater confidence in LLM predictions.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Core Innovations.</h2>
            <ul className="list-disc list-inside text-xl text-gray-900  sm:text-2xl lg:text-3xl space-y-4">
              <li>From Raw Attention to Explanations: The module transforms raw, high-dimensional attention maps into human-readable natural language explanations.</li>
              <li>Graph-Based Clustering: It conceptualizes attention maps as graphs, with tokens as nodes and attention weights as edges, and uses community detection algorithms like Louvain to identify clusters of co-attending tokens.</li>
              <li>LLM-Powered Rationale Generation: It leverages large language models (LLMs) with Chain-of-Thought prompting to generate coherent and faithful explanations for why certain tokens are clustered together.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Applications Across Industries.</h2>
            <p className="text-xl text-gray-900  sm:text-2xl lg:text-3xl">
            The module is designed to be a general-purpose tool for developers and researchers working with LLMs. It can be applied in any domain where understanding the internal reasoning of an LLM is important, such as:
            </p>
            <ul className="list-disc list-inside text-xl text-gray-900  sm:text-2xl lg:text-3xl space-y-4 mt-8">
              <li>Debugging and model validation</li>
              <li>Building trust in high-stakes applications (e.g., legal, medical)</li>
              <li>AI safety and alignment research</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Ethics & Trust.</h2>
            <p className="text-xl text-gray-900  sm:text-2xl lg:text-3xl">
            The entire purpose of the module is to enhance the transparency and trustworthiness of LLMs. By providing clear explanations for the model's behavior, it directly addresses the "black box" problem and helps to build confidence in AI systems.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Future Directions.</h2>
            <ul className="list-disc list-inside text-xl text-gray-900  sm:text-2xl lg:text-3xl space-y-4">
                <li>Scalability: Adapting the module to handle larger LLMs and longer input sequences.</li>
                <li>Multimodal Attention: Extending the module to interpret attention in multimodal models (e.g., LVLMs).</li>
                <li>Interactive Refinement: Allowing users to interactively refine the generated explanations.</li>
                <li>Causal Interpretability: Moving beyond correlational explanations to infer causal relationships in the model's reasoning.</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <Link href="/Interpretable_Attention_Visualization_Module__Transforming_Raw_Attention_into_Human_Readable_Explanations.pdf" passHref>
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
