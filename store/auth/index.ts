import { AuthState, AuthActions } from './types';

const initState: AuthState = {
    currentUser: null,
};

function authReducer(state = initState, action: AuthActions): AuthState {
    switch (action.type) {
        case '[Auth] SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload,
            };
        default:
            return state;
    }
}

export default authReducer;
export * from './types';
