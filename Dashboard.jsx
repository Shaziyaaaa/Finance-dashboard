import React from 'react'
import { PieChart, Pie, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'

export default function Dashboard({ data }) {
  const income = data.filter(d => d.type === 'income').reduce((a, b) => a + b.amount, 0)
  const expense = data.filter(d => d.type === 'expense').reduce((a, b) => a + b.amount, 0)

  const categoryData = Object.values(
    data.reduce((acc, curr) => {
      acc[curr.category] = acc[curr.category] || { name: curr.category, value: 0 }
      acc[curr.category].value += curr.amount
      return acc
    }, {})
  )

  return (
    <div>
      <h2>Overview</h2>
      <p>Income: ₹{income}</p>
      <p>Expense: ₹{expense}</p>

      <PieChart width={300} height={300}>
        <Pie data={categoryData} dataKey="value" nameKey="name" />
        <Tooltip />
      </PieChart>

      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line dataKey="amount" />
      </LineChart>
    </div>
  )
}
