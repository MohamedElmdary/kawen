import { User } from '../auth';

export interface MessageModel {
    id: number | string;
    sender: User;
    contactId: number | string;
    date: Date | number;
    message: string;
}

export interface ContactModel {
    id: number | string;
    users: User[];
    messages: MessageModel[];
}

export interface ChatState {
    contacts: ContactModel[] | null;
    activeChats: ContactModel['id'][];
    miniChat: boolean;
}

interface SendMessage {
    type: '[Chat] SEND_MESSAGE';
    payload: {
        contactId: number | string;
        message: string;
        sender: User;
    };
}

interface SetMiniChat {
    type: '[Chat] SET_MINI_CHAT';
    payload: boolean;
}

interface AddMiniChat {
    type: '[Chat] ADD_MINI_CHAT';
    payload: string | number;
}

interface RemoveMiniChat {
    type: '[Chat] REMOVE_MINI_CHAT';
    payload: string | number;
}

export type ChatActions =
    | SendMessage
    | SetMiniChat
    | AddMiniChat
    | RemoveMiniChat;
