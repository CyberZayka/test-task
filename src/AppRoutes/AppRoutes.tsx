import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import AboutPage from '../Pages/AboutPage'
import FirstServicePage from '../Pages/FirstServicePage'
import Home from '../Pages/HomePage'
import SecondServicePage from '../Pages/SecondServicePage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/services/first-service" element={<FirstServicePage />} />
      <Route path="/services/nested-service" element={<SecondServicePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="*" element={<p>Not found!</p>} />
    </Routes>
  )
}
