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
            backgroundImage: 'url(/green-blue-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-5xl  tracking-tight mb-16 font-sans bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent sm:text-6xl lg:text-7xl xl:text-8xl">
            Computational Hardware and Data Foundations for Sustainable Superintelligence.
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
            The pursuit of superintelligence presents unprecedented opportunities but also significant challenges, particularly concerning sustainability. This paper explores the critical computational, hardware, and data foundations required to develop superintelligent systems that are not only powerful but also energy-efficient, capable of handling diverse data modalities, and built upon ethical data practices at scale. We delve into computational strategies that prioritize algorithmic efficiency and reduced energy footprints. Hardware considerations focus on novel architectures like neuromorphic and quantum computing as potential paths beyond current energy-intensive paradigms. Furthermore, we analyze the complexities of managing vast multimodal datasets, ensuring data quality, and upholding ethical principles, including fairness, transparency, and privacy, as AI systems scale towards superintelligence. The paper aims to provide a comprehensive overview of these interconnected foundations, highlighting current limitations and proposing future research directions for navigating the path to sustainable superintelligence.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Core Innovations.</h2>
            <ul className="list-disc list-inside text-xl text-gray-900  sm:text-2xl lg:text-3xl space-y-4">
              <li>Algorithmic Innovations for Reduced Complexity: Discusses efficient model architectures like Mixture-of-Experts (MoE) and sparse networks, knowledge distillation, and quantization to reduce computational cost.</li>
              <li>Next-Generation Hardware: Explores neuromorphic computing, quantum computing, optical computing, and specialized ASICs as energy-efficient alternatives to current hardware.</li>
              <li>Ethical, Scalable Data Foundations: Outlines principles for managing and integrating vast multimodal data ethically, covering data quality, curation, bias detection, and privacy preservation.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Applications Across Industries.</h2>
            <p className="text-xl text-gray-900  sm:text-2xl lg:text-3xl">
            The principles discussed are foundational and apply to any industry aiming to leverage large-scale AI and superintelligence in a sustainable and ethical manner. This includes, but is not limited to, healthcare, finance, manufacturing, and scientific research.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Ethics & Trust.</h2>
            <ul className="list-disc list-inside text-xl text-gray-900  sm:text-2xl lg:text-3xl space-y-4">
                <li>Ethical Data Governance: Emphasizes the need for robust frameworks for data ownership, consent, and transparency.</li>
                <li>Bias Detection and Mitigation: Stresses the importance of preventing the amplification of societal biases in large-scale datasets.</li>
                <li>Privacy-Preserving Techniques: Discusses methods like federated learning, differential privacy, and homomorphic encryption to protect sensitive information.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Future Directions.</h2>
            <ul className="list-disc list-inside text-xl text-gray-900  sm:text-2xl lg:text-3xl space-y-4">
                <li>Developing novel algorithms with provably lower energy bounds.</li>
                <li>Maturing neuromorphic and quantum hardware to practical scales for complex AI.</li>
                <li>Establishing universally accepted standards for ethical data collection, governance, and AI impact assessment.</li>
                <li>Fostering interdisciplinary collaboration between AI researchers, hardware engineers, ethicists, and policymakers.</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <Link href="/Computational__Hardware__and_Data_Foundations_for_Sustainable_Superintelligence__Navigating_Energy__Multimodality__and_Ethical_Data_at_Scale.pdf" passHref>
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