export interface Task {
    id: number | string;
    title: string;
    date: Date | number;
    completed: boolean;
    edit?: boolean;
}

export interface TodoListModel {
    id: number | string;
    title: string;
    tasks: Task[];
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
        todoId: string | number;
        taskId: string | number;
        title: string;
    };
}

interface UpdateTaskCompleted {
    type: '[Todos] UPDATE_TASK_COMPLETED';
    payload: {
        todoId: string | number;
        taskId: string | number;
        completed: boolean;
    };
}

interface DeleteTask {
    type: '[Todos] DELETE_TASK';
    payload: {
        todoId: string | number;
        taskId: string | number;
    };
}

interface AddTask {
    type: '[Todos] ADD_TASK';
    payload: string | number;
}

interface UpdateTodoTitle {
    type: '[Todos] UPDATE_TODO_TITLE';
    payload: {
        id: string | number;
        title: string;
    };
}

interface RemoveTodo {
    type: '[Todos] REMOVE_TODO';
    payload: string | number;
}

export type TodosActions =
    | InitTodos
    | UpdateTaskTitle
    | UpdateTaskCompleted
    | DeleteTask
    | AddTask
    | UpdateTodoTitle
    | RemoveTodo;
