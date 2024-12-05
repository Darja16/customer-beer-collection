import React, { useState, ChangeEvent } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useBeerCollectionContext } from '@/store/beer-collection-provider'
import { useBeerCollection } from '@/hooks'
import { Loading } from '@/components/Loading'
import beerIcon from '../../assets/beerIcon.jpg'

import styles from './DetailPage.module.css'

/**
 * DetailPage component displays detiled information about selected beer
 *
 * @returns React Element
 */
export function DetailPage(): React.ReactElement {
  // Retrieve the beer ID from the route parameters
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  // Fetch the beer collection
  const { beerCollection, isLoading } = useBeerCollection()
  const beer = beerCollection?.find((b) => b.id.toString() === id)

  // Manage user feedback for beers
  const { feedback, addFeedback } = useBeerCollectionContext()
  const [userFeedback, setUserFeedback] = useState<string>('')

  // Handles adding user feedback for the beer
  const handleAddFeedback = () => {
    if (!userFeedback) return

    const newFeedback: any = {
      feedback: userFeedback,
    }

    addFeedback(id!, newFeedback)

    setUserFeedback('')
  }

  // Show message if the beer is not found
  if (!beer) {
    return (
      <div className={styles.container}>
        <div className={styles.paper}>
          <p className={styles.heading}>Beer not found!</p>
          <button
            className={`${styles.button} ${styles.secondaryButton}`}
            onClick={() => navigate('/')}
          >
            Back to Main Page
          </button>
        </div>
      </div>
    )
  }

  // Get feedback specific to the beer
  const beerFeedback = feedback[id!] || []

  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${styles.secondaryButton}`}
        onClick={() => navigate('/')}
      >
        Back to Main Page
      </button>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.paper}>
          <img
            src={beer.image || beerIcon}
            alt={beer.name}
            className={styles.image}
            onError={(e) => {
              ;(e.target as HTMLImageElement).src = beerIcon
            }}
          />
          <h1 className={styles.heading}>{beer.name}</h1>
          <p className={styles.bodyText}>
            <strong>Price:</strong> {beer.price}
          </p>
          <p className={styles.bodyText}>
            <strong>Rating:</strong>{' '}
            {beer.rating?.average ? beer.rating.average.toFixed(2) : 'N/A'}
            {' ⭐'.repeat(Math.round(beer.rating.average))}
          </p>

          <div className={styles.feedbackSection}>
            <h2 className={styles.sectionHeading}>Add Your Feedback</h2>
            <textarea
              rows={2}
              placeholder="Your Feedback"
              value={userFeedback}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setUserFeedback(e.target.value)
              }
            />
            <button className={styles.button} onClick={handleAddFeedback}>
              Submit Feedback
            </button>
          </div>

          <div>
            <h2 className={styles.sectionHeading}>User Feedback</h2>
            {beerFeedback.length === 0 ? (
              <p className={styles.feedbackEmpty}>
                No feedback yet. Be the first to add some feedback!
              </p>
            ) : (
              beerFeedback.map((fb: any, index: number) => (
                <div key={index} className={styles.feedbackItem}>
                  <p className={styles.bodyText}>
                    <strong>Feedback: </strong>
                    {fb.feedback}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}
