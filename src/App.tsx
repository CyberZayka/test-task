import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import { styled } from '@mui/material'
import AppRoutes from './components/routes'
import Menu from './components/common/menu'
import menu from './mockData.json'
import NavigationBar from './layouts/NavigationBar'

const AppBox = styled('div')({
  display: 'flex',
})

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <NavigationBar />
        <AppBox>
          <Menu data={menu.data} />
          <AppRoutes />
        </AppBox>
      </Router>
    </QueryClientProvider>
  )
}

export default App
