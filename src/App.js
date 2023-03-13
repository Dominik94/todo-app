import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import 'material-symbols'

import styles from './App.module.css'
import Form from './components/Form'
import TodoList from './components/TodoList'
import Filter from './components/Filter'

const FILTER_MAP = {
	All: () => true,
	Active: task => !task.completed,
	Completed: task => task.completed,
}

const FILTER_NAMES = Object.keys(FILTER_MAP)

function App() {
	const [filter, setFilter] = useState('All')
	const [tasks, setTasks] = useState([
		{
			id: `todo-${nanoid()}`,
			title: 'Learn Javascript',
			completed: false,
		},
		{
			id: `todo-${nanoid()}`,
			title: 'Learn React',
			completed: false,
		},
	])

	const addTask = title => {
		const newTask = { id: `todo-${nanoid()}`, title: title, completed: false }
		setTasks([...tasks, newTask])
		console.table(tasks)
	}

	const deleteTask = id => {
		const allTasks = tasks.filter(task => id !== task.id)
		setTasks(allTasks)
		console.table(allTasks)
	}

	const completeTask = id => {
		const allTasks = tasks.map(task => {
			if (id === task.id) {
				return { ...task, completed: !task.completed }
			}
			return task
		})
		setTasks(allTasks)
		console.table(allTasks)
	}

	const editTask = (id, newTitle) => {
		const allTasks = tasks.map(task => {
			if (id === task.id) {
				return { ...task, title: newTitle }
			}
			return task
		})
		setTasks(allTasks)
	}

	const filterButtons = FILTER_NAMES.map(name => (
		<Filter key={name} name={name} isPressed={name === filter} setFilter={setFilter} />
	))

	const tasksList = tasks.filter(FILTER_MAP[filter])

	return (
		<div className={styles['todo-app']}>
			<Form addTask={addTask} />
			<div className={styles.filter}>{filterButtons}</div>
			<TodoList tasks={tasksList} onDelete={deleteTask} onFinish={completeTask} onEdit={editTask} />
		</div>
	)
}

export default App
