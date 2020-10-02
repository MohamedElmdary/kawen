import { createStore, combineReducers } from 'redux';
import authReducer, { AuthState } from './auth';
import todosReducer, { TodosState } from './todos';
import notesReducer, { NotesState } from './notes';

function useStore(initAppState: Partial<AppState>) {
    return createStore(
        combineReducers({
            auth: authReducer,
            todos: todosReducer,
            notes: notesReducer,
        }),
        initAppState
    );
}

export interface AppState {
    auth: AuthState;
    todos: TodosState;
    notes: NotesState;
}

export default useStore;
