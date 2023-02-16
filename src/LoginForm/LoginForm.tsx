/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { styled } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import validationSchema from '../_utils/validationSchema.js'

const StyledForm = styled(Form)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '30px',
  height: '100%',
})

const StyledErrorMessage = styled(ErrorMessage)({
  color: 'red',
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

function LoginForm() {
  const handleSubmit = (values: any, { setSubmitting, resetForm }: any) => {
    const fakeEndpoint = 'https://example.com/login'
    // Do something with the form data, e.g. send it to a server
    console.log(values)
    // Reset the form after submitting
    resetForm()
    // Set submitting to false to enable the submit button again
    setSubmitting(false)
  }

  const handleCancel = () => {
    // Do something to go back to previous menu
  }

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <WrapperInput>
            <Field name="username">
              {({ field }: any) => (
                <>
                  <CustomInput {...field} type="text" placeholder="Username" />
                  <StyledErrorMessage
                    name="username"
                    component="div"
                    className="error"
                  />
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
                  <StyledErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                </>
              )}
            </Field>
          </WrapperInput>
          <ButtonWrapper>
            <StyledButtonSubmit type="submit" disabled={isSubmitting}>
              Submit
            </StyledButtonSubmit>
            <StyledButtonClose type="button" onClick={handleCancel}>
              Cancel
            </StyledButtonClose>
          </ButtonWrapper>
        </StyledForm>
      )}
    </Formik>
  )
}

export default LoginForm
