"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
class TodoService {
    get(todoId) {
        return {
            id: todoId,
            title: "mockedTodo",
            "description": "mock",
            done: false
        };
    }
    create(todoCreationParams) {
        return {
            id: "1",
            title: "mockedTodo",
            "description": "mock",
            done: false
        };
    }
}
exports.TodoService = TodoService;
