// components/SettingsPanel.jsx
import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

export default function SettingsPanel({ open, onClose }) {
  const [autoRead, setAutoRead] = useState(false)
  const [voices, setVoices] = useState([])
  const [selectedVoice, setSelectedVoice] = useState('')

  useEffect(() => {
    const savedRead = localStorage.getItem('autoRead') === 'true'
    const savedVoice = localStorage.getItem('selectedVoice')
    setAutoRead(savedRead)
    setSelectedVoice(savedVoice || '')
  }, [])

  useEffect(() => {
    const voiceList = speechSynthesis.getVoices()
    if (voiceList.length > 0) {
      setVoices(voiceList)
    } else {
      speechSynthesis.onvoiceschanged = () => {
        setVoices(speechSynthesis.getVoices())
      }
    }
  }, [])

  const handleSave = () => {
    localStorage.setItem('autoRead', autoRead)
    localStorage.setItem('selectedVoice', selectedVoice)
    onClose()
  }

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={onClose} />
      )}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white dark:bg-[#1a1a1a] z-50 p-6 shadow-xl transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Settings</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-500 hover:text-red-500" />
          </button>
        </div>

        <div className="space-y-4 text-sm">
          <div className="flex items-center justify-between">
            <span>Read Aloud on Load</span>
            <input
              type="checkbox"
              checked={autoRead}
              onChange={(e) => setAutoRead(e.target.checked)}
              className="accent-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1">Select Voice</label>
            <select
              value={selectedVoice}
              onChange={(e) => setSelectedVoice(e.target.value)}
              className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800 dark:text-white"
            >
              {voices.map((voice, idx) => (
                <option key={idx} value={voice.name}>
                  {voice.name} ({voice.lang})
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleSave}
            className="mt-4 w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600 transition"
          >
            Save Settings
          </button>
        </div>
      </div>
    </>
  )
}
