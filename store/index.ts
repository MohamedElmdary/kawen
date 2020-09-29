import { createStore, combineReducers } from 'redux';
import authReducer, { AuthState } from './auth';

function useStore(initAppState: Partial<AppState>) {
    return createStore(
        combineReducers({
            auth: authReducer,
        }),
        initAppState
    );
}

export interface AppState {
    auth: AuthState;
}

export default useStore;
