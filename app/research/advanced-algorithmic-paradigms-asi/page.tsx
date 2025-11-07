'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function PaperPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        {/* Date and Title */}
        <div className="text-center">
          <p className="text-sm text-gray-500">28 May, 2025</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>Advanced Algorithmic Paradigms for Artificial Superintelligence: Navigating Safety, Generalization, Verification, and Oversight</h1>
        </div>

        {/* Image */}
        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/logan-voss-B0APkM5QgnQ-unsplash.jpg"
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
            This paper explores advanced algorithmic paradigms essential for developing safe and reliable artificial superintelligence. We address critical challenges in safety alignment, generalization beyond training distributions, formal verification of AI systems, and effective oversight mechanisms. The work presents novel frameworks for ensuring that superintelligent systems remain beneficial and controllable as they surpass human-level capabilities across diverse domains.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Core Innovations.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Novel safety alignment techniques for superintelligent systems.</li>
              <li>Formal verification methods for AI decision-making processes.</li>
              <li>Robust generalization frameworks that maintain safety across distribution shifts.</li>
              <li>Multi-layered oversight architectures for continuous monitoring.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Safety Considerations.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
            The paper emphasizes the critical importance of building safety mechanisms directly into the algorithmic foundations of superintelligent systems, rather than treating safety as an afterthought. We propose comprehensive frameworks for value alignment, capability control, and fail-safe mechanisms.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Applications Across Industries.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
            These paradigms are essential for any high-stakes application of advanced AI, including autonomous systems, critical infrastructure management, healthcare decision support, and scientific research acceleration.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Future Directions.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Developing scalable verification techniques for increasingly complex AI systems.</li>
              <li>Creating international standards for superintelligence safety.</li>
              <li>Advancing interpretability methods for oversight of advanced AI.</li>
              <li>Building robust testing frameworks for edge cases and adversarial scenarios.</li>
            </ul>
          </div>

          <div className="flex justify-center" style={{ marginBottom: '77px' }}>
            <Link href="/Advanced_Algorithmic_Paradigms_for_Artificial_Superintelligence__Navigating_Safety__Generalization__Verification__and_Oversight.pdf" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              Read Full Paper →
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
