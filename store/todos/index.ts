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
                        tasks: [
                            ...todo.tasks,
                            {
                                id,
                                date: id,
                                title: '',
                                completed: false,
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
                        tasks: todo.tasks.filter((task) => task.id !== taskId),
                    };
                }),
            };
        }

        case '[Todos] UPDATE_TASK_TITLE': {
            const { todoId, taskId, title } = action.payload;
            return {
                ...state,
                todos: _todos.map((todo) => {
                    if (todo.id !== todoId) return todo;
                    return {
                        ...todo,
                        tasks: todo.tasks.map((task) => {
                            if (task.id !== taskId) return task;
                            return {
                                ...task,
                                title,
                            };
                        }),
                    };
                }),
            };
        }

        case '[Todos] UPDATE_TASK_COMPLETED': {
            const { todoId, taskId, completed } = action.payload;
            return {
                ...state,
                todos: _todos.map((todo) => {
                    if (todo.id !== todoId) return todo;
                    return {
                        ...todo,
                        tasks: todo.tasks.map((task) => {
                            if (task.id !== taskId) return task;
                            return {
                                ...task,
                                completed,
                            };
                        }),
                    };
                }),
            };
        }

        case '[Todos] UPDATE_TODO_TITLE': {
            const { id, title } = action.payload;
            return {
                ...state,
                todos: _todos.map((todo) => {
                    if (todo.id !== id) return todo;
                    return {
                        ...todo,
                        title,
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

        default:
            return state;
    }
}

export default todosReducer;
export * from './types';
