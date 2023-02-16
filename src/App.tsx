import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import { styled } from '@mui/material'
import AppRoutes from './AppRoutes'
import Header from './components/Header'
import Menu from './components/Menu'
import menu from './mockData.json'

const AppBox = styled('div')({
  display: 'flex',
})

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header>Hello</Header>
        <AppBox>
          <Menu data={menu.data} />
          <AppRoutes />
        </AppBox>
      </Router>
    </QueryClientProvider>
  )
}

export default App
