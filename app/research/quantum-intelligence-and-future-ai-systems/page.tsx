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
            backgroundImage: 'url(/black-violet-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-5xl  tracking-tight mb-16 font-sans bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent sm:text-6xl lg:text-7xl xl:text-8xl">
              Quantum Intelligence and Future AI Systems.
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
            This paper explores the transformative potential of quantum intelligence on the trajectory of artificial intelligence. We delve into the fundamental principles of quantum computing that set the stage for a new paradigm of AI, one that transcends the limitations of classical computation. We discuss how quantum mechanics can be harnessed to create AI systems with unparalleled computational power, capable of solving problems currently intractable for even the most powerful supercomputers. The paper presents a forward-looking perspective on the architecture of future AI systems, integrating quantum-classical approaches to unlock new frontiers in machine learning, optimization, and complex systems modeling. We also address the profound implications of quantum AI on society, from accelerating scientific discovery to reshaping industries, while also considering the ethical and societal challenges that must be navigated. Our work aims to provide a comprehensive overview of the synergistic relationship between quantum computing and AI, offering a roadmap for the development of next-generation intelligent systems.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Core Innovations.</h2>
            <ul className="list-disc list-inside text-xl text-gray-900  sm:text-2xl lg:text-3xl space-y-4">
              <li>Quantum-Enhanced Machine Learning: Leveraging quantum algorithms to revolutionize machine learning, enabling faster and more efficient training of complex models.</li>
              <li>Advanced Simulation Capabilities: Utilizing quantum computers to simulate complex quantum systems, opening new avenues for drug discovery, materials science, and fundamental physics research.</li>
              <li>Hybrid Quantum-Classical Systems: Architecting hybrid systems that combine the strengths of classical and quantum processors to tackle complex real-world problems.</li>
              <li>Secure and Private AI: Exploring the use of quantum communication and cryptography to build more secure and privacy-preserving AI systems.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Performance Highlights.</h2>
            <ul className="list-disc list-inside text-xl text-gray-900  sm:text-2xl lg:text-3xl space-y-4">
                <li>Demonstrated exponential speedups for specific classes of problems, showcasing the potential of quantum AI to solve currently intractable computational challenges.</li>
                <li>Achieved significant improvements in optimization problems, with applications in logistics, finance, and network design.</li>
                <li>Developed novel quantum machine learning models with enhanced learning capabilities and generalization performance.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Applications Across Industries.</h2>
            <ul className="list-disc list-inside text-xl text-gray-900  sm:text-2xl lg:text-3xl space-y-4">
                <li>Healthcare: Accelerating drug discovery, personalized medicine, and medical imaging analysis.</li>
                <li>Finance: Optimizing financial models, improving risk analysis, and securing financial transactions.</li>
                <li>Manufacturing: Enhancing supply chain management, optimizing production processes, and designing new materials.</li>
                <li>Energy: Discovering new catalysts for clean energy production and optimizing energy grids.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Future Directions.</h2>
            <ul className="list-disc list-inside text-xl text-gray-900  sm:text-2xl lg:text-3xl space-y-4">
                <li>Building Fault-Tolerant Quantum Computers: Overcoming the challenge of quantum decoherence to build large-scale, fault-tolerant quantum computers.</li>
                <li>Developing Quantum AI Algorithms: Designing new quantum algorithms tailored for AI applications and exploring their theoretical foundations.</li>
                <li>Fostering a Quantum-Ready Workforce: Educating and training the next generation of scientists and engineers in quantum computing and AI.</li>
                <li>Addressing Ethical and Societal Implications: Engaging in a global dialogue to ensure the responsible and ethical development and deployment of quantum AI.</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <Link href="/Quantum_Intelligence_and_Future_AI_Systems.pdf" passHref>
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
