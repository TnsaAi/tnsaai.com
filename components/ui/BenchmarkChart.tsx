'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const benchmarkData = [
  {
    name: 'MMLU-Pro',
    'NGen 3.9 Pro': 77.2,
    'NGen 3.9 Max V3': 81.8,
    'NGen 3.5 Pro': 73.4,
    'NGen 3.5 Max': 75.8,
    'Llama-3.2-11B-Vision-Instruct': 0,
    'Llama-3.3-70B-Instruct-FP8': 68.9,
    'Llama-4-Maverick-17B-128E-Instruct': 59.6,
    'DeepSeek-V3-0324': 81.2,
  },
  {
    name: 'GPQA',
    'NGen 3.9 Pro': 63.1,
    'NGen 3.9 Max V3': 73.8,
    'NGen 3.5 Pro': 61.4,
    'NGen 3.5 Max': 71.2,
    'Llama-3.2-11B-Vision-Instruct': 26.0,
    'Llama-3.3-70B-Instruct-FP8': 0,
    'Llama-4-Maverick-17B-128E-Instruct': 0,
    'DeepSeek-V3-0324': 68.4,
  },
  {
    name: 'AIME25',
    'NGen 3.9 Pro': 72.6,
    'NGen 3.9 Max V3': 88.3,
    'NGen 3.5 Pro': 71.6,
    'NGen 3.5 Max': 89.1,
  },
  {
    name: 'LiveCodeBench v6',
    'NGen 3.9 Pro': 54.4,
    'NGen 3.9 Max V3': 61.2,
    'NGen 3.5 Pro': 55.6,
    'NGen 3.5 Max': 62.5,
  },
]

export default function BenchmarkChart() {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          data={benchmarkData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="NGen 3.9 Pro" fill="#8884d8" />
          <Bar dataKey="NGen 3.9 Max V3" fill="#82ca9d" />
          <Bar dataKey="NGen 3.5 Pro" fill="#ffc658" />
          <Bar dataKey="NGen 3.5 Max" fill="#FF8042" />
          <Bar dataKey="Llama-3.2-11B-Vision-Instruct" fill="#0088FE" />
          <Bar dataKey="Llama-3.3-70B-Instruct-FP8" fill="#00C49F" />
          <Bar dataKey="Llama-4-Maverick-17B-128E-Instruct" fill="#FFBB28" />
          <Bar dataKey="DeepSeek-V3-0324" fill="#FF8042" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
