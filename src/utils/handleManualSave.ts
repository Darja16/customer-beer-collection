import { Beer } from '@/types'

/**
 * Handles manual saving of the beer collection as a JSON file to device
 *
 * @param BeerCollection
 */
export const handleManualSave = (beerCollection: Beer[] | undefined): void => {
  const fileName = 'beerCollection.json'
  const data = JSON.stringify(beerCollection, null, 2)
  const blob = new Blob([data], { type: 'application/json' })

  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = fileName
  link.click()
}
