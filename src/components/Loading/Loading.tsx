import React from 'react'
import loading from '../../assets/loading.gif'

import styles from './Loading.module.css'

/**
 * A component that displays a loading spinner
 *
 * @returns React Element
 */
export function Loading(): React.ReactElement {
  return (
    <div className={styles.container} aria-busy="true" role="status">
      <img src={loading} alt="" className={styles.loadingImage} />
    </div>
  )
}
