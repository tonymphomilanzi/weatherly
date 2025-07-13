// src/hooks/useWeather.js
import { useEffect, useState } from 'react'
import axios from 'axios'
import { WEATHER_API_KEY, WEATHER_API_BASE } from '../config'

export default function useWeather(city = 'Blantyre') {
  const [loading, setLoading] = useState(true)
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [error, setError] = useState(null)

  const fetchWeather = async () => {
    try {
      setLoading(true)

      const res = await axios.get(`${WEATHER_API_BASE}/forecast.json`, {
        params: {
          key: WEATHER_API_KEY,
          q: city,
          days: 3,
          aqi: 'yes',
          alerts: 'no',
        },
      })

      // src/hooks/useWeather.js
setWeather(res.data.current)
setForecast({
  ...res.data.forecast,
  location: res.data.location, // ✅ add this
})

      setError(null)
    } catch (err) {
      console.error(err)
      setError('City not found or API error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWeather()
  }, [city])

  return { weather, forecast, loading, error }
}
