export type CurrentUser = {
  username: string
  password: string
}

export interface LoginFormProps {
  handleShowForm: () => void
  setCurrentUser: (value: CurrentUser) => void
}
