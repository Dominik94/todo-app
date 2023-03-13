import Todo from './Todo'

import styles from '../App.module.css'

const TodoList = props => {

	const tasks = props.tasks
		.map(task => (
			<Todo
				key={task.id}
				id={task.id}
				title={task.title}
				completed={task.completed}
				onDelete={props.onDelete}
				onFinish={props.onFinish}
				onEdit={props.onEdit}
			/>
		))



	return (
		<div className={styles['todo-list']}>
			<h2 className={styles['list-title']}>My to-do list:</h2>
			{!tasks.length > 0 && <p className={styles['alert-info']}>There is no tasks... Add something!</p>}
			<ul>{tasks}</ul>
		</div>
	)
}

export default TodoList
