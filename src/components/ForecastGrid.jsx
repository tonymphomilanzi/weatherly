import { motion } from 'framer-motion'

export default function ForecastGrid({ forecast }) {
  const days = forecast?.forecastday || []

  return (
    <div className="space-y-4 mt-4 lg:-mt-12">
      <h2 className="font-semibold text-sm text-gray-400 dark:text-white">
        What’s the weather like for the next 3 days?
      </h2>

      <div className="glass grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-4 text-center">
        {days.map((day, i) => {
          const date = new Date(day.date)
          const weekday = date.toLocaleDateString(undefined, { weekday: 'short' })

          return (
            <motion.div
              key={i}
              className="flex flex-col items-center justify-center p-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1, type: 'spring' }}
            >
              <span className="text-sm text-gray-500">{weekday}</span>
              <motion.img
                src={day.day.condition.icon}
                alt={day.day.condition.text}
                className="w-10 h-10 my-2"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
              />
              <span className="text-lg font-bold">
                {Math.round(day.day.avgtemp_c)}°C
              </span>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
