import {Todo} from './todo'
export type UserCreationParams = Pick<Todo, "title" | "description">;