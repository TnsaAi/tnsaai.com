'use client'

import Link from 'next/link'

export default function NewsPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-white p-1 h-screen flex items-center justify-center">
        <div 
          className="relative isolate w-full h-full flex items-center justify-center rounded-3xl overflow-hidden border border-gray-200"
          style={{
            backgroundImage: 'url(/blue-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-5xl font-medium tracking-tight mb-16 font-sans bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent sm:text-6xl lg:text-7xl xl:text-8xl">
              A Guide to Build Agents with NGen and MCP.
            </h1>
          </div>
        </div>
      </div>

      {/* Content with sidebar */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">New Guide Published.</h2>
            <p className="text-xl text-gray-900 sm:text-2xl lg:text-3xl">
              We have published a practical guide on building AI agents using NGen and the Model Context Protocol (MCP). The guide covers core concepts, architecture patterns, tooling, and end-to-end examples to help you ship reliable agents faster.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main copy */}
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">What’s inside</h3>
                <ul className="list-disc list-inside text-gray-800 space-y-2 text-lg">
                  <li>NGen agent patterns and orchestration</li>
                  <li>Using MCP tools safely and effectively</li>
                  <li>Evaluation, tracing, and deployment tips</li>
                  <li>Production checklists and best practices</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get the PDF</h3>
                <p className="text-gray-800 text-lg">
                  The full guide is available as a downloadable PDF. You can read it online or save it to your library.
                </p>
              </section>
            </div>

            {/* Sidebar card */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 rounded-2xl border border-gray-200 p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Download</h4>
                <p className="text-gray-700 mb-6">A Guide to Build Agents with NGen and MCP</p>
                <a
                  href="/A%20Guide%20to%20Build%20Agents%20with%20NGen%20and%20MCP.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all w-full"
                >
                  View PDF
                </a>
              </div>
            </aside>
          </div>

          {/* Footer CTA */}
          <div className="mt-16 flex flex-col sm:flex-row gap-4">
            <Link
              href="/research/papers"
              className="rounded-md bg-gray-100 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-200 transition-all"
            >
              Explore more papers
            </Link>
            <a
              href="/A%20Guide%20to%20Build%20Agents%20with%20NGen%20and%20MCP.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition-all"
            >
              Read full guide
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
