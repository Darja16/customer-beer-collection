import React, { useState } from 'react'
import { useBeerCollection, useFilteredBeers } from '@/hooks'
import { handleManualSave } from '@/utils'
import { Collection } from '@/components/Collection'
import { ErrorMessage } from '@/components/ErrorComponents'
import { Header } from '@/components/Header'
import { ControlPanel } from '@/components/ControlPanel'
import { Loading } from '@/components/Loading'
import { SaveButton } from '@/components/SaveButton'

import styles from './Overview.module.css'

/**
 * The Overview page displays the beer collection with filtering, sorting and searching capabilities
 *
 * @returns React Element
 */
export function Overview(): React.ReactElement {
  const { beerCollection, isLoading, isError } = useBeerCollection() // Fetches the beer collection data
  const [searchQuery, setSearchQuery] = useState('')
  const [filterCriteria, setFilterCriteria] = useState('')
  const [sortCriteria, setSortCriteria] = useState('')
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  })

  const handleSave = () => {
    handleManualSave(beerCollection)

    setSnackbar({
      open: true,
      message: 'Beer collection saved to device!',
      severity: 'success',
    })
  }

  // Handles search input changes
  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  // Handles changes in the filter criteria
  const handleFilter = (value: string) => {
    setFilterCriteria(value)
  }

  // Handles changes in the sort criteri
  const handleSort = (criteria: string) => {
    setSortCriteria(criteria)
  }

  const filteredBeers = useFilteredBeers(
    beerCollection,
    searchQuery,
    filterCriteria,
    sortCriteria,
  )

  if (isError) return <ErrorMessage />

  return (
    <main className={styles.mainContainer}>
      <Header />
      <ControlPanel
        onSearch={handleSearch}
        onFilter={handleFilter}
        onSort={handleSort}
      />
      <article className={styles.container}>
        <SaveButton onSave={handleSave} />
        {isLoading ? <Loading /> : <Collection beers={filteredBeers} />}
      </article>
      {snackbar.open && (
        <div
          className={`${styles.toast} ${
            snackbar.severity === 'error' ? styles.error : ''
          }`}
        >
          {snackbar.message}
        </div>
      )}
    </main>
  )
}
