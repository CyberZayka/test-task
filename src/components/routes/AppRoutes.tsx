import { Home } from '@material-ui/icons'
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import AboutPage from '../../pages/AboutPage'
import FirstServicePage from '../../pages/FirstServicePage'
import SecondServicePage from '../../pages/SecondServicePage'

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
