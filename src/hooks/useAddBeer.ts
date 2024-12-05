import { useMutation } from '@tanstack/react-query'
import { addNewBeer as _addNewBeer } from '@/api'
import { Beer } from '@/types'

/**
 * Custom hook for adding a new beer using a mutation
 *
 * @property addNewBeer Mutation function to add a new beer
 * @property isSuccess Indicates if the mutation was successful
 * @property isError Indicates if the mutation encountered an error
 *
 * @returns Hook utilities for managing beer addition
 */
export function useAddBeer() {
  const {
    mutate: addNewBeer,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: (beer: Beer) => {
      return _addNewBeer(beer)
    },
  })

  return { addNewBeer, isSuccess, isError }
}
