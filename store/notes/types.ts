export interface Note {
    id: number | string;
    title: string;
    body: string;
    date: Date | number;
}

export interface NotesState {
    notes: Note[] | null;
}

interface SetInitNotes {
    type: '[Notes] SET_INIT_NOTES';
    payload: Note[];
}

interface AddNote {
    type: '[Notes] ADD_NOTE';
    payload: {
        title: string;
        body: string;
    };
}

interface RemoveNote {
    type: '[Notes] REMOVE_NOTE';
    payload: string | number;
}

interface UpdateTitle {
    type: '[Notes] UPDATE_TITLE';
    payload: {
        id: number | string;
        title: string;
    };
}

interface UpdateBody {
    type: '[Notes] UPDATE_BODY';
    payload: {
        id: number | string;
        body: string;
    };
}

export type NotesActions =
    | SetInitNotes
    | AddNote
    | RemoveNote
    | UpdateTitle
    | UpdateBody;
