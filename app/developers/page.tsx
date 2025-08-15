'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function DevelopersPage() {
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
            <h1 className="text-5xl font-medium tracking-tight mb-16 font-sans bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent sm:text-6xl lg:text-7xl xl:text-8xl">
              Developers.
            </h1>
          </div>
        </div>
      </div>

      {/* API Docs Link */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">API Documentation.</h2>
            <p className="text-xl text-gray-900 font-medium sm:text-2xl lg:text-3xl">
              Explore our comprehensive API documentation to start building with TNSA AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            <Link href="https://api.tnsaai.com/docs">
              <div 
                className="relative rounded-3xl overflow-hidden p-8 text-white min-h-[400px] flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: 'url(/green-blue-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-8">API Docs</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Comprehensive Guides</li>
                    <li>• REST API Reference</li>
                    <li>• Authentication</li>
                    <li>• SDKs and Libraries</li>
                  </ul>
                </div>
                <div className="flex justify-between items-end">
                  <Image
                    src="/TNSA.png"
                    alt="TNSA"
                    width={60}
                    height={24}
                    className="opacity-80"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
