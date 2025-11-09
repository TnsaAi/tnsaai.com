'use client'

import React from 'react'

const benchmarksData = [
  { category: 'Knowledge', benchmark: 'MMLU-Pro', ngen39pro: 77.2, ngen39maxv3: 81.8, ngen35pro: 73.4, ngen35max: 75.8, llama32: '-', llama33: 68.9, llama4: 59.6, deepseek: 81.2 },
  { category: 'Knowledge', benchmark: 'MMLU-Redux', ngen39pro: 90.4, ngen39maxv3: 93.1, ngen35pro: 87.5, ngen35max: 90.2, llama32: '-', llama33: '-', llama4: '-', deepseek: '-' },
  { category: 'Knowledge', benchmark: 'GPQA', ngen39pro: 63.1, ngen39maxv3: 73.8, ngen35pro: 61.4, ngen35max: 71.2, llama32: 26.0, llama33: '-', llama4: '-', deepseek: 68.4 },
  { category: 'Knowledge', benchmark: 'SuperGPQA', ngen39pro: 49.7, ngen39maxv3: 55.8, ngen35pro: 51.2, ngen35max: 57.8, llama32: '-', llama33: '-', llama4: '-', deepseek: '-' },
  { category: 'Reasoning', benchmark: 'AIME25', ngen39pro: 72.6, ngen39maxv3: 88.3, ngen35pro: 71.6, ngen35max: 89.1, llama32: '-', llama33: '-', llama4: '-', deepseek: '-' },
  { category: 'Reasoning', benchmark: 'HMMT25', ngen39pro: 48.1, ngen39maxv3: 61.5, ngen35pro: 49.2, ngen35max: 63.1, llama32: '-', llama33: '-', llama4: '-', deepseek: '-' },
  { category: 'Reasoning', benchmark: 'LiveBench (25-11-25)', ngen39pro: 69.6, ngen39maxv3: 77.8, ngen35pro: 68.4, ngen35max: 76.1, llama32: '-', llama33: 50.7, llama4: '-', deepseek: '-' },
  { category: 'Coding', benchmark: 'LiveCodeBench v6 (25.02-25.05)', ngen39pro: 54.4, ngen39maxv3: 61.2, ngen35pro: 55.6, ngen35max: 62.5, llama32: '-', llama33: '-', llama4: 68.47, deepseek: 49.2 },
  { category: 'Coding', benchmark: 'CFEval', ngen39pro: 1771, ngen39maxv3: 1952, ngen35pro: 1730, ngen35max: 1912, llama32: '-', llama33: '-', llama4: '-', deepseek: '-' },
  { category: 'Coding', benchmark: 'OJBench', ngen39pro: 22.1, ngen39maxv3: 23.9, ngen35pro: 21.2, ngen35max: 22.9, llama32: '-', llama33: '-', llama4: '-', deepseek: 24.0 },
  { category: 'Alignment', benchmark: 'IFEval', ngen39pro: 87.9, ngen39maxv3: 93.4, ngen35pro: 86.4, ngen35max: 92.8, llama32: '-', llama33: 92.1, llama4: '-', deepseek: '-' },
  { category: 'Alignment', benchmark: 'Arena-Hard v2', ngen39pro: 19.7, ngen39maxv3: 40.9, ngen35pro: 20.4, ngen35max: 41.8, llama32: '-', llama33: '-', llama4: '-', deepseek: '-' },
  { category: 'Vision Intelligence', benchmark: 'MMMU', ngen39pro: '-', ngen39maxv3: '-', ngen35pro: 73.4, ngen35max: 75.6, llama32: 50.7, llama33: 'No Support', llama4: 73.4, deepseek: 'No Support' },
  { category: 'Vision Intelligence', benchmark: 'MMMU Full', ngen39pro: '-', ngen39maxv3: '-', ngen35pro: 59.2, ngen35max: 61.9, llama32: 41.7, llama33: '-', llama4: '-', deepseek: '-' },
  { category: 'Vision Intelligence', benchmark: 'MathVista', ngen39pro: '-', ngen39maxv3: '-', ngen35pro: 79.7, ngen35max: 83.2, llama32: '-', llama33: '-', llama4: 73.7, deepseek: 'No Support' },
  { category: 'Vision Intelligence', benchmark: 'MathVerse mini', ngen39pro: '-', ngen39maxv3: '-', ngen35pro: 52.8, ngen35max: 68.1, llama32: '-', llama33: '-', llama4: '-', deepseek: 'No Support' },
  { category: 'Vision Intelligence', benchmark: 'RealWorldQA', ngen39pro: '-', ngen39maxv3: '-', ngen35pro: 76.9, ngen35max: 76.9, llama32: '-', llama33: '-', llama4: '-', deepseek: 'No Support' },
  { category: 'Vision Intelligence', benchmark: 'DocVQA', ngen39pro: '-', ngen39maxv3: '-', ngen35pro: 90.3, ngen35max: 95.6, llama32: 88.4, llama33: '-', llama4: 94.4, deepseek: 'No Support' },
  { category: 'Vision Intelligence', benchmark: 'ChartQA', ngen39pro: '-', ngen39maxv3: '-', ngen35pro: 82.2, ngen35max: 85.9, llama32: 83.4, llama33: '-', llama4: 90.0, deepseek: 'No Support' },
  { category: 'Vision Intelligence', benchmark: 'A12Test', ngen39pro: '-', ngen39maxv3: '-', ngen35pro: 90.1, ngen35max: 95.5, llama32: '-', llama33: '-', llama4: '-', deepseek: 'No Support' },
  { category: 'Multi-Image Embodied & Spatial Understanding', benchmark: 'MUIR Bench', ngen39pro: '-', ngen39maxv3: '-', ngen35pro: 69.8, ngen35max: 75.4, llama32: '-', llama33: '-', llama4: '-', deepseek: 'No Support' },
  { category: 'Multi-Image Embodied & Spatial Understanding', benchmark: 'VSI Bench', ngen39pro: '-', ngen39maxv3: '-', ngen35pro: 64.4, ngen35max: 65.4, llama32: '-', llama33: '-', llama4: '-', deepseek: 'No Support' },
  { category: 'Video', benchmark: 'MVBench', ngen39pro: '-', ngen39maxv3: '-', ngen35pro: 74.9, ngen35max: 74.7, llama32: '-', llama33: '-', llama4: '-', deepseek: '-' },
  { category: 'Agent', benchmark: 'ScreenSpot Pro', ngen39pro: 64.2, ngen39maxv3: 60.2, ngen35pro: 62.4, ngen35max: 68.2, llama32: '-', llama33: '-', llama4: '-', deepseek: '-' },
  { category: 'Fine-grained Perception', benchmark: 'HRBench8K', ngen39pro: '-', ngen39maxv3: '-', ngen35pro: 78.9, ngen35max: 80.6, llama32: '-', llama33: '-', llama4: '-', deepseek: '-' },
  { category: 'Multilingualism', benchmark: 'MultiIF', ngen39pro: 72.3, ngen39maxv3: 83.3, ngen35pro: 70.9, ngen35max: 81.2, llama32: '-', llama33: '-', llama4: '-', deepseek: '-' },
  { category: 'Multilingualism', benchmark: 'MMLU-ProX', ngen39pro: 67, ngen39maxv3: 70.2, ngen35pro: 66.4, ngen35max: 71.3, llama32: '-', llama33: '-', llama4: '-', deepseek: '-' },
  { category: 'Multilingualism', benchmark: 'INCLUDE', ngen39pro: 67.8, ngen39maxv3: 70.4, ngen35pro: 66.9, ngen35max: 71.2, llama32: '-', llama33: '-', llama4: '-', deepseek: '-' },
e-grained Perception', benchmark: 'HRBench8K', ngen39pro: '-', ngen39maxv3: '-', ngen35pro: 78.9, ngen35max: 80.6, llama32: '-', llama33: '-', llama4: '-', deepseek: '-' },
]

