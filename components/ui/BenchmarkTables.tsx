export default function BenchmarkTables() {
  return (
    <div className="overflow-x-auto">
      <h3 className="text-xl text-gray-900 my-4">Benchmark Scores</h3>
      <table className="w-full text-sm border-collapse text-gray-900">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="text-left py-3 px-2 font-semibold">Category</th>
            <th className="text-left py-3 px-2 font-semibold">Benchmark</th>
            <th className="text-right py-3 px-2 font-semibold">NGen 3.9 Pro</th>
            <th className="text-right py-3 px-2 font-semibold">NGen 3.9 Max V3</th>
            <th className="text-right py-3 px-2 font-semibold">NGen 3.5 Pro</th>
            <th className="text-right py-3 px-2 font-semibold">NGen 3.5 Max</th>
            <th className="text-right py-3 px-2 font-semibold">Llama-3.2-11B-Vision-Instruct</th>
            <th className="text-right py-3 px-2 font-semibold">Llama-3.3-70B-Instruct-FP8</th>
            <th className="text-right py-3 px-2 font-semibold">Llama-4-Maverick-17B-128E-Instruct</th>
            <th className="text-right py-3 px-2 font-semibold">DeepSeek-V3-0324</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 px-2 font-medium" rowSpan={4}>
              Knowledge
            </td>
            <td>MMLU-Pro</td>
            <td className="text-right py-3 px-2 font-semibold">77.2</td>
            <td className="text-right py-3 px-2 font-semibold">81.8</td>
            <td className="text-right py-3 px-2 font-semibold">73.4</td>
            <td className="text-right py-3 px-2 font-semibold">75.8</td>
            <td className="text-right py-3 px-2 font-semibold">-</td>
            <td className="text-right py-3 px-2 font-semibold">68.9</td>
            <td className="text-right py-3 px-2 font-semibold">59.6</td>
            <td className="text-right py-3 px-2 font-semibold">81.2</td>
          </tr>
          <tr>
            <td>GPQA</td>
            <td className="text-right py-3 px-2 font-semibold">63.1</td>
            <td className="text-right py-3 px-2 font-semibold">73.8</td>
            <td className="text-right py-3 px-2 font-semibold">61.4</td>
            <td className="text-right py-3 px-2 font-semibold">71.2</td>
            <td className="text-right py-3 px-2 font-semibold">26.0</td>
            <td className="text-right py-3 px-2 font-semibold">-</td>
            <td className="text-right py-3 px-2 font-semibold">-</td>
            <td className="text-right py-3 px-2 font-semibold">68.4</td>
          </tr>
        </tbody>
      </table>
      <h3 className="text-xl text-gray-900 my-4">NGen3 Speed Comparison</h3>
      <table className="w-full text-sm border-collapse text-gray-900">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="text-left py-3 px-2 font-semibold">PERFORMANCE / MODELS</th>
            <th className="text-right py-3 px-2 font-semibold">NGEN 3.9 PRO</th>
            <th className="text-right py-3 px-2 font-semibold">NGEN 3.9 MAX V3</th>
            <th className="text-right py-3 px-2 font-semibold">NGEN 3.5 PRO</th>
            <th className="text-right py-3 px-2 font-semibold">NGEN 3.5 MAX</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-2">TOKENS PER SECOND (TPS)</td>
            <td className="text-right py-3 px-2">80.41</td>
            <td className="text-right py-3 px-2">52.59</td>
            <td className="text-right py-3 px-2">79.11</td>
            <td className="text-right py-3 px-2">52.59</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-2">PROMPT EVAL RATE (INPUT)</td>
            <td className="text-right py-3 px-2">2080.90</td>
            <td className="text-right py-3 px-2">1516.89</td>
            <td className="text-right py-3 px-2">2685.88</td>
            <td className="text-right py-3 px-2">1516.89</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-2">CONTEXT LENGTH (TOKENS)</td>
            <td className="text-right py-3 px-2">262,144</td>
            <td className="text-right py-3 px-2">262,144</td>
            <td className="text-right py-3 px-2">262,144</td>
            <td className="text-right py-3 px-2">262,144</td>
          </tr>
        </tbody>
      </table>
      <h3 className="text-xl text-gray-900 my-4">Pricing (Per 1,000 Tokens)</h3>
      <table className="w-full text-sm border-collapse text-gray-900">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="text-left py-3 px-2 font-semibold">MODEL</th>
            <th className="text-right py-3 px-2 font-semibold">INPUT (₹)</th>
            <th className="text-right py-3 px-2 font-semibold">OUTPUT (₹)</th>
            <th className="text-right py-3 px-2 font-semibold">AVG (₹/1K)</th>
            <th className="text-right py-3 px-2 font-semibold">COST (₹/1M TOKENS)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-2">NGEN 3.9 PRO</td>
            <td className="text-right py-3 px-2">0.33</td>
            <td className="text-right py-3 px-2">0.50</td>
            <td className="text-right py-3 px-2">0.415</td>
            <td className="text-right py-3 px-2">415</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-2">NGEN 3.9 MAX-STABLE-V3</td>
            <td className="text-right py-3 px-2">0.83</td>
            <td className="text-right py-3 px-2">1.25</td>
            <td className="text-right py-3 px-2">1.04</td>
            <td className="text-right py-3 px-2">1,040</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-2">NGEN 3.5 PRO</td>
            <td className="text-right py-3 px-2">0.31</td>
            <td className="text-right py-3 px-2">0.48</td>
            <td className="text-right py-3 px-2">0.395</td>
            <td className="text-right py-3 px-2">395</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-2">NGEN 3.5 MAX</td>
            <td className="text-right py-3 px-2">0.79</td>
            <td className="text-right py-3 px-2">1.18</td>
            <td className="text-right py-3 px-2">0.985</td>
            <td className="text-right py-3 px-2">985</td>
          </tr>
        </tbody>
      </table>
      <h3 className="text-xl text-gray-900 my-4">Recalculated Quality / Cost Ratios</h3>
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
            <td className="py-3 px-2">NGen 3.9 Pro</td>
            <td className="text-right py-3 px-2">69.93</td>
            <td className="text-right py-3 px-2">415</td>
            <td className="text-right py-3 px-2">168.5</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-2">3</td>
            <td className="py-3 px-2">NGen 3.5 Max</td>
            <td className="text-right py-3 px-2">74.54</td>
            <td className="text-right py-3 px-2">985</td>
            <td className="text-right py-3 px-2">75.7</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-2">4</td>
            <td className="py-3 px-2">NGen 3.9 Max V3</td>
            <td className="text-right py-3 px-2">78.15</td>
            <td className="text-right py-3 px-2">1,040</td>
            <td className="text-right py-3 px-2">75.1</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-2">5</td>
            <td className="py-3 px-2">Llama-3.2-11B-VisionInstruct</td>
            <td className="text-right py-3 px-2">58.58</td>
            <td className="text-right py-3 px-2">750</td>
            <td className="text-right py-3 px-2">78.1</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-2">6</td>
            <td className="py-3 px-2">DeepSeek-V3-0324</td>
            <td className="text-right py-3 px-2">69.35</td>
            <td className="text-right py-3 px-2">1,200</td>
            <td className="text-right py-3 px-2">57.8</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
