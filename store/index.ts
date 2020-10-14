import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
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
        initAppState,
        applyMiddleware(ReduxThunk)
    );
}

export interface AppState {
    auth: AuthState;
    todos: TodosState;
    notes: NotesState;
    chat: ChatState;
}

export default useStore;
