import { Beer } from '@/types'

const API_BASE_URL = process.env.REACT_APP_TEXT as string

/**
 * @throws Error Throws an error if the API base URL is not defined in the environment variables
 */
if (!API_BASE_URL) {
  throw new Error('API_BASE_URL is not defined')
}

/**
 * Fetches a beer collection from the API
 *
 * @async
 * @throws Error Throws an error if the fetch request fails
 *
 * @returns Promise A promise that resolves to an array of Beer objects
 */
export const fetchBeerCollection = async (): Promise<Beer[]> => {
  try {
    const res = await fetch(`${API_BASE_URL}/beers/ale`)

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`)
    }

    const json: Beer[] = await res.json()

    return json
  } catch (error: any) {
    throw new Error(`HTTP error! Status: ${error.status}`)
  }
}

/**
 * Adds a new beer to the collection by making a POST request to the API
 *
 * @async
 * @function addNewBeer
 * @param newBeer - The beer object to be added
 *   @param newBeer.id - Unique identifier for the beer
 *   @param newBeer.image - URL or path to the beer image
 *   @param newBeer.name - Name of the beer
 *   @param newBeer.price - Price of the beer in a string format (e.g. "$4.99")
 *   @param newBeer.rating - Rating details for the beer
 *     @param newBeer.rating.average - Average rating score
 *     @param newBeer.rating.reviews - Total number of reviews
 *
 * @throws Error Throws an error if the fetch request fails
 *
 * @returns Promise The newly created beer object returned by the server
 */

export const addNewBeer = async (newBeer: Beer): Promise<Beer> => {
  try {
    const res = await fetch(`${API_BASE_URL}/beers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBeer),
    })

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`)
    }

    const createdBeer: Beer = await res.json()

    return createdBeer
  } catch (error: any) {
    throw new Error(`Failed to add beer: ${error.message}`)
  }
}
