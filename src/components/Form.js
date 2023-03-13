import React, { useState } from 'react'

import styles from '../App.module.css'

const Form = props => {
	const [title, setTitle] = useState('')

	const changeHandler = e => {
		setTitle(e.target.value)
	}

	const addTaskHandler = e => {
		e.preventDefault()
		props.addTask(title)
		setTitle('')
	}

	return (
		<div className={styles['add-todo']}>
			<h2>My Todo App</h2>
			<form onSubmit={addTaskHandler} className={styles['input-space']}>
				<input
					onChange={changeHandler}
					type='text'
					className={styles['todo-input']}
					placeholder='Enter the todo title...'
					value={title}
				/>
				<button type='submit' className={styles['add-btn']}>
					<span className='material-symbols-outlined'>add_task</span>
				</button>
			</form>
		</div>
	)
}

export default Form
