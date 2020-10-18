import { Dispatch } from 'react';
import graphQLClient from '../../graphql';
import {
    createTaskGql,
    createTodoGql,
    updateTaskcardGql,
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
