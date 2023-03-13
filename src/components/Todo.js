import React, { useState } from 'react'

import styles from '../App.module.css'

const Todo = props => {
	const [isEditing, setIsEditing] = useState(false)
	const [newTitle, setNewTitle] = useState(props.title)

	const deleteHandler = () => {
		props.onDelete(props.id)
	}

	const finishHandler = () => {
		props.onFinish(props.id)
	}

	const changeHandler = event => {
		setNewTitle(event.target.value)
	}

	const submitHandler = event => {
		event.preventDefault()
		props.onEdit(props.id, newTitle)
		setNewTitle(newTitle)
		setIsEditing(false)
	}

	const viewTodo = (
		<div className={styles.todo}>
			{!props.completed ? <p>{props.title}</p> : <p className={styles.finished}>{props.title} </p>}
			<div className={styles.tools}>
				<button onClick={finishHandler} className={`${styles['tools-btn']} ${styles.finish}`}>
					{props.completed ? (
						<span className='material-symbols-outlined'>check_circle</span>
					) : (
						<span className='material-symbols-outlined'>done</span>
					)}
				</button>
				<button onClick={() => setIsEditing(true)} className={`${styles['tools-btn']} ${styles.edit}`}>
					<span className='material-symbols-outlined'>edit_note</span>
				</button>
				<button onClick={deleteHandler} className={`${styles['tools-btn']} ${styles.delete}`}>
					<span className='material-symbols-outlined'>delete</span>
				</button>
			</div>
		</div>
	)

	const editTodo = (
		<form className={styles.todo} onSubmit={submitHandler}>
			<input className={styles['todo-input']} onChange={changeHandler} id={props.id} type='text' value={newTitle} />
			<div className={styles.tools}>
				<button type='submit' className={`${styles['tools-btn']} ${styles.edit}`}>
					<span className='material-symbols-outlined'>save</span>
				</button>
				<button type='button' onClick={() => setIsEditing(false)} className={`${styles['tools-btn']} ${styles.edit}`}>
					<span className='material-symbols-outlined'>close</span>
				</button>
			</div>
		</form>
	)

	return <li className={styles['list-element']}>{isEditing ? editTodo : viewTodo}</li>
}

export default Todo
