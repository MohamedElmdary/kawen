import { NotesState, NotesActions } from './types';
import { notStrictEqual } from 'assert';

const initState: NotesState = {
    notes: null,
};

function notesReducer(state = initState, action: NotesActions): NotesState {
    const _notes = state.notes ?? [];

    switch (action.type) {
        case '[Notes] SET_INIT_NOTES':
            return {
                ...state,
                notes: action.payload,
            };

        case '[Notes] ADD_NOTE': {
            const { title, body } = action.payload;
            const id = new Date().getTime();
            return {
                ...state,
                notes: [..._notes, { id, date: id, body, title }],
            };
        }

        case '[Notes] UPDATE_TITLE': {
            const { id, title } = action.payload;
            return {
                ...state,
                notes: _notes.map((note) => {
                    if (note.id !== id) return note;
                    return {
                        ...note,
                        title,
                    };
                }),
            };
        }

        case '[Notes] UPDATE_BODY': {
            const { id, body } = action.payload;
            return {
                ...state,
                notes: _notes.map((note) => {
                    if (note.id !== id) return note;
                    return {
                        ...note,
                        body,
                    };
                }),
            };
        }

        case '[Notes] REMOVE_NOTE':
            return {
                ...state,
                notes: _notes.filter((note) => note.id !== action.payload),
            };

        default:
            return state;
    }
}

export default notesReducer;
export * from './types';
