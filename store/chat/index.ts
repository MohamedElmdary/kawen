import { ChatState, ChatAction } from './types';

const initState: ChatState = {
    contacts: null,
    activeChats: [],
};

function chatReducer(state = initState, action: ChatAction): ChatState {
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

        default:
            return state;
    }
}

export default chatReducer;
export * from './types';
