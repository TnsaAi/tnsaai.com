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

interface BenchmarkChartProps {
  data: {
    name: string
    'NGen 3.5 Pro': number
    'NGen 3.9 Pro': number
    'NGen 3.5 Max': number
    'NGen 3.9 Max V3': number
    'Llama-3.2-11B-Vision-Instruct': number
    'Llama-3.3-70B-Instruct-FP8': number
    'Llama-4-Maverick-17B-128E-Instruct': number
    'DeepSeek-V3-0324': number
  }[]
}

export default function BenchmarkChart({ data }: BenchmarkChartProps) {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
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
