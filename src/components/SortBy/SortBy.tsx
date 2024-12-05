import React from 'react'
import { SortByProps } from '@/types'

import styles from './SortBy.module.css'

/**
 * A component that renders a dropdown menu for sorting items by different criteria
 *
 * @param props Component props
 * @param props.onSort The callback function to handle sorting based on the selected criteria
 *
 * @returns React Element
 */
export function SortBy({ onSort }: SortByProps): React.ReactElement {
  return (
    <div className={styles.formControl}>
      <label htmlFor="sort-select" className={styles.label}>
        Sort by
      </label>
      <select
        id="sort-select"
        className={styles.select}
        onChange={(e) => onSort(e.target.value as string)}
      >
        <option value="">
          <>None</>
        </option>
        <option value="name">Name</option>
        <option value="rating">Rating</option>
        <option value="price">Price</option>
      </select>
    </div>
  )
}
