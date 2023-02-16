import { useMutation } from 'react-query'

const baseUrl = 'https://dummyjson.com/auth/login'

// function useLogin() {
//   const { login, error } = useMutation((credentials) =>
//     fetch(baseUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(credentials),
//     }).then((res) => {
//       if (!res.ok) {
//         throw new Error('Invalid username or password')
//       }
//       return res.json()
//     })
//   )

//   return { login, error }
// }

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
