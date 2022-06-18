
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { PlusCircle } from 'phosphor-react'
import { Empty } from '../Empty'

import { Task } from '../Task'

import styles from './Styles.module.css'

export function Board() {
  const [tasks, setTasks] = useState<string[]>([])
  const [newTask, setNewTask] = useState('')
  const [tasksCompleted, setTasksCompleted] = useState<number>(0)

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([
      ...tasks,
      newTask
    ])

    setNewTask('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Write your task to create')
  }

  function deleteTask(task: string) {
    setTasks(tasks.filter(t => t !== task))
  }

  function checkTask(check: boolean) {
    if (check) {
      setTasksCompleted(
        tasksCompleted - 1
      )
    }

    if (!check) {
      setTasksCompleted(
        tasksCompleted + 1
      )
    }
  }

  const isNewTaskEmpty = newTask.length === 0

  return (
    <>
      <div className={styles.create}>
        <form
          onSubmit={handleCreateNewTask}
        >
          <textarea
            name="content"
            placeholder="Add a new task"
            value={newTask}
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
            required
          />

          <button
            type="submit"
            disabled={isNewTaskEmpty}
          >
            Create <PlusCircle size={16} weight="bold"/>
          </button>
        </form>
      </div>

      <section className={styles.container}>
        <header>
          <div>
            <p className={styles.created}>Created</p>
            <span>{tasks.length}</span>
          </div>

          <div>
            <p className={styles.finished}>Completed</p>
            <span>
              {
                tasks.length === 0
                ? `${tasks.length}`
                : `${tasksCompleted} of ${tasks.length}`
              }</span>
          </div>
        </header>

        <div className={styles.content}>

          {
            tasks.length > 0
              ? tasks.map(task => {
                return (
                  <Task
                    key={task}
                    content={task}
                    onCheckTask={checkTask}
                    onDeleteTask={deleteTask}
                  />
                )
              })
              : <Empty />
          }

        </div>
      </section>
    </>
  )
}