'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function NGen35ProChatPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">January 2025</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>NGen 3.5 Pro</h1>
        </div>

        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/blur-1721080_1280.jpg"
            alt="NGen 3.5 Pro"
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
              NGen 3.5 Pro delivers professional-grade conversational AI with strong contextual and logical understanding. Optimized for enterprise applications requiring high performance at efficient cost.
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
                    <th className="text-right py-3 px-2 font-semibold">NGen 3.5 Pro</th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-500">NGen 3.5 Max</th>
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
                    <td className="text-right py-3 px-2 font-semibold">73.4</td>
                    <td className="text-right py-3 px-2 text-gray-500">75.8</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">68.9</td>
                    <td className="text-right py-3 px-2 text-gray-500">59.6</td>
                    <td className="text-right py-3 px-2 text-gray-500">81.2</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">MMLU-Redux</td>
                    <td className="text-right py-3 px-2 font-semibold">87.5</td>
                    <td className="text-right py-3 px-2 text-gray-500">90.2</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">GPQA</td>
                    <td className="text-right py-3 px-2 font-semibold">61.4</td>
                    <td className="text-right py-3 px-2 text-gray-500">71.2</td>
                    <td className="text-right py-3 px-2 text-gray-500">26.0</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">68.4</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">SuperGPQA</td>
                    <td className="text-right py-3 px-2 font-semibold">51.2</td>
                    <td className="text-right py-3 px-2 text-gray-500">57.8</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={3}>Reasoning</td>
                    <td className="py-3 px-2">AIME25</td>
                    <td className="text-right py-3 px-2 font-semibold">71.6</td>
                    <td className="text-right py-3 px-2 text-gray-500">89.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">HMMT25</td>
                    <td className="text-right py-3 px-2 font-semibold">49.2</td>
                    <td className="text-right py-3 px-2 text-gray-500">63.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">LiveBench</td>
                    <td className="text-right py-3 px-2 font-semibold">68.4</td>
                    <td className="text-right py-3 px-2 text-gray-500">76.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">50.7</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={3}>Coding</td>
                    <td className="py-3 px-2">LiveCodeBench v6</td>
                    <td className="text-right py-3 px-2 font-semibold">55.6</td>
                    <td className="text-right py-3 px-2 text-gray-500">62.5</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">68.47</td>
                    <td className="text-right py-3 px-2 text-gray-500">49.2</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">CFEval</td>
                    <td className="text-right py-3 px-2 font-semibold">1730</td>
                    <td className="text-right py-3 px-2 text-gray-500">1912</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">OJBench</td>
                    <td className="text-right py-3 px-2 font-semibold">21.2</td>
                    <td className="text-right py-3 px-2 text-gray-500">22.9</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">24.0</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={2}>Alignment</td>
                    <td className="py-3 px-2">IFEval</td>
                    <td className="text-right py-3 px-2 font-semibold">86.4</td>
                    <td className="text-right py-3 px-2 text-gray-500">92.8</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">92.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">Arena-Hard v2</td>
                    <td className="text-right py-3 px-2 font-semibold">20.4</td>
                    <td className="text-right py-3 px-2 text-gray-500">41.8</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={8}>Vision Intelligence</td>
                    <td className="py-3 px-2">MMMU</td>
                    <td className="text-right py-3 px-2 font-semibold">73.4</td>
                    <td className="text-right py-3 px-2 text-gray-500">75.6</td>
                    <td className="text-right py-3 px-2 text-gray-500">50.7</td>
                    <td className="text-right py-3 px-2 text-gray-500">73.4</td>
                    <td className="text-right py-3 px-2 text-gray-500">No Support</td>
                    <td className="text-right py-3 px-2 text-gray-500">No Support</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">MMMU Full</td>
                    <td className="text-right py-3 px-2 font-semibold">59.2</td>
                    <td className="text-right py-3 px-2 text-gray-500">61.9</td>
                    <td className="text-right py-3 px-2 text-gray-500">41.7</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">MathVista</td>
                    <td className="text-right py-3 px-2 font-semibold">79.7</td>
                    <td className="text-right py-3 px-2 text-gray-500">83.2</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">73.7</td>
                    <td className="text-right py-3 px-2 text-gray-500">No Support</td>
                    <td className="text-right py-3 px-2 text-gray-500">No Support</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">MathVerse mini</td>
                    <td className="text-right py-3 px-2 font-semibold">52.8</td>
                    <td className="text-right py-3 px-2 text-gray-500">68.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">No Support</td>
                    <td className="text-right py-3 px-2 text-gray-500">No Support</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">RealWorldQA</td>
                    <td className="text-right py-3 px-2 font-semibold">76.9</td>
                    <td className="text-right py-3 px-2 text-gray-500">76.9</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">No Support</td>
                    <td className="text-right py-3 px-2 text-gray-500">No Support</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">DocVQA</td>
                    <td className="text-right py-3 px-2 font-semibold">90.3</td>
                    <td className="text-right py-3 px-2 text-gray-500">95.6</td>
                    <td className="text-right py-3 px-2 text-gray-500">88.4</td>
                    <td className="text-right py-3 px-2 text-gray-500">94.4</td>
                    <td className="text-right py-3 px-2 text-gray-500">No Support</td>
                    <td className="text-right py-3 px-2 text-gray-500">No Support</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">ChartQA</td>
                    <td className="text-right py-3 px-2 font-semibold">82.2</td>
                    <td className="text-right py-3 px-2 text-gray-500">85.9</td>
                    <td className="text-right py-3 px-2 text-gray-500">83.4</td>
                    <td className="text-right py-3 px-2 text-gray-500">90.0</td>
                    <td className="text-right py-3 px-2 text-gray-500">No Support</td>
                    <td className="text-right py-3 px-2 text-gray-500">No Support</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">A12Test</td>
                    <td className="text-right py-3 px-2 font-semibold">90.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">95.5</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">-</td>
                    <td className="text-right py-3 px-2 text-gray-500">No Support</td>
                    <td className="text-right py-3 px-2 text-gray-500">No Support</td>
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
                    <th className="text-right py-3 px-2 font-semibold">NGEN 3.5 PRO</th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-500">NGEN 3.5 MAX</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">TOKENS PER SECOND (TPS)</td>
                    <td className="text-right py-3 px-2">79.11</td>
                    <td className="text-right py-3 px-2 text-gray-500">52.59</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">PROMPT EVAL RATE (INPUT)</td>
                    <td className="text-right py-3 px-2">2685.88</td>
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
                    <td className="py-3 px-2">NGEN 3.5 PRO</td>
                    <td className="text-right py-3 px-2">0.31</td>
                    <td className="text-right py-3 px-2">0.48</td>
                    <td className="text-right py-3 px-2">0.395</td>
                    <td className="text-right py-3 px-2">395</td>
                    <td className="py-3 px-2">Client input</td>
                  </tr>
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
                    <td className="py-3 px-2">NGen 3.5 Pro</td>
                    <td className="text-right py-3 px-2">67.26</td>
                  </tr>
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
                    <td className="py-3 px-2">1</td>
                    <td className="py-3 px-2">NGen 3.5 Pro</td>
                    <td className="text-right py-3 px-2">67.26</td>
                    <td className="text-right py-3 px-2">395</td>
                    <td className="text-right py-3 px-2">170.3</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">2</td>
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
              <strong>1. Top Efficiency Models:</strong> NGen 3.5 Pro remains the most cost-efficient large model, exceeding 170 quality points per ₹1,000 — nearly 2.2× the efficiency of comparable Llama and DeepSeek deployments.
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
                    <td className="py-3 px-2">NGen 3.5 Pro</td>
                    <td className="py-3 px-2">General-purpose chat, low-cost deployment</td>
                    <td className="py-3 px-2">Highest efficiency</td>
                    <td className="py-3 px-2">Best ROI for token-based workloads</td>
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
                    <td className="py-3 px-2">NGEN 3.5 PRO</td>
                    <td className="text-right py-3 px-2">3,950</td>
                    <td className="text-right py-3 px-2">67.26</td>
                    <td className="text-right py-3 px-2">1.70</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Pricing</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              ₹0.31 input / ₹0.48 output per 1K tokens
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
