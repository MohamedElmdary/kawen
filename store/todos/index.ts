import { TodosState, TodosActions } from './types';

const initState: TodosState = {
    todos: null,
};

function todosReducer(state = initState, action: TodosActions): TodosState {
    const _todos = state.todos || [];

    switch (action.type) {
        case '[Todos] INIT_TODOS':
            return {
                ...state,
                todos: action.payload,
            };

        case '[Todos] ADD_TASK': {
            return {
                ...state,
                todos: _todos.map((todo) => {
                    if (todo.id !== action.payload) return todo;
                    const id = new Date().getTime(); /* temp for now */
                    return {
                        ...todo,
                        task: [
                            ...todo.task,
                            {
                                id,
                                created: id,
                                name: '',
                                done: false,
                                edit: true,
                            },
                        ],
                    };
                }),
            };
        }

        case '[Todos] DELETE_TASK': {
            const { todoId, taskId } = action.payload;
            return {
                ...state,
                todos: _todos.map((todo) => {
                    if (todo.id !== todoId) return todo;
                    return {
                        ...todo,
                        task: todo.task.filter((t) => t.id !== taskId),
                    };
                }),
            };
        }

        case '[Todos] UPDATE_TASK_TITLE': {
            const { todoId, taskId, name } = action.payload;
            return {
                ...state,
                todos: _todos.map((todo) => {
                    if (todo.id !== todoId) return todo;
                    return {
                        ...todo,
                        task: todo.task.map((t) => {
                            if (t.id !== taskId) return t;
                            return {
                                ...t,
                                name,
                            };
                        }),
                    };
                }),
            };
        }

        case '[Todos] UPDATE_TASK_COMPLETED': {
            const { todoId, taskId, done } = action.payload;
            return {
                ...state,
                todos: _todos.map((todo) => {
                    if (todo.id !== todoId) return todo;
                    return {
                        ...todo,
                        task: todo.task.map((t) => {
                            if (t.id !== taskId) return t;
                            return {
                                ...t,
                                done,
                            };
                        }),
                    };
                }),
            };
        }

        case '[Todos] UPDATE_TODO_TITLE': {
            const { id, name } = action.payload;
            return {
                ...state,
                todos: _todos.map((todo) => {
                    if (todo.id !== id) return todo;
                    return {
                        ...todo,
                        name,
                    };
                }),
            };
        }

        case '[Todos] REMOVE_TODO': {
            return {
                ...state,
                todos: _todos.filter((todo) => todo.id !== action.payload),
            };
        }

        case '[Todos] ADD_TODO': {
            return {
                ...state,
                todos: [..._todos, action.payload],
            };
        }

        default:
            return state;
    }
}

export default todosReducer;
export * from './types';
