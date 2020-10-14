import { Dispatch } from 'react';
import graphQLClient from '../../graphql';
import { createTodoGql } from '../../graphql/todos';
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
