import {
  Droplets,
  MapPin,
  Sun,
  Moon,
  Volume2,
  VolumeX
} from 'lucide-react'
import { useState, useEffect } from 'react'

export default function WeatherCard({ weather, forecast }) {
  const [voiceEnabled, setVoiceEnabled] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const today = forecast?.forecastday?.[0]
  const greeting = getGreeting()

  useEffect(() => {
    const selectedVoiceName = localStorage.getItem('selectedVoice')

    if (voiceEnabled && weather && forecast && today) {
      const msg = new SpeechSynthesisUtterance(
        `${greeting}! It’s ${Math.round(weather.temp_c)} degrees Celsius in ${forecast.location.name}. 
        ${weather.condition.text}. Humidity is ${weather.humidity} percent. 
        Sunrise at ${today.astro.sunrise}, sunset at ${today.astro.sunset}.`
      )

      const voices = window.speechSynthesis.getVoices()
      const voice = voices.find((v) => v.name === selectedVoiceName)
      if (voice) msg.voice = voice

      msg.onend = () => {
        setShowToast(true)
        setTimeout(() => setShowToast(false), 3000)
        setVoiceEnabled(false)
      }

      window.speechSynthesis.cancel()
      window.speechSynthesis.speak(msg)
    }

    if (!voiceEnabled) {
      window.speechSynthesis.cancel()
    }
  }, [voiceEnabled, weather, forecast, today, greeting])

  return (
    <>
      <div className="glass p-6 h-full -mt-3 relative">
        <div className="flex flex-col justify-between gap-4">
          {/* Greeting + Voice Toggle */}
          <div className="flex font-semibold items-center justify-between text-sm text-gray-400 dark:text-white">
            <span>{greeting}</span>
            <button
              onClick={() => setVoiceEnabled(!voiceEnabled)}
              title={voiceEnabled ? 'Stop Voice' : 'Read Aloud'}
              className={`text-gray-300 hover:text-white transition ${
                voiceEnabled ? 'animate-wiggle' : ''
              }`}
            >
              {voiceEnabled ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
          </div>

          {/* Main Temp + Condition */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-6xl font-bold leading-none">
                {Math.round(weather.temp_c)}°C
              </div>
              <div className="text-sm text-gray-400 dark:text-gray-300">
                {today?.date} – {weather.condition.text}
              </div>
            </div>
            <img
              src={`https:${weather.condition.icon}`}
              alt="condition icon"
              className="w-14 h-14"
            />
          </div>

          {/* Sunrise & Sunset */}
          <div className="flex justify-between text-sm text-gray-400 border-y border-white/10 py-2">
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4 text-yellow-400" />
              <span>Sunrise: {today?.astro.sunrise}</span>
            </div>
            <div className="flex items-center gap-2">
              <Moon className="w-4 h-4 text-indigo-400" />
              <span>Sunset: {today?.astro.sunset}</span>
            </div>
          </div>

          {/* Humidity */}
          <div className="flex items-center gap-2 capitalize text-gray-300">
            <Droplets className="w-5 h-5 text-blue-500" />
            <span>Humidity: {weather.humidity}%</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <MapPin className="w-4 h-4" />
            <span>
              {forecast.location?.name}, {forecast.location?.country}
            </span>
          </div>
        </div>

        {/* Toast */}
        {showToast && (
          <div className="absolute bottom-4 items-center bg-green-600 text-white px-4 py-2 rounded shadow-lg animate-fade-in z-50">
            Weather update complete.
          </div>
        )}
      </div>
    </>
  )
}

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
}
