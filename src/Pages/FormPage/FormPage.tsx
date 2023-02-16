import React, { useState } from 'react'
import Box from '@mui/material/Box'
import { styled } from '@mui/system'
import { Typography } from '@mui/material'
import LoginForm from '../../components/LoginForm'

const BoxWrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const Text = styled('span')({
  display: 'block',
  fontSize: '14px',
  color: 'blue',
  fontWeight: 400,
  textDecoration: 'underline',
  cursor: 'pointer',
})

export default function FormPage() {
  const [isShownModal, setIsShownModal] = useState(true)
  const [canceled, setCanceled] = useState(false)

  return (
    <BoxWrapper>
      {!isShownModal && !canceled ? (
        <h2>User logged in successfully!</h2>
      ) : (
        isShownModal &&
        !canceled && (
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
            <LoginForm
              setIsShownModal={setIsShownModal}
              setCanceled={setCanceled}
            />
          </Box>
        )
      )}
      {!isShownModal && canceled && (
        <Text
          onClick={() => {
            setCanceled(false)
            setIsShownModal(true)
          }}
        >
          Sign In...
        </Text>
      )}
    </BoxWrapper>
  )
}
