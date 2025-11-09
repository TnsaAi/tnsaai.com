'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function NGen35MaxChatPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        {/* Date and Title */}
        <div className="text-center">
          <p className="text-sm text-gray-500">January 2025</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>NGen 3.5 Max</h1>
        </div>

        {/* Image */}
        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/mymind-tZCrFpSNiIQ-unsplash.jpg"
            alt="NGen 3.5 Max"
            fill
            priority
            className="object-cover rounded-[40px]"
          />
        </div>
      </div>

      {/* Paper Content */}
      <div className="bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Overview</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              NGen 3.5 Max represents the pinnacle of TNSA&apos;s conversational AI capabilities, delivering maximum performance across knowledge, reasoning, coding, and vision intelligence tasks. Built for enterprise applications requiring the highest level of accuracy and capability.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Benchmark Performance</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse text-gray-900">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-3 px-2 font-semibold">Category</th>
                    <th className="text-left py-3 px-2 font-semibold">Benchmark</th>
                    <th className="text-right py-3 px-2 font-semibold">NGen 3.5 Max</th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-500">Llama-3.3-70B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={4}>Knowledge</td>
                    <td className="py-3 px-2">MMLU-Pro</td>
                    <td className="text-right py-3 px-2 font-semibold">75.8</td>
                    <td className="text-right py-3 px-2 text-gray-500">82.5</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">MMLU-Redux</td>
                    <td className="text-right py-3 px-2 font-semibold">90.2</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">GPQA</td>
                    <td className="text-right py-3 px-2 font-semibold">71.2</td>
                    <td className="text-right py-3 px-2 text-gray-500">69.4</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">SuperGPQA</td>
                    <td className="text-right py-3 px-2 font-semibold">57.8</td>
                    <td className="text-right py-3 px-2 text-gray-500">55.1</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={3}>Reasoning</td>
                    <td className="py-3 px-2">AIME25</td>
                    <td className="text-right py-3 px-2 font-semibold">89.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">78.5</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">HMMT25</td>
                    <td className="text-right py-3 px-2 font-semibold">63.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">51.2</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">LiveBench</td>
                    <td className="text-right py-3 px-2 font-semibold">76.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">75.6</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={3}>Coding</td>
                    <td className="py-3 px-2">LiveCodeBench v6</td>
                    <td className="text-right py-3 px-2 font-semibold">62.5</td>
                    <td className="text-right py-3 px-2 text-gray-500">61.9</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">CFEval</td>
                    <td className="text-right py-3 px-2 font-semibold">1912</td>
                    <td className="text-right py-3 px-2 text-gray-500">2100</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">OJBench</td>
                    <td className="text-right py-3 px-2 font-semibold">22.9</td>
                    <td className="text-right py-3 px-2 text-gray-500">19.8</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={2}>Alignment</td>
                    <td className="py-3 px-2">IFEval</td>
                    <td className="text-right py-3 px-2 font-semibold">92.8</td>
                    <td className="text-right py-3 px-2 text-gray-500">90</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">Arena-Hard v2</td>
                    <td className="text-right py-3 px-2 font-semibold">41.8</td>
                    <td className="text-right py-3 px-2 text-gray-500">39.1</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={8}>Vision Intelligence</td>
                    <td className="py-3 px-2">MMMU</td>
                    <td className="text-right py-3 px-2 font-semibold">75.6</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">MMMU Full</td>
                    <td className="text-right py-3 px-2 font-semibold">61.9</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">MathVista</td>
                    <td className="text-right py-3 px-2 font-semibold">83.2</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">MathVerse mini</td>
                    <td className="text-right py-3 px-2 font-semibold">68.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">RealWorldQA</td>
                    <td className="text-right py-3 px-2 font-semibold">76.9</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">DocVQA</td>
                    <td className="text-right py-3 px-2 font-semibold">95.6</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">ChartQA</td>
                    <td className="text-right py-3 px-2 font-semibold">85.9</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">A12Test</td>
                    <td className="text-right py-3 px-2 font-semibold">95.5</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">NGen3 Speed Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse text-gray-900">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-3 px-2 font-semibold">PERFORMANCE / MODELS</th>
                    <th className="text-right py-3 px-2 font-semibold">NGEN 3.5 MAX</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">TOKENS PER SECOND (TPS)</td>
                    <td className="text-right py-3 px-2">52.59</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">PROMPT EVAL RATE (INPUT)</td>
                    <td className="text-right py-3 px-2">1516.89</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">CONTEXT LENGTH (TOKENS)</td>
                    <td className="text-right py-3 px-2">262,144</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Purpose</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              This report presents a comparative analysis of model efficiency (Quality / Cost Ratio) across TNSA’s NGen 3 models and leading open-foundation LLMs such as Llama and DeepSeek.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mt-4">
              This version corrects for earlier conservative (higher) cost assumptions for non-TNSA models to reflect approximate normalized enterprise inference pricing and FP8-efficient cost scaling.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Methodology Summary</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              <strong>Formula:</strong> Quality / Cost Ratio (QCR) = Average Quality Score (Q) / Cost per 1M tokens (₹). Reported as Quality Points per ₹1,000 per 1M tokens, meaning higher is more efficient.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mt-4">
              <strong>Input Data:</strong>
              <ul className="list-disc list-inside mt-2">
                <li>Benchmarks: Average of all numeric benchmark metrics (omitting “-” or “No Support”) from client-supplied table.</li>
                <li>Cost basis: Input and output pricing (₹ per 1K tokens), averaged, then scaled to ₹ per 1M tokens.</li>
                <li>Revised non-TNSA model rates now reflect realistic optimized-inference values.</li>
              </ul>
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Pricing (Per 1,000 Tokens)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse text-gray-900">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-3 px-2 font-semibold">MODEL</th>
                    <th className="text-right py-3 px-2 font-semibold">INPUT (₹)</th>
                    <th className="text-right py-3 px-2 font-semibold">OUTPUT (₹)</th>
                    <th className="text-right py-3 px-2 font-semibold">AVG (₹/1K)</th>
                    <th className="text-right py-3 px-2 font-semibold">COST (₹/1M TOKENS)</th>
                    <th className="text-left py-3 px-2 font-semibold">NOTE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">NGEN 3.5 MAX</td>
                    <td className="text-right py-3 px-2">0.79</td>
                    <td className="text-right py-3 px-2">1.18</td>
                    <td className="text-right py-3 px-2">0.985</td>
                    <td className="text-right py-3 px-2">985</td>
                    <td className="py-3 px-2">Client input</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Average Benchmark Scores</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse text-gray-900">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-3 px-2 font-semibold">Model</th>
                    <th className="text-right py-3 px-2 font-semibold">Average Quality Score (Q)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">NGen 3.5 Max</td>
                    <td className="text-right py-3 px-2">74.54</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Recalculated Quality / Cost Ratios</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse text-gray-900">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-3 px-2 font-semibold">RANK</th>
                    <th className="text-left py-3 px-2 font-semibold">MODEL</th>
                    <th className="text-right py-3 px-2 font-semibold">AVG QUALITY (Q)</th>
                    <th className="text-right py-3 px-2 font-semibold">COST PER 1M (₹)</th>
                    <th className="text-right py-3 px-2 font-semibold">REPORTED QCR (×1,000)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">3</td>
                    <td className="py-3 px-2">NGen 3.5 Max</td>
                    <td className="text-right py-3 px-2">74.54</td>
                    <td className="text-right py-3 px-2">985</td>
                    <td className="text-right py-3 px-2">75.7</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Interpretation</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              <strong>1. Enterprise & Stability Class Models:</strong> NGen Max models deliver superior alignment, factual robustness, and multi-modal extension but trade some cost efficiency for reliability — ideal for high-stakes enterprise use cases.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Client Insights</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse text-gray-900">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-3 px-2 font-semibold">Model Tier</th>
                    <th className="text-left py-3 px-2 font-semibold">Ideal Use Case</th>
                    <th className="text-left py-3 px-2 font-semibold">Key Strength</th>
                    <th className="text-left py-3 px-2 font-semibold">Operational Note</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">NGen 3.5 Max</td>
                    <td className="py-3 px-2">Enterprise-grade, vision, reasoning</td>
                    <td className="py-3 px-2">Maximum capability</td>
                    <td className="py-3 px-2">Highest accuracy for complex tasks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">ROI Calculation</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              For 10M tokens monthly inference (mixed input/output load):
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse text-gray-900">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-3 px-2 font-semibold">Model</th>
                    <th className="text-right py-3 px-2 font-semibold">Monthly Cost (₹)</th>
                    <th className="text-right py-3 px-2 font-semibold">Effective Quality Score</th>
                    <th className="text-right py-3 px-2 font-semibold">ROI (Quality × 10 / Cost)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">NGEN 3.5 MAX</td>
                    <td className="text-right py-3 px-2">9,850</td>
                    <td className="text-right py-3 px-2">74.54</td>
                    <td className="text-right py-3 px-2">0.76</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Pricing.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              ₹0.79 input / ₹1.18 output per 1K tokens
            </p>
          </div>

          <div className="flex justify-center" style={{ marginBottom: '77px' }}>
            <Link href="https://platform.tnsaai.com" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              Try on API Platform →
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
