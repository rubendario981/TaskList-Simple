import { ChangeEvent, FormEvent, useState } from "react"
import { NewTask, Task } from "../../models/TaskInterface"
type dataForms = ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>

// interface Props {
// 	addTask: NewTask
// }

export const TaskForm = ({ addTask }: NewTask) => {
	const [task, setTask] = useState<Task>({
		title: "", description: "", id: 0
	})

	const handleChanges = ({ target: { name, value }}: dataForms) =>{
		setTask({...task, [name]: value})
	}

	const createTask = (e: FormEvent<HTMLFormElement>) =>{
		e.preventDefault()
		addTask(task)
	}

	return (
		<div className="card card-body w-50">
			<h4>Create task</h4>
			<form onSubmit={createTask}>
				<div className="form-group">
					<label className="col-form-label" htmlFor="inputTitle">Title</label>
					<input
						onChange={handleChanges}
						type="text"
						name="title"
						className="form-control" placeholder="title task"
						value={task.title}
						id="inputTitle" />
				</div>
				<div className="form-group">
					<label className="col-form-label mt-2" htmlFor="inputDescription">Description</label>
					<textarea
						onChange={handleChanges}
						name="description"
						rows={3}
						className="form-control"
						value={task.description}
						id="inputDescription"></textarea>
				</div>
				<div className="form-group">
					<label className="col-form-label mt-2" htmlFor="stateTask">Status</label>
					<select
						onChange={handleChanges}
						name="status"
						id="completed"
						value={task.completed}
						className="form-select">
						<option defaultValue={"Choose one"} hidden>Select state</option>
						<option value="true">Completed</option>
						<option value="false">Pending</option>
					</select>
				</div>
				<div className="d-flex justify-content-around mt-4">
					<button className="btn btn-primary btn-sm px-4" type="submit">Save</button>
					<button className="btn btn-warning btn-sm px-4" type="reset">Reset</button>
				</div>
			</form>
		</div>
	)
}
