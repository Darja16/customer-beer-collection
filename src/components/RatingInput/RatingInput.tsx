import React from 'react'
import { RatingInputProps } from '@/types'

import styles from './RatingInput.module.css'

/**
 * A component that renders a rating input with star icons
 *
 * @param props Component props
 * @param props.value The current rating value (between 1 and 5)
 * @param props.onChange The callback function that is triggered when the user selects a different rating
 *
 * @returns React Element
 */
export function RatingInput({
  value,
  onChange,
}: RatingInputProps): React.ReactElement {
  return (
    <div className={styles.container}>
      <label className={styles.label}>Rating:</label>
      <div className={styles.rating}>
        {[...Array(5)].map((_, index) => {
          const starValue = 5 - index // Reverse the star order
          return (
            <React.Fragment key={starValue}>
              <input
                type="radio"
                id={`star${starValue}`}
                name="rating"
                value={starValue}
                checked={value === starValue}
                onChange={onChange}
                className={styles.radioInput}
                aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
              />
              <label
                htmlFor={`star${starValue}`}
                className={`${styles.star} ${
                  value >= starValue ? styles.filled : ''
                }`}
              >
                ★
              </label>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}
