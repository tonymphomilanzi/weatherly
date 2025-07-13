import { Settings2 } from 'lucide-react'
import { useState } from 'react'
import LocationSearch from '../components/LocationSearch'
import SettingsPanel from './SettingsPanel'

export default function Navbar({ setCity }) {
  const [showSettings, setShowSettings] = useState(false)

  return (
    <>
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 py-4 gap-4">
        <h1 className="text-2xl font-semibold">&nbsp;Weatherly</h1>
        <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto">
          <LocationSearch onSearch={setCity} />
          <button
            onClick={() => setShowSettings(true)}
            className="ml-2 md:ml-4"
            title="Settings"
          >
            <Settings2 className="w-5 h-5 text-gray-500 hover:text-white transition" />
          </button>
        </div>
      </header>

      <SettingsPanel open={showSettings} onClose={() => setShowSettings(false)} />
    </>
  )
}
