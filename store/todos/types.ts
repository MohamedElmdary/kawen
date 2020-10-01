export interface Task {
    id: number | string;
    title: string;
    date: Date | number;
    completed: boolean;
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

export type TodosActions = InitTodos;
