'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function PaperPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">28 December, 2024</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>A Guide to Build Agents with NGen and MCP</h1>
        </div>

        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-diva-34592795.jpg"
            alt="Building Agents with NGen and MCP"
            fill
            priority
            className="object-cover rounded-[40px]"
          />
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Introduction.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              This comprehensive guide explores how to build intelligent agents using NGen models and the Model Context Protocol (MCP). Learn practical techniques for creating autonomous AI agents that can interact with tools, APIs, and external systems.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">What is MCP?</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Model Context Protocol for standardized agent communication</li>
              <li>Enables seamless integration with external tools and services</li>
              <li>Provides structured context management for complex workflows</li>
              <li>Open standard for building interoperable AI agents</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Building Agents with NGen.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Leveraging NGen's advanced reasoning capabilities</li>
              <li>Implementing tool use and function calling</li>
              <li>Managing multi-step agent workflows</li>
              <li>Handling context and memory in agent systems</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Practical Applications.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Automated customer service agents</li>
              <li>Research and data analysis assistants</li>
              <li>Code generation and debugging agents</li>
              <li>Multi-agent collaboration systems</li>
            </ul>
          </div>

          <div className="flex justify-center" style={{ marginBottom: '77px' }}>
            <Link href="/developers" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              View Documentation →
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
