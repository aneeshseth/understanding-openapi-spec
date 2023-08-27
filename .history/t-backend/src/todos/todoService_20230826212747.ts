import {Todo} from './todo'
export type TodoCreationParams = Pick<Todo, "title" | "description">;


export class TodoService {
    public get(todoId: string): Todo {
        return {
            id: todoId,
            title: "mockedTodo",
            "description": "mock",
            done: false
        }
    }
    public create(todoCreationParams: TodoCreationParams): Todo {
        return {
            id: todoId,
            title: "mockedTodo",
            "description": "mock",
            done: false
        }
    }
}