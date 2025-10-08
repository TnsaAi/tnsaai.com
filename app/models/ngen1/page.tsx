'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function NGen1Page() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-white p-1 h-screen flex items-center justify-center">
        <div 
          className="relative isolate w-full h-full flex items-center justify-center rounded-3xl overflow-hidden border border-gray-200"
          style={{
            backgroundImage: 'url(/gold-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
            <h1 className="text-5xl font-medium tracking-tight mb-8 font-sans sm:text-6xl lg:text-7xl xl:text-8xl">
              NGen 1
            </h1>
            <p className="text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
              First-generation foundational model with powerful analytical and multimodal capabilities, setting the foundation for advanced AI applications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">Pioneer</h3>
                <p className="text-lg opacity-90">First-generation model that started the AI revolution</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">Foundation</h3>
                <p className="text-lg opacity-90">Core architecture that powers next-generation models</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">Legacy</h3>
                <p className="text-lg opacity-90">Proven track record in production environments</p>
              </div>
            </div>

            <div className="flex justify-center gap-4 mb-8">
              <Link
                href="https://platform.tnsaai.com"
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
