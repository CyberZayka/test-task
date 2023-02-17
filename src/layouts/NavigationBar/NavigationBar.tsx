import React, { useState, useEffect } from 'react'
import FormPage from '../../components/common/dialog/FormModal/FormModal'
import storage from '../../_utils/storage.js'
import ConfirmationModal from '../../components/common/dialog/ConfirmationModal'
import Header from '../Header/Header'

type CurrentUserProps = {
  username: string
  password: string
}

export default function NavigationBar() {
  const [currentUser, setCurrentUser] = useState<CurrentUserProps | null>(null)
  const [showForm, setShowForm] = useState<boolean>(false)
  const [token, setToken] = useState<null | string>(null)
  const [headerText, setHeaderText] = useState<string>('Hello, stranger...')
  const [showConfirmationModal, setShowConfirmationModal] =
    useState<boolean>(false)

  useEffect(() => {
    if (token) {
      setHeaderText('Welcome Back!')
    } else {
      setHeaderText('Hello, stranger...')
    }
  }, [token, setToken])

  useEffect(() => {
    setToken(storage.getToken())
  }, [token, currentUser])

  const handleShowForm = () => {
    setShowForm((prev) => !prev)
  }

  const handleShowConfirmationModal = () => {
    setShowConfirmationModal((prev) => !prev)
  }

  const handleClearCache = () => {
    storage.clearToken()
    setToken(null)
  }

  return (
    <div>
      <Header
        token={token}
        handleShowForm={handleShowForm}
        headerText={headerText}
        handleShowConfirmationModal={handleShowConfirmationModal}
      />
      <FormPage
        showForm={showForm}
        setCurrentUser={setCurrentUser}
        handleShowForm={handleShowForm}
      />
      <ConfirmationModal
        handleShowConfirmationModal={handleShowConfirmationModal}
        showConfirmationModal={showConfirmationModal}
        handleClearCache={handleClearCache}
        title="Log Out"
        content="Are you sure you want to log out?"
      />
    </div>
  )
}
