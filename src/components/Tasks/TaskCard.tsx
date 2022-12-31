import { Task } from '../../models/TaskInterface';

interface Props {
	task: Task,
	deleteTask: (id: number) => void 
}
const TaskCard = ({ task, deleteTask }: Props) => {

	return (
		<div className='card card-body bg-secondary w-25 mb-4'>
			<h3>{task.id}</h3>
			<h3>{task.title}</h3>
			<p>{task.description}</p>
			<p>{task.completed ? "Task done" : "Task pending"}</p>

			<div className="d-flex justify-content-around mt-4">
				<button
					onClick={() => deleteTask(task.id)}
					className="btn btn-primary btn-sm px-4">Delete</button>
				<button className="btn btn-success btn-sm px-4">Edit</button>
			</div>
		</div>
	)
}

export default TaskCard
