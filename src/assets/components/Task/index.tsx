import { useState } from 'react';
import { CheckCircle, Circle, Trash } from 'phosphor-react'
import styles from './Styles.module.css'

interface TaskProps {
  content: string;
  onCheckTask: (check: boolean) => void;
  onDeleteTask: (task: string) => void;
}

export function Task({ content, onCheckTask, onDeleteTask }: TaskProps) {
  const [checkTask, setCheckTask] = useState(false)

  function handleCheckTask() {
    setCheckTask((state) => {
      return !state
    })

    onCheckTask(checkTask)
  }

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  return (
    <div className={checkTask ? styles.taskCompleted : styles.task}>
      <div>
        <button
          onClick={handleCheckTask}
          title="Check Task"
        >
          {
            checkTask
            ? <CheckCircle size={24} weight="fill" fill="#8284FA" />
            : <Circle size={24} weight="bold" />
          }
        </button>
        <p>{content}</p>
      </div>
      <button
        onClick={handleDeleteTask}
        title="Delete Task"
      >
        <Trash size={24} />
      </button>
    </div>
  )
}