import React from 'react'
import { SaveButtonProps } from '@/types'

import styles from './SaveButton.module.css'

/**
 * A button component for saving a beer collection
 *
 * @param props Component props
 * @param props.onSave The callback function for saving the beer collection to the device
 *
 * @returns React Element
 */
export function SaveButton({ onSave }: SaveButtonProps): React.ReactElement {
  return (
    <div className={styles.tooltip}>
      <button className={styles.button} onClick={onSave}>
        SAVE BEER COLLECTION
      </button>
      <span className={styles.tooltipText}>
        Save your beer collection to device
      </span>
    </div>
  )
}

export default SaveButton
