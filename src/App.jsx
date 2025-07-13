// src/App.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import WeatherCard from './components/WeatherCard'
import HighlightsGrid from './components/HighlightsGrid'
import ForecastGrid from './components/ForecastGrid'
import useWeather from './hooks/useWeather'
import './styles/glass.css'

export default function App() {
  const [city, setCity] = useState('New York')
  const { weather, forecast, loading, error } = useWeather(city)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="min-h-screen w-full dark:from-[#1f1f2f] dark:to-[#12121a] transition-all duration-300 text-gray-900 dark:text-white">
        <Navbar setCity={setCity} />
        
        <div className="flex justify-center mt-4"></div>

        <main className="p-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-6 mt-6">
          <div className="md:col-span-1">
            {loading ? (
              <div className="glass p-4 text-center">Loading weather...</div>
            ) : error ? (
              <div className="glass p-4 text-red-500 text-center">{error}</div>
            ) : (
              <WeatherCard weather={weather} forecast={forecast} />
            )}
          </div>

          <div className="md:col-span-2 grid gap-6">
            {!loading && !error && (
              <>
                <ForecastGrid forecast={forecast} />
                <HighlightsGrid weather={weather} />
              </>
            )}
          </div>
        </main>
      </div>
    </motion.div>
  )
}
