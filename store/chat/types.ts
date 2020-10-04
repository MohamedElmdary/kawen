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
}

interface SendMessage {
    type: '[Chat] SEND_MESSAGE';
    payload: {
        contactId: number | string;
        message: string;
        sender: User;
    };
}

export type ChatAction = SendMessage;
