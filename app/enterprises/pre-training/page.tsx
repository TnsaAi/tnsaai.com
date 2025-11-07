'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function PreTrainingPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">Enterprise Service</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>Pre-Training Services</h1>
        </div>

        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/brandon-stecz-9rX32anLiVA-unsplash.jpg"
            alt="Pre-Training Services"
            fill
            priority
            className="object-cover rounded-[40px]"
          />
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Overview.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Build custom foundation models from scratch with our pre-training services. We help you create proprietary AI models trained on your data with custom architectures tailored to your specific requirements.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Pre-Training Techniques.</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-gray-900 pl-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Causal Language Modeling (CLM)</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Next-token prediction training for autoregressive models. Foundation for GPT-style architectures. Achieves perplexity scores of 10-15 on domain-specific corpora.
                </p>
              </div>
              <div className="border-l-4 border-gray-700 pl-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Masked Language Modeling (MLM)</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Bidirectional context learning by predicting masked tokens. Used in BERT-style models. Improves understanding tasks by 20-30% over CLM alone.
                </p>
              </div>
              <div className="border-l-4 border-gray-500 pl-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Mixture of Experts (MoE)</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Sparse activation of specialized sub-networks. Enables 10x model capacity with 2x compute cost. Ideal for multi-domain applications.
                </p>
              </div>
              <div className="border-l-4 border-gray-400 pl-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Contrastive Learning</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Learning representations by contrasting positive and negative examples. Improves embedding quality by 40% for retrieval tasks.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Training Infrastructure.</h2>
            <div className="bg-gray-50 rounded-[40px] p-8">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-medium mr-4">1</div>
                  <div>
                    <h4 className="font-medium text-gray-900">Data Collection & Curation</h4>
                    <p className="text-sm text-gray-600">Gather 100B+ tokens from diverse sources</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-medium mr-4">2</div>
                  <div>
                    <h4 className="font-medium text-gray-900">Architecture Design</h4>
                    <p className="text-sm text-gray-600">Custom transformer variants and optimizations</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-medium mr-4">3</div>
                  <div>
                    <h4 className="font-medium text-gray-900">Distributed Training</h4>
                    <p className="text-sm text-gray-600">Multi-node GPU clusters with 3D parallelism</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-medium mr-4">4</div>
                  <div>
                    <h4 className="font-medium text-gray-900">Scaling & Optimization</h4>
                    <p className="text-sm text-gray-600">Continuous improvement and checkpoint management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Model Scaling Laws.</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-[40px] p-6 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">100B+</div>
                <div className="text-sm text-gray-600">Training Tokens</div>
              </div>
              <div className="bg-gray-50 rounded-[40px] p-6 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">10x</div>
                <div className="text-sm text-gray-600">MoE Capacity</div>
              </div>
              <div className="bg-gray-50 rounded-[40px] p-6 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">3D</div>
                <div className="text-sm text-gray-600">Parallelism</div>
              </div>
              <div className="bg-gray-50 rounded-[40px] p-6 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">40%</div>
                <div className="text-sm text-gray-600">Better Embeddings</div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Applications.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Proprietary enterprise models, specialized domain knowledge systems, multilingual models for specific regions, industry-specific foundation models, research and academic applications, and government AI systems.
            </p>
          </div>

          <div className="flex justify-center" style={{ marginBottom: '77px' }}>
            <Link href="/company/contact" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              Contact Sales →
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
