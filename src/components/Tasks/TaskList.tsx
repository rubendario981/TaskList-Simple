import { useState } from 'react';
import { Task } from '../../models/TaskInterface';
import TaskCard from './TaskCard';
import { TaskForm } from './TaskForm';

export const TaskList = () => {
	const [tasks, setTasks] = useState<Task[]>([
		{ id: 1, title: "Learn Typescript", description: "Check tutorial to learn typescript", completed: "false" },
		{ id: 2, title: "Edit a task", description: "Trigger a modal with a form to be able edit the task", completed: "false" },
		{ id: 3, title: "task third", description: "Task to Do 3", completed: "false" },
		{ id: 4, title: "task fourth", description: "Task to Do 4", completed: "false" },
	])

	const getId = (): number => {
		let id = 0
		tasks.map((el) => {
			if (el.id > id) {
				id = el.id
			}
		})
		return id + 1
	}

	const newTask = (task: Task) => {
		setTasks([...tasks, { ...task, id: getId() }])
	}

	const deleteTask = (id: number) => {
		setTasks(tasks.filter(task => task.id !== id))
	}

	return (
		<div className='container'>
			<h2>List tasks</h2>
			<div className='d-flex justify-content-around'>
				<div className="row gap-3">
					<TaskForm addTask={newTask} />
					{tasks.map((task, index) => (
						<TaskCard key={index} task={task} deleteTask={deleteTask} />
					))}

				</div>
			</div>
		</div>
	)
}
