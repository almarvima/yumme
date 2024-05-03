/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation } from '@tanstack/react-query'
import { postData } from '.'

/**
 * Custom hook for handling suggestions.
 * @returns An object containing the `addSuggestion` function.
 */
export const useSuggestions = () => {
  /**
   * Adds a suggestion.
   * @returns A mutation object with the `mutationKey` and `mutationFn` properties.
   */
  const addSuggestion = () => {
    return useMutation({
      mutationKey: ['addSuggestion'],
      mutationFn: async (suggestion) => postData('/public/suggestion', suggestion)
    })
  }
  return { addSuggestion }
}
