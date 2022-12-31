export interface Task {
	id: number,
	title: string,
	description: string,
	completed?: string
}

export interface NewTask {
	addTask: (task: Task) => void
}


