'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function PaperPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        {/* Date and Title */}
        <div className="text-center">
          <p className="text-sm text-gray-500">21 June, 2025</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>Computational Hardware and Data Foundations for Sustainable Superintelligence</h1>
        </div>

        {/* Image */}
        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-efren-ftz-365656346-14433444.jpg"
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
            The pursuit of superintelligence presents unprecedented opportunities but also significant challenges, particularly concerning sustainability. This paper explores the critical computational, hardware, and data foundations required to develop superintelligent systems that are not only powerful but also energy-efficient, capable of handling diverse data modalities, and built upon ethical data practices at scale. We delve into computational strategies that prioritize algorithmic efficiency and reduced energy footprints. Hardware considerations focus on novel architectures like neuromorphic and quantum computing as potential paths beyond current energy-intensive paradigms. Furthermore, we analyze the complexities of managing vast multimodal datasets, ensuring data quality, and upholding ethical principles, including fairness, transparency, and privacy, as AI systems scale towards superintelligence. The paper aims to provide a comprehensive overview of these interconnected foundations, highlighting current limitations and proposing future research directions for navigating the path to sustainable superintelligence.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Core Innovations.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Algorithmic Innovations for Reduced Complexity: Discusses efficient model architectures like Mixture-of-Experts (MoE) and sparse networks, knowledge distillation, and quantization to reduce computational cost.</li>
              <li>Next-Generation Hardware: Explores neuromorphic computing, quantum computing, optical computing, and specialized ASICs as energy-efficient alternatives to current hardware.</li>
              <li>Ethical, Scalable Data Foundations: Outlines principles for managing and integrating vast multimodal data ethically, covering data quality, curation, bias detection, and privacy preservation.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Applications Across Industries.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
            The principles discussed are foundational and apply to any industry aiming to leverage large-scale AI and superintelligence in a sustainable and ethical manner. This includes, but is not limited to, healthcare, finance, manufacturing, and scientific research.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Ethics & Trust.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
                <li>Ethical Data Governance: Emphasizes the need for robust frameworks for data ownership, consent, and transparency.</li>
                <li>Bias Detection and Mitigation: Stresses the importance of preventing the amplification of societal biases in large-scale datasets.</li>
                <li>Privacy-Preserving Techniques: Discusses methods like federated learning, differential privacy, and homomorphic encryption to protect sensitive information.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Future Directions.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
                <li>Developing novel algorithms with provably lower energy bounds.</li>
                <li>Maturing neuromorphic and quantum hardware to practical scales for complex AI.</li>
                <li>Establishing universally accepted standards for ethical data collection, governance, and AI impact assessment.</li>
                <li>Fostering interdisciplinary collaboration between AI researchers, hardware engineers, ethicists, and policymakers.</li>
            </ul>
          </div>

          <div className="flex justify-center" style={{ marginBottom: '77px' }}>
            <Link href="/Computational__Hardware__and_Data_Foundations_for_Sustainable_Superintelligence__Navigating_Energy__Multimodality__and_Ethical_Data_at_Scale.pdf" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              Read Full Paper →
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
