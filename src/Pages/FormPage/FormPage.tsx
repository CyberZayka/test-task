import React from 'react'
import Box from '@mui/material/Box'
import { styled } from '@mui/system'
import { Typography } from '@mui/material'
import LoginForm from '../../LoginForm'

const BoxWrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export default function FormPage() {
  return (
    <BoxWrapper>
      <Box
        sx={{
          width: 550,
          height: 350,
          bgcolor: '#36393f',
          borderRadius: '5px',
          boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
          display: 'flex',
          flexDirection: 'column',
          padding: '25px',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: 'white',
          }}
        >
          Sign In
        </Typography>
        <LoginForm />
      </Box>
    </BoxWrapper>
  )
}
