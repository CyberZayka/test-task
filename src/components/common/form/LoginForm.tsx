/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { styled } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import validationSchema from '../../../_utils/validationSchema.js'
import useLogin from '../../../api/api.js'
import { CurrentUser, LoginFormProps } from './types.js'
import storage from '../../../_utils/storage.js'

const StyledForm = styled(Form)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '30px',
  height: '100%',
})

const StyledButton = styled(Button)({
  margin: '16px 10px 0',
  color: 'white',
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 500,
  width: '100%',
  height: '40px',
})

const StyledButtonSubmit = styled(StyledButton)({
  backgroundColor: '#5865F2',
})

const StyledButtonClose = styled(StyledButton)({
  backgroundColor: 'red',
})

const ButtonWrapper = styled('div')({
  display: 'flex',
})

const CustomInput = styled('input')({
  width: '100%',
  height: '18px',
  padding: '12px 0',
  marginBottom: '16px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#f2f2f2',
})

const WrapperInput = styled('div')({
  width: '100%',
})

function LoginForm({ handleShowForm, setCurrentUser }: LoginFormProps) {
  const { login, error } = useLogin()
  const [errorMessage, setErrorMessage] = useState<string | null | Error>(null)

  const handleSubmit = async (
    values: CurrentUser,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      await login(values)
      storage.setToken('here_will_be_a_token')
      setCurrentUser(values)

      resetForm()
      handleShowForm()
    } catch (err) {
      if (err instanceof Error) {
        setErrorMessage(err)
      }
    }
  }

  const handleCancel = () => {
    handleShowForm()
  }

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnChange
      validateOnBlur
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <WrapperInput>
            <Field name="username">
              {({ field }: any) => (
                <>
                  <CustomInput {...field} type="text" placeholder="Username" />
                  <ErrorMessage name="username" />
                </>
              )}
            </Field>
            <Field name="password">
              {({ field }: any) => (
                <>
                  <CustomInput
                    {...field}
                    type="password"
                    placeholder="Password"
                  />
                  <ErrorMessage name="password" />
                </>
              )}
            </Field>
          </WrapperInput>
          {errorMessage && (
            <p style={{ color: 'red' }}>{`${errorMessage}. Try again`}</p>
          )}
          <ButtonWrapper>
            <>
              <StyledButtonSubmit type="submit" disabled={isSubmitting}>
                Submit
              </StyledButtonSubmit>
              <StyledButtonClose type="button" onClick={handleCancel}>
                Cancel
              </StyledButtonClose>
            </>
          </ButtonWrapper>
        </StyledForm>
      )}
    </Formik>
  )
}

export default LoginForm
