import { ClipboardText } from 'phosphor-react'

import styles from './Styles.module.css'

export function Empty() {
  return (
    <div className={styles.empty}>
      <ClipboardText size={56} />
      <p><strong>You don't have tasks</strong></p>
      <p>Create tasks and organize your to do list</p>
    </div>
  )
}