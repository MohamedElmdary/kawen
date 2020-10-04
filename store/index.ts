import { createStore, combineReducers } from 'redux';
import authReducer, { AuthState } from './auth';
import todosReducer, { TodosState } from './todos';
import notesReducer, { NotesState } from './notes';
import chatReducer, { ChatState } from './chat';

function useStore(initAppState: Partial<AppState>) {
    return createStore(
        combineReducers({
            auth: authReducer,
            todos: todosReducer,
            notes: notesReducer,
            chat: chatReducer,
        }),
        initAppState
    );
}

export interface AppState {
    auth: AuthState;
    todos: TodosState;
    notes: NotesState;
    chat: ChatState;
}

export default useStore;
