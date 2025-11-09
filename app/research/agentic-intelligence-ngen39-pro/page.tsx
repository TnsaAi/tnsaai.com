'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function PaperPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        {/* Date and Title */}
        <div className="text-center">
          <p className="text-sm text-gray-500">26 October, 2025</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>Agentic Intelligence in Large Language Models: Comprehensive Experimental Analysis of NGen3.9-Pro-Agentic</h1>
        </div>

        {/* Image */}
        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/mymind-3dmu0gu23uc-unsplash.jpg"
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
            This paper presents a comprehensive experimental analysis of agentic intelligence capabilities in the NGen3.9-Pro-Agentic model. We investigate how large language models can exhibit autonomous decision-making, goal-oriented behavior, and adaptive planning. Through extensive benchmarking and real-world task evaluation, we demonstrate the model&apos;s ability to function as an intelligent agent capable of complex reasoning and multi-step problem solving.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Core Innovations.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Novel agentic architecture enabling autonomous goal pursuit and planning.</li>
              <li>Advanced reasoning mechanisms for multi-step task decomposition.</li>
              <li>Self-reflection and error correction capabilities.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Performance Highlights.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Superior performance on complex reasoning benchmarks compared to non-agentic models.</li>
              <li>Demonstrated ability to handle multi-turn interactions with adaptive strategy.</li>
              <li>Robust performance across diverse task domains.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Applications Across Industries.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
            Agentic AI systems can revolutionize automation in customer service, research assistance, software development, and complex decision-making scenarios requiring autonomous operation.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Future Directions.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Enhancing long-term planning and memory capabilities.</li>
              <li>Improving safety and alignment in autonomous agents.</li>
              <li>Scaling agentic capabilities to more complex environments.</li>
            </ul>
          </div>

          <div className="flex justify-center" style={{ marginBottom: '77px' }}>
            <Link href="/Agentic_Intelligence_in_Large_Language_Models__Comprehensive_Experimental_Analysis_of_NGen3_9_Pro_Agentic.pdf" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              Read Full Paper →
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
