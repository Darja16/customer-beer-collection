import { useQuery } from '@tanstack/react-query'
import { fetchBeerCollection } from '@/api'

/**
 * Custom hook for fetching the beer collection

 * @property beerCollection The fetched beer collection data
 * @property isLoading - Indicates if the data is currently being fetched
 * @property isError - Indicates if an error occurred while fetching the data
 *
 * @returns Hook utilities for managing the beer collection data
 */
export function useBeerCollection() {
  const {
    data: beerCollection,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['beerCollection'],
    queryFn: fetchBeerCollection,
    staleTime: 1000 * 60 * 5,
  })

  return {
    beerCollection,
    isLoading,
    isError,
  }
}
