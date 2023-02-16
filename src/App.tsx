import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import { styled } from '@mui/material'
import AppRoutes from './AppRoutes'
import Header from './Header'
import Menu from './Menu'
import menu from './mockData.json'

const AppBox = styled('div')({
  display: 'flex',
})

function App() {
  return (
    <Router>
      <Header>Hello</Header>
      <AppBox>
        <Menu data={menu.data} />
        <AppRoutes />
      </AppBox>
    </Router>
  )
}

export default App
