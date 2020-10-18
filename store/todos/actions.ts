import { Dispatch } from 'react';
import graphQLClient from '../../graphql';
import {
    createTaskGql,
    createTodoGql,
    deleteTaskcardGql,
    deleteTaskGql,
    updateTaskcardGql,
    updateTaskNameGql,
} from '../../graphql/todos';
import { TodosActions } from './types';

type Dis = Dispatch<TodosActions>;

export function createTask(name: string) {
    return async (dispatch: Dis) => {
        const {
            CreateTaskcard: { taskcard: payload },
        } = await graphQLClient.request(createTodoGql, { name });

        dispatch({
            type: '[Todos] ADD_TODO',
            payload,
        });
    };
}

export function createTaskItem(id: number, name: string) {
    return async (dispatch: Dis) => {
        const {
            CreateTask: { task },
        } = await graphQLClient.request(createTaskGql, { id, name });
        dispatch({
            type: '[Todos] ADD_TASK',
            payload: { id, task },
        });
    };
}

export function updateTaskCard(id: number, name: string) {
    return async (dispatch: Dis) => {
        /* returns same info */
        await graphQLClient.request(updateTaskcardGql, { id, name });
        dispatch({
            type: '[Todos] UPDATE_TODO_TITLE',
            payload: { id, name },
        });
    };
}

export function removeTodo(id: number) {
    return async (dispatch: Dis) => {
        await graphQLClient.request(deleteTaskcardGql, { id });
        dispatch({
            type: '[Todos] REMOVE_TODO',
            payload: id,
        });
    };
}

export function updateTaskDone(cardId: number, id: number, done: boolean) {
    return async (dispatch: Dis) => {
        await graphQLClient.request(updateTaskcardGql, { cardId, id, done });
        dispatch({
            type: '[Todos] UPDATE_TASK_COMPLETED',
            payload: {
                todoId: cardId,
                taskId: id,
                done,
            },
        });
    };
}

export function updateTaskName(cardId: number, id: number, name: string) {
    return async (dispatch: Dis) => {
        await graphQLClient.request(updateTaskNameGql, { cardId, id, name });
        dispatch({
            type: '[Todos] UPDATE_TASK_TITLE',
            payload: {
                todoId: cardId,
                taskId: id,
                name,
            },
        });
    };
}

export function deleteTask(cardId: number, id: number) {
    return async (dispatch: Dis) => {
        await graphQLClient.request(deleteTaskGql, { cardId, id });
        dispatch({
            type: '[Todos] DELETE_TASK',
            payload: {
                todoId: cardId,
                taskId: id,
            },
        });
    };
}
