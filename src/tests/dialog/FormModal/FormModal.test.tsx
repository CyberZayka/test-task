/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from '@testing-library/react'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import FormModal from '../../../components/common/dialog/FormModal/FormModal'

const queryClient = new QueryClient()

type FormModalProps = {
  showForm: boolean
  handleShowForm: () => void
  setCurrentUser: (value: { username: string; password: string }) => void
}

const props: FormModalProps = {
  showForm: true,
  handleShowForm: () => {},
  setCurrentUser: () => {},
}

describe('FormModal unit tests', () => {
  test('FormModal component renders properly', () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <FormModal {...props} />
      </QueryClientProvider>
    )

    const formModal = getByTestId('form-modal')

    expect(formModal).toBeInTheDocument()
  })

  test('FormModal component gets props properly', () => {
    const formProps = {
      showForm: false,
      handleShowForm: () => {},
      setCurrentUser: () => {},
    }
    render(
      <QueryClientProvider client={queryClient}>
        <FormModal {...formProps} />
      </QueryClientProvider>
    )

    const formModal = document.querySelector('#form-modal')
    expect(formModal).not.toBeInTheDocument()
  })
})
