import React, { memo } from 'react'

import styles from './Notfound.module.css'

/**
 * Notfound is a pre-existing implementation
 *
 * Note: I have used this component as-is
 */
const Notfound: React.FC = memo(() => (
  <div className={styles.container}>
    <h1 className={styles.h1}>404: Page Not Found</h1>
  </div>
))
Notfound.displayName = 'Notfound'

export default Notfound
