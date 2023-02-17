import { ReactNode } from 'react'

export interface ConfirmationModalProps {
  title: string
  content: ReactNode
  showConfirmationModal: boolean
  handleShowConfirmationModal: () => void
  handleClearCache: () => void
}
