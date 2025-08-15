
'use client'

import Link from 'next/link'
import Image from 'next/image'

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
              TNSA X Microsoft for Startups & Google TPU Research Cloud.
            </h1>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">Partnership Announcement.</h2>
            <p className="text-xl text-gray-900 font-medium sm:text-2xl lg:text-3xl">
              TNSA is excited to announce its collaboration with Microsoft for Startups and our acceptance into the Google TPU Research Cloud program. These partnerships will provide us with the resources and infrastructure to accelerate our research and development in AI.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
