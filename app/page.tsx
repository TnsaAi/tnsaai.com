'use client'

import Link from 'next/link'
import Image from 'next/image'
import { PromptBox } from '@/components/ui/prompt-box'
import { FlightCard } from '@/components/ui/flight-card'

export default function Home() {
  const handleSendMessage = (prompt: string) => {
    if (prompt.trim()) {
      const encodedMessage = encodeURIComponent(prompt.trim())
      window.open(`https://chat.tnsaai.com/?message=${encodedMessage}`, '_blank')
    }
  }

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-white h-screen flex items-center justify-center">
        <div className="w-full max-w-4xl px-6">
          <h1 className="text-5xl font-normal text-center mb-12 text-black">
            Building Super-Intelligence.
          </h1>
          
          <PromptBox 
            onSend={handleSendMessage}
            placeholder="Ask me anything..."
            className="w-full mb-8"
          />
          
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="https://platform.tnsaai.com" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              API Platform
            </Link>
            <Link href="https://chat.tnsaai.com" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              GensChat
            </Link>
            <Link href="/models" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              Models
            </Link>
            <Link href="/research" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              Research
            </Link>
          </div>
        </div>
      </div>

      {/* Models Section */}
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-center mb-5">
            <FlightCard
              title="IGen 1"
              imageUrl="https://igen.tnsaai.com/images/igen1/igen1-7.png"
              imageAlt="IGen 1"
              href="/models/igen-1-image"
              variant="large"
            />
          </div>

          <div className="flex justify-center gap-5">
            <FlightCard
              title="NGen 3.5 series Comes In!"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-falling4utah-1934846.jpg"
              imageAlt="NGen 3.5 series"
              href="/models"
              variant="medium"
            />
            <FlightCard
              title="NGen 3.1 Pro"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-efren-ftz-365656346-14433444.jpg"
              imageAlt="NGen 3.1 Pro"
              href="/models/ngen3.1-pro"
            />
          </div>

          <div className="overflow-x-auto md:overflow-x-visible -mx-6 px-6 md:mx-0 md:px-0 mt-8">
            <div className="flex md:justify-center gap-6 min-w-max md:min-w-0">
              <div className="w-[329px] flex-shrink-0">
                <FlightCard
                  title="NGen 3.9 Max"
                  imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/mymind-tZCrFpSNiIQ-unsplash.jpg"
                  imageAlt="NGen 3.9 Max"
                  href="/models/ngen3.9-max-stable-v3-chat"
                />
              </div>
              <div className="w-[329px] flex-shrink-0">
                <FlightCard
                  title="NGen 3.9 Pro"
                  imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/blur-1721080_1280.jpg"
                  imageAlt="NGen 3.9 Pro"
                  href="/models/ngen3.9-pro-chat"
                />
              </div>
              <div className="w-[329px] flex-shrink-0">
                <FlightCard
                  title="NGen 3.9 Lite"
                  imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/milad-fakurian-iFu2HILEng8-unsplash.jpg"
                  imageAlt="NGen 3.9 Lite"
                  href="/models/ngen3.9-lite-chat"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Link
              href="/models"
              className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
            >
              View All Models →
            </Link>
            <Link
              href="https://platform.tnsaai.com"
              className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
            >
              Try API →
            </Link>
            <Link
              href="/products/genchat"
              className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
            >
              GenGChat →
            </Link>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8 flex justify-center">
            <div style={{ width: '1028px' }}>
              <h2 className="text-3xl font-medium text-gray-900 mb-2">Products.</h2>
              <p className="text-base font-medium text-gray-900">Making AI accessible to All Humanity.</p>
            </div>
          </div>
          
          <div className="flex justify-center gap-6">
            <div style={{ width: '329px' }}>
              <FlightCard
                title="TNSA Platform"
                imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/muhammad-ridwan-imam-fajar-meqxXc9zPGI-unsplash.jpg"
                imageAlt="TNSA Platform"
                href="/products/platform"
              />
            </div>
            <div style={{ width: '329px' }}>
              <FlightCard
                title="GensChat"
                imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/omid-armin-Nsn9FY4JGMs-unsplash.jpg"
                imageAlt="GensChat"
                href="/products/genchat"
              />
            </div>
            <div style={{ width: '329px' }}>
              <FlightCard
                title="EdgeChat"
                imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/martin-de-arriba-J6kz1RK_kFc-unsplash.jpg"
                imageAlt="EdgeChat"
                href="/products/edgechat"
              />
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <Link
              href="/products"
              className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
            >
              View All Products →
            </Link>
            <Link
              href="https://platform.tnsaai.com"
              className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
            >
              Try API →
            </Link>
            <Link
              href="/products/genchat"
              className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
            >
              GensChat →
            </Link>
          </div>
        </div>
      </div>

      {/* Researches Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8 flex justify-center">
            <div style={{ width: '1028px' }}>
              <h2 className="text-3xl font-medium text-gray-900 mb-2">Researches that Help us.</h2>
            </div>
          </div>
          
          <div className="flex justify-center gap-6 mb-6">
            <div style={{ width: '329px' }}>
              <FlightCard
                title="LLMs can be Creative and Independent."
                imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/kukai-art-oDQqO9opEXc-unsplash.jpg"
                imageAlt="LLMs can be Creative and Independent"
                href="/research/llms-can-be-creative-and-independent"
              />
            </div>
            <div style={{ width: '329px' }}>
              <FlightCard
                title="Adaptive Sparse Transformer Blocks"
                imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/abstral-official-kzTYEGMY4N0-unsplash.jpg"
                imageAlt="Adaptive Sparse Transformer Blocks"
                href="/research/adaptive-sparse-transformer-blocks"
              />
            </div>
            <div style={{ width: '329px' }}>
              <FlightCard
                title="Quantum Intelligence and Future AI Systems"
                imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-efren-ftz-365656346-14433444.jpg"
                imageAlt="Quantum Intelligence"
                href="/research/quantum-intelligence-and-future-ai-systems"
              />
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <div style={{ width: '329px' }}>
              <FlightCard
                title="Cross Modal Contrastive Curriculum Learning."
                imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/kukai-art-xS_lI4mtyzs-unsplash.jpg"
                imageAlt="Cross Modal Contrastive Curriculum Learning"
                href="/research/cross-modal-contrastive-curriculum-learning"
              />
            </div>
            <div style={{ width: '329px' }}>
              <FlightCard
                title="Interpretable Attention Visualization Module."
                imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/rini-nur-rohmah-ZkGf87NclJ0-unsplash.jpg"
                imageAlt="Interpretable Attention Visualization Module"
                href="/research/interpretable-attention-visualization-module"
              />
            </div>
            <div style={{ width: '329px' }}>
              <FlightCard
                title="Quantum Language Models."
                imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/boliviainteligente-7TLXeqJgock-unsplash.jpg"
                imageAlt="Quantum Language Models"
                href="/research/quantum-language-models"
              />
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <Link
              href="/research"
              className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
            >
              View All Research →
            </Link>
          </div>
        </div>
      </div>

      {/* Collaborations Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8 flex justify-center">
            <div style={{ width: '1028px' }}>
              <h2 className="text-3xl font-medium text-gray-900 mb-2">Our Partners.</h2>
              <p className="text-base font-medium text-gray-900">TNSA is excited to announce its collaboration with Microsoft for Startups and our acceptance into the Google TPU Research Cloud program.</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div style={{ width: '1028px' }} className="flex items-center justify-center gap-x-8">
              <Image
                src="/ms_startups.png"
                alt="Microsoft for Startups Logo"
                width={400}
                height={160}
                className="object-contain"
              />
              <Image
                src="/google_trc.png"
                alt="Google TPU Research Cloud Logo"
                width={200}
                height={80}
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Link
              href="/company/news/tnsa-x-microsoft-for-startups-tnsa-x-google-tpu-research-cloud"
              className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
            >
              Read the Announcement →
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-gray-50 rounded-[40px] flex flex-col items-center justify-center" style={{width: '100%', maxWidth: '1028px', height: '575px', margin: '0 auto'}}>
            <h2 className="text-5xl font-normal text-center mb-8 text-black">
              Start building with TNSA today!
            </h2>
            <Link href="https://platform.tnsaai.com" className="px-8 py-3 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              API Platform
            </Link>
          </div>
        </div>
      </div>


    </div>
  )
}
