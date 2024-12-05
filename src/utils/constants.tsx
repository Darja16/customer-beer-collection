import { RatingOption } from '@/types'

/**
 * An array of rating options used for filtering beers
 */
export const RATING_OPTIONS: RatingOption[] = [
  { value: '', label: <>None</> },
  { value: '5', label: '⭐⭐⭐⭐⭐' },
  { value: '4', label: '⭐⭐⭐⭐' },
  { value: '3', label: '⭐⭐⭐' },
  { value: '2', label: '⭐⭐' },
  { value: '1', label: '⭐' },
]
