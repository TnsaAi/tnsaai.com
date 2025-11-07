'use client'

import Link from 'next/link'
import { FlightCard } from '@/components/ui/flight-card'

export default function ProductsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-white pb-16 flex items-center justify-center" style={{ paddingTop: '222px' }}>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-5xl font-normal tracking-tight font-sans text-black sm:text-6xl lg:text-7xl">
            Products.
          </h1>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl tracking-tight text-gray-900 mb-4 sm:text-4xl">Core Products.</h2>
            <p className="text-lg text-gray-900 sm:text-xl">Making AI accessible to all humanity</p>
          </div>

          <div className="overflow-x-auto md:overflow-x-visible -mx-6 px-6 md:mx-0 md:px-0">
            <div className="flex md:flex-wrap md:justify-center gap-5 min-w-max md:min-w-0">
              <div className="w-[329px] flex-shrink-0 md:w-auto md:flex-shrink">
                <FlightCard
                  title="TNSA Platform"
                  subtitle="API Platform"
                  category="Enterprise Ready"
                  price="Free Tier"
                  buttonText="Explore platform"
                  imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/muhammad-ridwan-imam-fajar-meqxXc9zPGI-unsplash.jpg"
                  imageAlt="TNSA Platform"
                  href="/products/platform"
                />
              </div>

              <div className="w-[329px] flex-shrink-0 md:w-auto md:flex-shrink">
                <FlightCard
                  title="GensChat"
                  subtitle="Conversational AI"
                  category="India's Own Model"
                  price="Free"
                  buttonText="Try GensChat"
                  imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/omid-armin-Nsn9FY4JGMs-unsplash.jpg"
                  imageAlt="GensChat"
                  href="/products/genchat"
                />
              </div>

              <div className="w-[329px] flex-shrink-0 md:w-auto md:flex-shrink">
                <FlightCard
                  title="EdgeChat"
                  subtitle="Offline AI"
                  category="Network-Free"
                  price="Coming Soon"
                  buttonText="Learn more"
                  imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/martin-de-arriba-J6kz1RK_kFc-unsplash.jpg"
                  imageAlt="EdgeChat"
                  href="/products/edgechat"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl tracking-tight text-gray-900 mb-4 sm:text-4xl">API Services.</h2>
            <p className="text-lg text-gray-900 sm:text-xl">Integrate AI into your applications</p>
          </div>

          <div className="overflow-x-auto md:overflow-x-visible -mx-6 px-6 md:mx-0 md:px-0">
            <div className="flex md:flex-wrap md:justify-center gap-5 min-w-max md:min-w-0">
              <div className="w-[329px] flex-shrink-0 md:w-auto md:flex-shrink">
                <FlightCard
                  title="Text Generation API"
                  subtitle="Language Models"
                  category="Multiple Models"
                  price="Pay per use"
                  buttonText="Try API"
                  imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-artempodrez-7233329.jpg"
                  imageAlt="Text Generation API"
                  href="https://platform.tnsaai.com"
                />
              </div>

              <div className="w-[329px] flex-shrink-0 md:w-auto md:flex-shrink">
                <FlightCard
                  title="Image Generation API"
                  subtitle="Visual AI"
                  category="High-Quality Images"
                  price="Pay per image"
                  buttonText="Try API"
                  imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-artempodrez-7233314.jpg"
                  imageAlt="Image Generation API"
                  href="https://platform.tnsaai.com"
                />
              </div>

              <div className="w-[329px] flex-shrink-0 md:w-auto md:flex-shrink">
                <FlightCard
                  title="Voice Interaction API"
                  subtitle="Speech AI"
                  category="Natural Voices"
                  price="Pay per minute"
                  buttonText="Try API"
                  imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/alexander-x-y-0ThkdUKIk-unsplash.jpg"
                  imageAlt="Voice Interaction API"
                  href="https://platform.tnsaai.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl tracking-tight text-gray-900 mb-4 sm:text-4xl">Enterprise Services.</h2>
            <p className="text-lg text-gray-900 sm:text-xl">Custom AI solutions for your business needs</p>
          </div>

          <div className="overflow-x-auto md:overflow-x-visible -mx-6 px-6 md:mx-0 md:px-0">
            <div className="flex md:flex-wrap md:justify-center gap-5 min-w-max md:min-w-0">
              <div className="w-[329px] flex-shrink-0 md:w-auto md:flex-shrink">
                <FlightCard
                  title="Custom Fine-Tuning"
                  subtitle="Domain-Specific Training"
                  category="Enterprise Service"
                  price="Custom Quote"
                  buttonText="Learn more"
                  imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/susan-wilkinson-6YNPuJ3Ybac-unsplash.jpg"
                  imageAlt="Custom Fine-Tuning"
                  href="/enterprises/fine-tuning"
                />
              </div>

              <div className="w-[329px] flex-shrink-0 md:w-auto md:flex-shrink">
                <FlightCard
                  title="Pre-Training Services"
                  subtitle="Custom Model Architecture"
                  category="Enterprise Service"
                  price="Custom Quote"
                  buttonText="Learn more"
                  imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/brandon-stecz-9rX32anLiVA-unsplash.jpg"
                  imageAlt="Pre-Training Services"
                  href="/enterprises/pre-training"
                />
              </div>

              <div className="w-[329px] flex-shrink-0 md:w-auto md:flex-shrink">
                <FlightCard
                  title="Infrastructure Support"
                  subtitle="Cloud & On-Premise"
                  category="Enterprise Service"
                  price="Custom Quote"
                  buttonText="Learn more"
                  imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-eva-bronzini-7605542.jpg"
                  imageAlt="Infrastructure Support"
                  href="/enterprises/infrastructure"
                />
              </div>

              <div className="w-[329px] flex-shrink-0 md:w-auto md:flex-shrink">
                <FlightCard
                  title="AI Consulting"
                  subtitle="Strategy Development"
                  category="Enterprise Service"
                  price="Custom Quote"
                  buttonText="Learn more"
                  imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-alexant-16738884.jpg"
                  imageAlt="AI Consulting"
                  href="/enterprises/consulting"
                />
              </div>

              <div className="w-[329px] flex-shrink-0 md:w-auto md:flex-shrink">
                <FlightCard
                  title="Data Engineering"
                  subtitle="Pipeline Design"
                  category="Enterprise Service"
                  price="Custom Quote"
                  buttonText="Learn more"
                  imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-karola-g-4046791.jpg"
                  imageAlt="Data Engineering"
                  href="/enterprises/data-engineering"
                />
              </div>

              <div className="w-[329px] flex-shrink-0 md:w-auto md:flex-shrink">
                <FlightCard
                  title="Model Deployment"
                  subtitle="Production Scaling"
                  category="Enterprise Service"
                  price="Custom Quote"
                  buttonText="Learn more"
                  imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-karola-g-4046757.jpg"
                  imageAlt="Model Deployment"
                  href="/enterprises/deployment"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

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
