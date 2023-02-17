export interface FormModalProps {
  showForm: boolean
  handleShowForm: () => void
  setCurrentUser: (value: { username: string; password: string }) => void
}
