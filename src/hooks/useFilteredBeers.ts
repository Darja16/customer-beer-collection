import { useMemo } from 'react'
import { Beer } from '@/types'

/**
 * Custom hook that filters and sorts a list of beers based on the provided search query, filter criteria and sort criteria
 *
 * @param beers The list of beers to be searched, filtered and/or sorted
 * @param searchQuery The search term to filter beers by name
 * @param filterCriteria The criteria to filter beers by rating
 * @param sortCriteria The criteria to sort beers by price, rating or name (ASC)
 *
 * @returns Beer[] The filtered and sorted list of beers
 */
export function useFilteredBeers(
  beers: Beer[] = [],
  searchQuery: string,
  filterCriteria: string,
  sortCriteria: string,
): Beer[] {
  return useMemo(() => {
    let filteredBeers = [...beers]

    // Filter beers by search query
    if (searchQuery) {
      filteredBeers = filteredBeers.filter((beer) =>
        beer.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Filter beers by rating
    if (filterCriteria) {
      const numericRating = parseInt(filterCriteria, 10)
      filteredBeers = filteredBeers.filter(
        (beer) => Math.round(beer.rating?.average || 0) === numericRating,
      )
    }

    // Sort beers based on the sortCriteria (price, rating or name)
    if (sortCriteria) {
      filteredBeers.sort((a, b) => {
        if (sortCriteria === 'price') {
          const priceA = parseFloat(a.price.replace('$', '')) || 0
          const priceB = parseFloat(b.price.replace('$', '')) || 0
          return priceA - priceB
        }

        if (sortCriteria === 'rating') {
          return (b.rating?.average || 0) - (a.rating?.average || 0)
        }

        if (sortCriteria === 'name') {
          return a.name.localeCompare(b.name)
        }

        return 0 // Return the original order if no valid sortCriteria
      })
    }

    return filteredBeers
  }, [beers, searchQuery, filterCriteria, sortCriteria])
}
