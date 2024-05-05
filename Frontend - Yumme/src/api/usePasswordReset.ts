/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation } from '@tanstack/react-query'
import { putData } from './index'

/**
 * Custom hook for handling password reset.
 * @returns An object containing the `resetPassword` function.
 */
export const usePasswordReset = () => {
  /**
   * Resets a user's password.
   * It sends a PUT request to the server.
   * @returns A mutation object with the `mutationKey` and `mutationFn` properties.
   */
  const resetPassword = () => {
    return useMutation({
      mutationKey: ['resetPassword'],
      mutationFn: async (userData: { password: string }) => await putData(`/auth/password`, userData)
    })
  }

  return { resetPassword }
}
