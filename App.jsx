import React, { useState } from 'react'
import { transactions as initialData } from './data'
import Dashboard from './components/Dashboard'
import Transactions from './components/Transactions'

export default function App() {
  const [role, setRole] = useState('viewer')
  const [data, setData] = useState(initialData)

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Finance Dashboard</h1>

      <label>Role: </label>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>

      <Dashboard data={data} />
      <Transactions data={data} role={role} setData={setData} />
    </div>
  )
}
