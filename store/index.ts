import { createStore, combineReducers } from 'redux';
import authReducer, { AuthState } from './auth';
import todosReducer, { TodosState } from './todos';

function useStore(initAppState: Partial<AppState>) {
    return createStore(
        combineReducers({
            auth: authReducer,
            todos: todosReducer,
        }),
        initAppState
    );
}

export interface AppState {
    auth: AuthState;
    todos: TodosState;
}

export default useStore;
