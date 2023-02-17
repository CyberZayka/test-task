/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from '@testing-library/react'
import React, { ReactNode } from 'react'
import ConfirmationModal from '../../../components/common/dialog/ConfirmationModal'

type ConfirmationModalProps = {
  title: string
  content: ReactNode
  showConfirmationModal: boolean
  handleShowConfirmationModal: () => void
  handleClearCache: () => void
}

const props: ConfirmationModalProps = {
  title: 'Log Out',
  content: 'Are you sure you want to log out?',
  showConfirmationModal: true,
  handleShowConfirmationModal: () => {},
  handleClearCache: () => {},
}

describe('ConfirmationModal unit tests', () => {
  test('ConfirmationModal component renders properly', () => {
    const { getByTestId } = render(<ConfirmationModal {...props} />)

    const confirmModal = getByTestId('confirmation-modal')

    expect(confirmModal).toBeInTheDocument()
  })

  test('Check log in/log out button', () => {
    const { getByTestId } = render(<ConfirmationModal {...props} />)

    const cancelBtn = getByTestId('cancel-button')
    const okBtn = getByTestId('ok-button')

    expect(cancelBtn).toHaveTextContent('Cancel')
    expect(okBtn).toHaveTextContent('OK')
  })
})
