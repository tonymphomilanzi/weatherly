import {
  Wind,
  Droplets,
  Sun,
  Gauge,
  Activity,
  CloudSun
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function HighlightsGrid({ weather }) {
  const highlights = [
    { title: 'Wind', icon: <Wind className="w-5 h-5" />, value: `${weather.wind_kph} km/h` },
    { title: 'Humidity', icon: <Droplets className="w-5 h-5" />, value: `${weather.humidity}%` },
    { title: 'UV Index', icon: <Sun className="w-5 h-5" />, value: weather.uv },
    { title: 'Pressure', icon: <Gauge className="w-5 h-5" />, value: `${weather.pressure_mb} mb` },
    { title: 'Feels Like', icon: <CloudSun className="w-5 h-5" />, value: `${weather.feelslike_c}°C` },
    { title: 'Air Quality', icon: <Activity className="w-5 h-5" />, value: weather.air_quality?.pm2_5?.toFixed(1) || 'N/A' },
  ]

  return (
    <div className="glass grid grid-cols-2 md:grid-cols-3 gap-4 p-4 text-sm">
      {highlights.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: i * 0.1,
            type: 'spring',
            stiffness: 80,
          }}
        >
          <Highlight title={item.title} icon={item.icon} value={item.value} />
        </motion.div>
      ))}
    </div>
  )
}

function Highlight({ title, icon, value }) {
  return (
    <div className="p-4 rounded-md bg-white/5 flex flex-col items-start space-y-2">
      <div className="flex items-center gap-2 text-xs text-gray-400">
        {icon} {title}
      </div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  )
}