const performanceData = [
  { model: 'NGEN 3.9 PRO', tps: 80.41, promptEval: 2080.90, contextLength: 262144 },
  { model: 'NGEN 3.9 MAX V3', tps: 52.59, promptEval: 1516.89, contextLength: 262144 },
  { model: 'NGEN 3.5 PRO', tps: 79.11, promptEval: 2685.88, contextLength: 262144 },
  { model: 'NGEN 3.5 MAX', tps: 52.59, promptEval: 1516.89, contextLength: 262144 },
  { model: 'LLAMA3.2-11BVISIONINSTRUCT', tps: '-', promptEval: '-', contextLength: 131072 },
  { model: 'LLAMA3.3-70BFP8', tps: '-', promptEval: '-', contextLength: 131072 },
  { model: 'LLAMA-4-MAVERICK17B-128E-INSTRUCT', tps: '-', promptEval: '-', contextLength: 1024000 },
  { model: 'DEEPSEEKV3-0324', tps: '-', promptEval: '-', contextLength: 131072 },
]

const pricingData = [
  { model: 'NGEN 3.9 PRO', input: 0.33, output: 0.50, avg: 0.415, cost: 415, note: 'Client input' },
  { model: 'NGEN 3.9 MAX-STABLE-V3', input: 0.83, output: 1.25, avg: 1.04, cost: 1040, note: 'Client input' },
  { model: 'NGEN 3.5 PRO', input: 0.31, output: 0.48, avg: 0.395, cost: 395, note: 'Client input' },
  { model: 'NGEN 3.5 MAX', input: 0.79, output: 1.18, avg: 0.985, cost: 985, note: 'Client input' },
  { model: 'LLAMA-3.2-11B-VISION-INSTRUCT', input: 0.60, output: 0.90, avg: 0.75, cost: 750, note: 'Adjusted realistic inference cost' },
  { model: 'LLAMA-3.3-70B-INSTRUCT-FP8', input: 1.20, output: 1.80, avg: 1.50, cost: 1500, note: 'FP8 compressed compute' },
  { model: 'LLAMA-4-MAVERICK-17B-128E-INSTRUCT', input: 1.60, output: 2.20, avg: 1.90, cost: 1900, note: 'High-end inference' },
  { model: 'DEEPSEEK-V3-0324', input: 0.95, output: 1.45, avg: 1.20, cost: 1200, note: 'Based on mid-market GPU hosting' },
]

