import React from 'react'
import Box from '@mui/material/Box'
import { Typography, Dialog } from '@mui/material'
import LoginForm from '../../form'
import { FormModalProps } from './types'

export default function FormModal({
  showForm,
  handleShowForm,
  setCurrentUser,
}: FormModalProps) {
  return (
    <Dialog id="form-modal" data-testid="form-modal" open={showForm}>
      <Box
        sx={{
          width: 320,
          height: 385,
          bgcolor: '#6497b1',
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
          setCurrentUser={setCurrentUser}
          handleShowForm={handleShowForm}
        />
      </Box>
    </Dialog>
  )
}
