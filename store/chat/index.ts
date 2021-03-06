import { ChatState, ChatActions } from './types';

const initState: ChatState = {
    contacts: null,
    activeChats: [],
    miniChat: true,
};

function chatReducer(state = initState, action: ChatActions): ChatState {
    const _contacts = state.contacts ?? [];

    switch (action.type) {
        case '[Chat] SEND_MESSAGE': {
            const { contactId, message, sender } = action.payload;
            const id = new Date().getTime();
            return {
                ...state,
                contacts: _contacts.map((c) => {
                    if (c.id !== contactId) return c;
                    return {
                        ...c,
                        messages: [
                            ...c.messages,
                            {
                                id,
                                date: id,
                                contactId,
                                message,
                                sender,
                            },
                        ],
                    };
                }),
            };
        }

        case '[Chat] SET_MINI_CHAT':
            return {
                ...state,
                miniChat: action.payload,
            };

        case '[Chat] REMOVE_MINI_CHAT': {
            const id = action.payload;
            return {
                ...state,
                activeChats: state.activeChats.filter((c) => c.id !== id),
            };
        }

        case '[Chat] ADD_MINI_CHAT': {
            const id = action.payload;
            const exists = state.activeChats.some((c) => c.id === id);
            if (exists) return state;
            return {
                ...state,
                activeChats: [{ id, active: true }, ...state.activeChats],
            };
        }

        case '[Chat] TOGGLE_MINI_CHAT_ACTIVE': {
            const id = action.payload;
            return {
                ...state,
                activeChats: state.activeChats.map((chat) => {
                    if (chat.id !== id) return chat;
                    return {
                        ...chat,
                        active: !chat.active,
                    };
                }),
            };
        }

        default:
            return state;
    }
}

export default chatReducer;
export * from './types';
