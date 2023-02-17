import React from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from '@material-ui/core'
import { ConfirmationModalProps } from './types'

export default function ConfirmationModal({
  title,
  content,
  showConfirmationModal,
  handleShowConfirmationModal,
  handleClearCache,
}: ConfirmationModalProps) {
  return (
    <Dialog open={showConfirmationModal}>
      <DialogContent>
        <Box
          sx={{
            lineHeight: 1.5,
            fontWeight: 'bold',
            fontSize: 14,
          }}
        >
          {title}
        </Box>
        <Box
          sx={{
            lineHeight: 2,
            fontSize: 14,
          }}
        >
          <div>{content}</div>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleShowConfirmationModal}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            handleShowConfirmationModal()
            handleClearCache()
          }}
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}
