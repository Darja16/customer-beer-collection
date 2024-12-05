import React from 'react'
import { useNavigate } from 'react-router'
import { FilterByRating } from '../FilterByRating'
import { SortBy } from '../SortBy'
import { ControlPanelProps } from '@/types'

import styles from './ControlPanel.module.css'

/**
 * A component that renders the control panel for searching, filtering and sorting beers
 *
 * @param props Component props
 * @param props.onSearch The callback function that is triggered when the user types in the search input
 * @param props.onFilter The callback function that handles filtering beers by rating
 * @param props.onSort The callback function that handles sorting the beers based on selected criteria
 *
 * @returns React Element
 */
export function ControlPanel({
  onSearch,
  onFilter,
  onSort,
}: ControlPanelProps): React.ReactElement {
  const navigate = useNavigate()

  const isMobile = window.matchMedia('(max-width:600px)').matches

  return (
    <section
      className={`${styles.controlPanel} ${isMobile ? styles.mobile : ''}`}
    >
      <div className={`${styles.filterContainer}`}>
        <input
          type="text"
          placeholder="Search beers..."
          className={styles.searchInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onSearch(e.target.value)
          }
        />
        <FilterByRating onFilter={onFilter} />
        <SortBy onSort={onSort} />
      </div>

      <button
        className={styles.addButton}
        onClick={() => navigate('/add-item')}
      >
        Add New Beer
      </button>
    </section>
  )
}