const qualityScores = [
  { model: 'NGen 3.9 Pro', score: 69.93 },
  { model: 'NGen 3.9 Max V3', score: 78.15 },
  { model: 'NGen 3.5 Pro', score: 67.26 },
  { model: 'NGen 3.5 Max', score: 74.54 },
  { model: 'Llama-3.2-11B-Vision-Instruct', score: 58.58 },
  { model: 'Llama-3.3-70B-Instruct-FP8', score: 65.68 },
  { model: 'Llama-4-Maverick-17B-128E-Instruct', score: 72.22 },
  { model: 'DeepSeek-V3-0324', score: 69.35 },
]

const qcrData = [
  { rank: 1, model: 'NGen 3.5 Pro', avgQuality: 67.26, costPer1M: 395, qcr: 0.1703, reportedQCR: 170.3 },
  { rank: 2, model: 'NGen 3.9 Pro', avgQuality: 69.93, costPer1M: 415, qcr: 0.1685, reportedQCR: 168.5 },
  { rank: 3, model: 'NGen 3.5 Max', avgQuality: 74.54, costPer1M: 985, qcr: 0.0757, reportedQCR: 75.7 },
  { rank: 4, model: 'NGen 3.9 Max V3', avgQuality: 78.15, costPer1M: 1040, qcr: 0.0751, reportedQCR: 75.1 },
  { rank: 5, model: 'Llama-3.2-11B-Vision-Instruct', avgQuality: 58.58, costPer1M: 750, qcr: 0.0781, reportedQCR: 78.1 },
  { rank: 6, model: 'DeepSeek-V3-0324', avgQuality: 69.35, costPer1M: 1200, qcr: 0.0578, reportedQCR: 57.8 },
  { rank: 7, model: 'Llama-3.3-70B-Instruct-FP8', avgQuality: 65.68, costPer1M: 1500, qcr: 0.0438, reportedQCR: 43.8 },
  { rank: 8, model: 'Llama-4-Maverick-17B-128E-Instruct', avgQuality: 72.22, costPer1M: 1900, qcr: 0.0380, reportedQCR: 38.0 },
]

const roiData = [
  { model: 'NGEN 3.5 PRO', monthlyCost: 3950, qualityScore: 67.26, roi: 1.70 },
  { model: 'NGEN 3.9 PRO', monthlyCost: 4150, qualityScore: 69.93, roi: 1.68 },
  { model: 'NGEN 3.5 MAX', monthlyCost: 9850, qualityScore: 74.54, roi: 0.76 },
  { model: 'LLAMA-3.2-11B', monthlyCost: 7500, qualityScore: 58.58, roi: 0.78 },
]

const Benchmark = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Benchmarks</h2>

        <div className="overflow-x-auto mb-16">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Benchmark</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NGen 3.9 Pro</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NGen 3.9 Max V3</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NGen 3.5 Pro</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NGen 3.5 Max</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Llama-3.2-11B-Vision-Instruct</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Llama-3.3-70B-Instruct-FP8</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Llama-4-Maverick-17B-128E-Instruct</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DeepSeek-V3-0324</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {benchmarksData.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.benchmark}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.ngen39pro}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.ngen39maxv3}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.ngen35pro}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.ngen35max}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.llama32}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.llama33}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.llama4}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.deepseek}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">NGen3 Speed Comparison</h2>
        <div className="overflow-x-auto mb-16">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance / Models</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tokens per Second (TPS)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prompt Eval Rate (Input)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Context Length (Tokens)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {performanceData.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.model}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.tps}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.promptEval}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.contextLength}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Pricing (Per 1,000 Tokens)</h2>
        <div className="overflow-x-auto mb-16">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Input (₹)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Output (₹)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg (₹/1K)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost (₹/1M Tokens)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Note</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pricingData.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.model}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.input}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.output}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.avg}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.cost}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Average Benchmark Scores</h2>
        <div className="overflow-x-auto mb-16">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Average Quality Score (Q)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {qualityScores.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.model}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Recalculated Quality / Cost Ratios</h2>
        <div className="overflow-x-auto mb-16">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Quality (Q)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-ray-500 uppercase tracking-wider">Cost per 1M (₹)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">QCR (Q/₹1M)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reported QCR (×1,000)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {qcrData.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.rank}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.model}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.avgQuality}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.costPer1M}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.qcr}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.reportedQCR}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">ROI Calculation</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monthly Cost (₹)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Effective Quality Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROI (Quality × 10 / Cost)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {roiData.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.model}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.monthlyCost}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.qualityScore}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.roi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Benchmark
