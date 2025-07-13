// src/components/LocationSearch.jsx
import { useState } from 'react'
import { Search } from 'lucide-react'

export default function LocationSearch({ onSearch }) {
  const [city, setCity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.trim()) onSearch(city.trim())
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center sm:grid-cols-5 gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 w-full max-w-sm glass"
    >
      <Search className="w-5 h-5 text-white opacity-70" />
      <input
        type="text"
        placeholder="Search city..."
        className="bg-transparent outline-none text-white w-full placeholder:text-white/60"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </form>
  )
}
