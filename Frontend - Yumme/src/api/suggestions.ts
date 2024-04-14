/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation } from '@tanstack/react-query'
import { postData } from '.'

export const useSuggestions = () => {
  const addSuggestion = () => {
    return useMutation({
      mutationKey: ['addSuggestion'],
      mutationFn: async (suggestion) => postData('/public/suggestion', suggestion)
    })
  }
  return { addSuggestion }
}
