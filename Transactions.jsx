import React, { useState } from 'react'

export default function Transactions({ data, role, setData }) {
  const [filter, setFilter] = useState('')

  const filtered = data.filter(d => d.category.toLowerCase().includes(filter.toLowerCase()))

  const addTransaction = () => {
    const newTx = {
      id: Date.now(),
      date: '2026-04-01',
      amount: 1000,
      category: 'Misc',
      type: 'expense'
    }
    setData([...data, newTx])
  }

  return (
    <div>
      <h2>Transactions</h2>

      <input
        placeholder="Search category"
        onChange={(e) => setFilter(e.target.value)}
      />

      {role === 'admin' && <button onClick={addTransaction}>Add</button>}

      <ul>
        {filtered.map(tx => (
          <li key={tx.id}>
            {tx.date} | {tx.category} | ₹{tx.amount} | {tx.type}
          </li>
        ))}
      </ul>
    </div>
  )
}
