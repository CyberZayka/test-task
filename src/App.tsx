import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import './App.css'
import Header from './Header'
import Menu from './Menu'
import menu from './mockData.json'
import AboutPage from './Pages/AboutPage'
import FirstServicePage from './Pages/FirstServicePage'
import FormPage from './Pages/FormPage'
import Home from './Pages/HomePage'
import SecondServicePage from './Pages/SecondServicePage'

function App() {
  return (
    <>
      <Header>
        <Menu data={menu.data} />
      </Header>
      <Router>
        <Routes>
          <Route
            // exact
            path="/services/first-service"
            element={<FirstServicePage />}
          />
          <Route
            // exact
            path="/services/second-service"
            element={<SecondServicePage />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
