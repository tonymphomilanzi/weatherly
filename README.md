Weatherly is a modern weather app built with React and TailwindCSS that beautifully blends design, voice interaction, and weather data. It leverages real-time weather info via Weather API and features glassmorphism UI, and even a voice-readout system that reads the weather aloud in a friendly tone.

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwind-css&logoColor=white&style=for-the-badge)

## Features
-- Search any city for up-to-date weather

-- Voice Assistant: Reads weather aloud with toggle and voice selector

-- Sunrise & Sunset display

-- Humidity, Wind, UV, Air Quality, and other highlights

-- 3-day Forecast with animations

-- Responsive & Mobile-first Design

-- Glassmorphism aesthetic with ambient galaxy background

-- Settings Panel to control auto-read & voice

## What I Learned
-- React hooks mastery: useState, useEffect, and custom hooks like useWeather

-- Prop drilling and state lifting: How to manage data in the parent component and pass it down

-- TailwindCSS advanced styling, including animations and responsiveness

-- Web Speech API for text-to-speech with voice selection

-- Dark/Light Mode Theming with document.documentElement.classList

-- Building modular, reusable UI components

-- Using LocalStorage for saving user preferences

##Getting Started

1. Clone the repo
git clone https://github.com/tonymphomilanzi/weatherly.git

cd weatherly
2. Install dependencies
npm install


3. Add your API key
Create a .env file and add:


VITE_WEATHER_API_KEY=your_api_key_here
Get your free key from WeatherAPI.com

4. Run the dev server
bash
Copy
Edit
npm run dev

## Project Structure

src/
├── components/
│   ├── Navbar.jsx
│   ├── WeatherCard.jsx
│   ├── ForecastGrid.jsx
│   ├── HighlightsGrid.jsx
│   └── LocationSearch.jsx
├── hooks/
│   └── useWeather.js
├── styles/
│   └── glass.css
├── App.jsx
└── main.jsx


 ## Deliverables

-- Full working React app with API integration

-- Voice interaction system (SpeechSynthesis)

-- Glassmorphism UI

-- Clean, reusable codebase

-- LocalStorage-powered settings

-- Fully responsive design

 ## Future Improvements

-- Multi-language support

-- Weather alerts or notifications

-- Location auto-detection via geolocation

-- Graph view for forecast trends

## License
This project is licensed under the MIT License.
