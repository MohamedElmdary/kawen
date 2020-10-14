export interface Task {
    id: number;
    name: string;
    created: Date | number;
    done: boolean;
    edit?: boolean;
}

export interface TodoListModel {
    id: number;
    name: string;
    task: Task[];
}

export interface TodosState {
    todos: TodoListModel[] | null;
}

interface InitTodos {
    type: '[Todos] INIT_TODOS';
    payload: TodoListModel[];
}

interface UpdateTaskTitle {
    type: '[Todos] UPDATE_TASK_TITLE';
    payload: {
        todoId: number;
        taskId: number;
        name: string;
    };
}

interface UpdateTaskCompleted {
    type: '[Todos] UPDATE_TASK_COMPLETED';
    payload: {
        todoId: number;
        taskId: number;
        done: boolean;
    };
}

interface DeleteTask {
    type: '[Todos] DELETE_TASK';
    payload: {
        todoId: number;
        taskId: number;
    };
}

interface AddTask {
    type: '[Todos] ADD_TASK';
    payload: number;
}

interface UpdateTodoTitle {
    type: '[Todos] UPDATE_TODO_TITLE';
    payload: {
        id: number;
        name: string;
    };
}

interface RemoveTodo {
    type: '[Todos] REMOVE_TODO';
    payload: number;
}

interface AddTodo {
    type: '[Todos] ADD_TODO';
    payload: string;
}

export type TodosActions =
    | InitTodos
    | UpdateTaskTitle
    | UpdateTaskCompleted
    | DeleteTask
    | AddTask
    | UpdateTodoTitle
    | RemoveTodo
    | AddTodo;
