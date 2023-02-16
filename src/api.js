import { useMutation } from 'react-query'

const baseUrl = 'https://dummyjson.com/auth/login'

function useLogin() {
  const loginMutation = useMutation(async (credentials) => {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })

    if (!response.ok) {
      throw new Error('Invalid login or password')
    }

    return response.json()
  })

  const login = async (credentials) => {
    await loginMutation.mutateAsync(credentials)
  }

  return {
    login,
    isLoading: loginMutation.isLoading,
    error: loginMutation.error,
  }
}

export default useLogin
