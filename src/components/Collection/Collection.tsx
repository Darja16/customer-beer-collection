import React from 'react'
import { Link } from 'react-router'
import { CollectionProps } from '@/types'
import beerIcon from '../../assets/beerIcon.jpg'

import styles from './Collection.module.css'

/**
 * A component that renders a collection of beers
 *
 * @param props Component props
 * @param beers: An array of Beer objects
 *
 * @returns React Element
 */

export function Collection({ beers }: CollectionProps): React.ReactElement {
  return (
    <section className={styles.container}>
      {beers.map((beer) => (
        <div className={styles.card} key={beer.id}>
          <Link to={`/beers/${beer.id}`}>
            <img
              className={styles.cardImage}
              src={beer.image || beerIcon}
              alt={beer.name}
              onError={(e) => {
                ;(e.target as HTMLImageElement).src = beerIcon
              }}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{beer.name}</h3>
              <div>
                <p className={styles.cardText}>
                  <strong>Price:</strong> {beer.price}
                </p>
                <p className={styles.cardText}>
                  <strong>Rating:</strong>
                  {' ⭐'.repeat(Math.round(beer.rating?.average))}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </section>
  )
}
