import React from 'react'
import errorImg from '../../assets/error.gif'

import styles from './ErrorMessage.module.css'

/**
 * A component that displays an error page
 *
 * @returns React Element
 */
export function ErrorMessage(): React.ReactElement {
  return (
    <section className={styles.container}>
      <img src={errorImg} alt="Oops.. something went wrong!" />
      <figure>
        <h1 className={styles.title}>Oops.. Something went wrong!</h1>
      </figure>
    </section>
  )
}
