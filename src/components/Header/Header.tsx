import React from 'react'

import styles from './Header.module.css'

/**
 * A component that renders the header of the application
 *
 * @returns React Element
 */
export function Header(): React.ReactElement {
  return (
    <header className={styles.appBar}>
      <h1 className={styles.title}>Beer Collection</h1>
    </header>
  )
}
