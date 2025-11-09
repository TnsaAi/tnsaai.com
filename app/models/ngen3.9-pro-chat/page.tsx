'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function NGen39ProChatPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">January 2025</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>NGen 3.9 Pro</h1>
        </div>

        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/ocean-1867285_1280.jpg"
            alt="NGen 3.9 Pro"
            fill
            priority
            className="object-cover rounded-[40px]"
          />
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Overview</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              NGen 3.9 Pro is a state-of-the-art conversational AI, excelling in complex reasoning, knowledge synthesis, and multilingual tasks. It is designed for applications demanding the highest levels of accuracy and contextual understanding.
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
                    <th className="text-right py-3 px-2 font-semibold">NGen 3.9 Pro</th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-500">NGen 3.9 Max V3</th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-500">Llama-3.2-11B</th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-500">Llama-3.3-70B</th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-500">Llama-4-Maverick</th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-500">DeepSeek-V3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={4}>Knowledge</td>
                    <td className="py-3 px-2">MMLU-Pro</td>
                    <td className="text-right py-3 px-2 font-semibold">77.2</td>
                    <td className="text-right py-3 px-2 text-gray-500">81.8</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">68.9</td>
                    <td className="text-right py-3 px-2 text-gray-500">59.6</td>
                    <td className="text-right py-3 px-2 text-gray-500">81.2</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">MMLU-Redux</td>
                    <td className="text-right py-3 px-2 font-semibold">90.4</td>
                    <td className="text-right py-3 px-2 text-gray-500">93.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">GPQA</td>
                    <td className="text-right py-3 px-2 font-semibold">63.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">73.8</td>
                    <td className="text-right py-3 px-2 text-gray-500">26.0</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">68.4</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">SuperGPQA</td>
                    <td className="text-right py-3 px-2 font-semibold">49.7</td>
                    <td className="text-right py-3 px-2 text-gray-500">55.8</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={3}>Reasoning</td>
                    <td className="py-3 px-2">AIME25</td>
                    <td className="text-right py-3 px-2 font-semibold">72.6</td>
                    <td className="text-right py-3 px-2 text-gray-500">88.3</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">HMMT25</td>
                    <td className="text-right py-3 px-2 font-semibold">48.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">61.5</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">LiveBench</td>
                    <td className="text-right py-3 px-2 font-semibold">69.6</td>
                    <td className="text-right py-3 px-2 text-gray-500">77.8</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">50.7</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={3}>Coding</td>
                    <td className="py-3 px-2">LiveCodeBench v6</td>
                    <td className="text-right py-3 px-2 font-semibold">54.4</td>
                    <td className="text-right py-3 px-2 text-gray-500">61.2</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">68.47</td>
                    <td className="text-right py-3 px-2 text-gray-500">49.2</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">CFEval</td>
                    <td className="text-right py-3 px-2 font-semibold">1771</td>
                    <td className="text-right py-3 px-2 text-gray-500">1952</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">OJBench</td>
                    <td className="text-right py-3 px-2 font-semibold">22.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">23.9</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">24.0</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={2}>Alignment</td>
                    <td className="py-3 px-2">IFEval</td>
                    <td className="text-right py-3 px-2 font-semibold">87.9</td>
                    <td className="text-right py-3 px-2 text-gray-500">93.4</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">92.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">Arena-Hard v2</td>
                    <td className="text-right py-3 px-2 font-semibold">19.7</td>
                    <td className="text-right py-3 px-2 text-gray-500">40.9</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
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
                    <th className="text-right py-3 px-2 font-semibold">NGEN 3.9 PRO</th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-500">NGEN 3.9 MAX V3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">TOKENS PER SECOND (TPS)</td>
                    <td className="text-right py-3 px-2">80.41</td>
                    <td className="text-right py-3 px-2 text-gray-500">52.59</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">PROMPT EVAL RATE (INPUT)</td>
                    <td className="text-right py-3 px-2">2080.90</td>
                    <td className="text-right py-3 px-2 text-gray-500">1516.89</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">CONTEXT LENGTH (TOKENS)</td>
                    <td className="text-right py-3 px-2">262,144</td>
                    <td className="text-right py-3 px-2 text-gray-500">262,144</td>
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
                    <td className="py-3 px-2">NGEN 3.9 PRO</td>
                    <td className="text-right py-3 px-2">0.33</td>
                    <td className="text-right py-3 px-2">0.50</td>
                    <td className="text-right py-3 px-2">0.415</td>
                    <td className="text-right py-3 px-2">415</td>
                    <td className="py-3 px-2">Client input</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">NGEN 3.9 MAX-STABLE-V3</td>
                    <td className="text-right py-3 px-2">0.83</td>
                    <td className="text-right py-3 px-2">1.25</td>
                    <td className="text-right py-3 px-2">1.04</td>
                    <td className="text-right py-3 px-2">1,040</td>
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
                    <td className="py-3 px-2">NGen 3.9 Pro</td>
                    <td className="text-right py-3 px-2">69.93</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">NGen 3.9 Max V3</td>
                    <td className="text-right py-3 px-2">78.15</td>
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
                    <td className="py-3 px-2">2</td>
                    <td className="py-3 px-2">NGen 3.9 Pro</td>
                    <td className="text-right py-3 px-2">69.93</td>
                    <td className="text-right py-3 px-2">415</td>
                    <td className="text-right py-3 px-2">168.5</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">4</td>
                    <td className="py-3 px-2">NGen 3.9 Max V3</td>
                    <td className="text-right py-3 px-2">78.15</td>
                    <td className="text-right py-3 px-2">1,040</td>
                    <td className="text-right py-3 px-2">75.1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Interpretation</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              <strong>1. Top Efficiency Models:</strong> NGen 3.9 Pro is one of the two most cost-efficient large models, exceeding 160 quality points per ₹1,000 — nearly 2.2× the efficiency of comparable Llama and DeepSeek deployments.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mt-4">
              <strong>2. Enterprise & Stability Class Models:</strong> NGen Max models deliver superior alignment, factual robustness, and multi-modal extension but trade some cost efficiency for reliability — ideal for high-stakes enterprise use cases.
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
                    <td className="py-3 px-2">NGen 3.9 Pro</td>
                    <td className="py-3 px-2">Knowledge, reasoning-intensive</td>
                    <td className="py-3 px-2">Near-top accuracy</td>
                    <td className="py-3 px-2">Slightly higher cost, higher precision</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">NGen 3.9 Max V3</td>
                    <td className="py-3 px-2">Enterprise-grade, long-context, multilingual</td>
                    <td className="py-3 px-2">Stability + reasoning</td>
                    <td className="py-3 px-2">SLA-focused deployments</td>
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
                    <td className="py-3 px-2">NGEN 3.9 PRO</td>
                    <td className="text-right py-3 px-2">4,150</td>
                    <td className="text-right py-3 px-2">69.93</td>
                    <td className="text-right py-3 px-2">1.68</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Pricing</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              ₹0.33 input / ₹0.50 output per 1K tokens
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
