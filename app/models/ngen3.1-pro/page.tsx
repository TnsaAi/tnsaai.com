'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function NGen31ProPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">October 2025</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>NGen 3.1 Pro Multimodal</h1>
        </div>

        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-efren-ftz-365656346-14433444.jpg"
            alt="NGen 3.1 Pro"
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
              NGen 3.1 Pro represents a quantum leap in artificial intelligence, combining cutting-edge multimodal capabilities with unprecedented reasoning power. Built on advanced transformer architecture with specialized multimodal fusion layers, NGen 3.1 Pro seamlessly processes and understands both textual and visual information.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Model Performance Benchmarks.</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse text-gray-900">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-3 px-2 font-semibold">Benchmark</th>
                    <th className="text-right py-3 px-2 font-semibold">NGen3.1-Pro</th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-500">GPT-4o</th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-500">Claude 3.5</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" colSpan={4}>College-level Problems</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 pl-6">MMMU</td>
                    <td className="text-right py-3 px-2 font-semibold">57.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">70.3</td>
                    <td className="text-right py-3 px-2 text-gray-500">70.4</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 pl-6">MMMU Pro</td>
                    <td className="text-right py-3 px-2 font-semibold">34.6</td>
                    <td className="text-right py-3 px-2 text-gray-500">54.5</td>
                    <td className="text-right py-3 px-2 text-gray-500">54.7</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" colSpan={4}>Document and Diagrams Reading</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 pl-6">DocVQA</td>
                    <td className="text-right py-3 px-2 font-semibold">95.0</td>
                    <td className="text-right py-3 px-2 text-gray-500">91.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">95.2</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 pl-6">InfoVQA</td>
                    <td className="text-right py-3 px-2 font-semibold">80.7</td>
                    <td className="text-right py-3 px-2 text-gray-500">80.7</td>
                    <td className="text-right py-3 px-2 text-gray-500">74.3</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 pl-6">OCRBench V2</td>
                    <td className="text-right py-3 px-2 font-semibold">58.3</td>
                    <td className="text-right py-3 px-2 text-gray-500">46.5</td>
                    <td className="text-right py-3 px-2 text-gray-500">45.2</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" colSpan={4}>General Visual Question Answering</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 pl-6">MMStar</td>
                    <td className="text-right py-3 px-2 font-semibold">57.6</td>
                    <td className="text-right py-3 px-2 text-gray-500">64.7</td>
                    <td className="text-right py-3 px-2 text-gray-500">65.1</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 pl-6">MMBench 1.1</td>
                    <td className="text-right py-3 px-2 font-semibold">71.6</td>
                    <td className="text-right py-3 px-2 text-gray-500">82.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">83.4</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" colSpan={4}>Math</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 pl-6">MathVista</td>
                    <td className="text-right py-3 px-2 font-semibold">68.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">63.8</td>
                    <td className="text-right py-3 px-2 text-gray-500">65.4</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 pl-6">MathVision</td>
                    <td className="text-right py-3 px-2 font-semibold">20.6</td>
                    <td className="text-right py-3 px-2 text-gray-500">30.4</td>
                    <td className="text-right py-3 px-2 text-gray-500">38.3</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" colSpan={4}>Video Understanding</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 pl-6">VideoMME</td>
                    <td className="text-right py-3 px-2 font-semibold">71.8</td>
                    <td className="text-right py-3 px-2 text-gray-500">71.9</td>
                    <td className="text-right py-3 px-2 text-gray-500">60.0</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 pl-6">LVBench</td>
                    <td className="text-right py-3 px-2 font-semibold">63.9</td>
                    <td className="text-right py-3 px-2 text-gray-500">30.8</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" colSpan={4}>Visual Agent</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 pl-6">AITZ</td>
                    <td className="text-right py-3 px-2 font-semibold">84.4</td>
                    <td className="text-right py-3 px-2 text-gray-500">35.3</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 pl-6">ScreenSpot</td>
                    <td className="text-right py-3 px-2 font-semibold">65.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">18.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">83.0</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 pl-6">ScreenSpot Pro</td>
                    <td className="text-right py-3 px-2 font-semibold">43.9</td>
                    <td className="text-right py-3 px-2 text-gray-500">17.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Average Performance by Category.</h2>
            <div className="space-y-8">
              <div className="flex gap-2 text-xs mb-4">
                <div className="flex items-center gap-2"><div className="w-4 h-4 bg-blue-600"></div><span>NGen3.1-Pro</span></div>
                <div className="flex items-center gap-2"><div className="w-4 h-4 bg-gray-400"></div><span>GPT-4o</span></div>
                <div className="flex items-center gap-2"><div className="w-4 h-4 bg-gray-300"></div><span>Claude 3.5</span></div>
                <div className="flex items-center gap-2"><div className="w-4 h-4 bg-gray-200"></div><span>Gemini-2 Flash</span></div>
              </div>
              
              <div>
                <div className="text-sm font-medium mb-2">College-level Problems</div>
                <div className="flex gap-1 items-end h-32">
                  <div className="flex-1 bg-blue-600 rounded-t" style={{height: '47%'}}><span className="text-xs text-white p-1">47</span></div>
                  <div className="flex-1 bg-gray-400 rounded-t" style={{height: '62%'}}><span className="text-xs text-white p-1">62</span></div>
                  <div className="flex-1 bg-gray-300 rounded-t" style={{height: '62%'}}><span className="text-xs text-white p-1">62</span></div>
                  <div className="flex-1 bg-gray-200 rounded-t" style={{height: '63%'}}><span className="text-xs p-1">63</span></div>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium mb-2">Document and Diagrams Reading</div>
                <div className="flex gap-1 items-end h-32">
                  <div className="flex-1 bg-blue-600 rounded-t" style={{height: '81%'}}><span className="text-xs text-white p-1">81</span></div>
                  <div className="flex-1 bg-gray-400 rounded-t" style={{height: '76%'}}><span className="text-xs text-white p-1">76</span></div>
                  <div className="flex-1 bg-gray-300 rounded-t" style={{height: '72%'}}><span className="text-xs text-white p-1">72</span></div>
                  <div className="flex-1 bg-gray-200 rounded-t" style={{height: '79%'}}><span className="text-xs p-1">79</span></div>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium mb-2">General Visual Question Answering</div>
                <div className="flex gap-1 items-end h-32">
                  <div className="flex-1 bg-blue-600 rounded-t" style={{height: '54%'}}><span className="text-xs text-white p-1">54</span></div>
                  <div className="flex-1 bg-gray-400 rounded-t" style={{height: '67%'}}><span className="text-xs text-white p-1">67</span></div>
                  <div className="flex-1 bg-gray-300 rounded-t" style={{height: '67%'}}><span className="text-xs text-white p-1">67</span></div>
                  <div className="flex-1 bg-gray-200 rounded-t" style={{height: '69%'}}><span className="text-xs p-1">69</span></div>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium mb-2">Math</div>
                <div className="flex gap-1 items-end h-32">
                  <div className="flex-1 bg-blue-600 rounded-t" style={{height: '52%'}}><span className="text-xs text-white p-1">52</span></div>
                  <div className="flex-1 bg-gray-400 rounded-t" style={{height: '53%'}}><span className="text-xs text-white p-1">53</span></div>
                  <div className="flex-1 bg-gray-300 rounded-t" style={{height: '55%'}}><span className="text-xs text-white p-1">55</span></div>
                  <div className="flex-1 bg-gray-200 rounded-t" style={{height: '57%'}}><span className="text-xs p-1">57</span></div>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium mb-2">Video Understanding</div>
                <div className="flex gap-1 items-end h-32">
                  <div className="flex-1 bg-blue-600 rounded-t" style={{height: '43%'}}><span className="text-xs text-white p-1">43</span></div>
                  <div className="flex-1 bg-gray-400 rounded-t" style={{height: '31%'}}><span className="text-xs text-white p-1">31</span></div>
                  <div className="flex-1 bg-gray-300 rounded-t" style={{height: '34%'}}><span className="text-xs text-white p-1">34</span></div>
                  <div className="flex-1 bg-gray-200 rounded-t" style={{height: '10%'}}><span className="text-xs p-1">—</span></div>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium mb-2">Visual Agent</div>
                <div className="flex gap-1 items-end h-32">
                  <div className="flex-1 bg-blue-600 rounded-t" style={{height: '65%'}}><span className="text-xs text-white p-1">65</span></div>
                  <div className="flex-1 bg-gray-400 rounded-t" style={{height: '83%'}}><span className="text-xs text-white p-1">83</span></div>
                  <div className="flex-1 bg-gray-300 rounded-t" style={{height: '9%'}}><span className="text-xs text-white p-1">9</span></div>
                  <div className="flex-1 bg-gray-200 rounded-t" style={{height: '44%'}}><span className="text-xs p-1">44</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Key Capabilities.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>True multimodal understanding with text and image processing</li>
              <li>Advanced document intelligence and OCR capabilities</li>
              <li>Superior performance in visual agent tasks</li>
              <li>Video understanding and analysis</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Pricing.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              ₹0.42 input / ₹0.58 output + ₹1.66/image per 1K tokens
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
