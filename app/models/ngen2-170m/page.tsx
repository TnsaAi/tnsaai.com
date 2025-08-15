'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function NGen2_170MPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-white p-1 h-screen flex items-center justify-center">
        <div 
          className="relative isolate w-full h-full flex items-center justify-center rounded-3xl overflow-hidden border border-gray-200"
          style={{
            backgroundImage: 'url(/emerald-blue-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
            <h1 className="text-5xl font-medium tracking-tight mb-8 font-sans sm:text-6xl lg:text-7xl xl:text-8xl">
              NGen 2 170M
            </h1>
            <p className="text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
              Second-generation 170 million parameter model offering reliable performance with fast and efficient processing capabilities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">Gen-2 Evolution</h3>
                <p className="text-lg opacity-90">Second-generation improvements and optimizations</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">170M Scale</h3>
                <p className="text-lg opacity-90">Optimal parameter count for balanced performance</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">Production Ready</h3>
                <p className="text-lg opacity-90">Battle-tested reliability for production workloads</p>
              </div>
            </div>

            <div className="flex justify-center gap-4 mb-8">
              <Link
                href="https://api.tnsaai.com"
                className="rounded-md bg-white/20 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/30 transition-all border border-white/30"
              >
                Try API →
              </Link>
              <Link
                href="/developers"
                className="rounded-md bg-white/20 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/30 transition-all border border-white/30"
              >
                Documentation →
              </Link>
            </div>

            <div className="flex justify-center">
              <Image
                src="/TNSA.png"
                alt="TNSA"
                width={80}
                height={32}
                className="opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}