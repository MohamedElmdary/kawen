import { TodosState, TodosActions } from './types';

const initState: TodosState = {
    todos: null,
};

function todosReducer(state = initState, action: TodosActions): TodosState {
    switch (action.type) {
        case '[Todos] INIT_TODOS':
            return {
                ...state,
                todos: action.payload,
            };
        default:
            return state;
    }
}

export default todosReducer;
export * from './types';
