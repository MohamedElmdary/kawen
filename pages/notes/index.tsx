import React, { useEffect, Dispatch, useState } from 'react';
import { GetServerSideProps } from 'next';
import { Note, NotesActions } from '../../store/notes';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store';
import GridLayout from '../../components/gridLayout';
import notes from '../../data/notes';
import Layout from '../../components/layout';
import NoteItem from '../../components/noteItem';
import classes from './notes.module.scss';
import PopupModal from '../../components/popupModal';
import InputControl from '../../components/inputControl';

interface Props {
    notes: Note[];
}

const Notes: React.FC<Props> = ({ notes }) => {
    const data = useSelector((state: AppState) => state.notes.notes);
    const dispatch: Dispatch<NotesActions> = useDispatch();
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        dispatch({
            type: '[Notes] SET_INIT_NOTES',
            payload: notes,
        });
    }, []);

    const closeModel = () => {
        setTitle('');
        setBody('');
        setOpen(false);
    };

    return (
        <Layout title="Kawen | Notes">
            <div className={classes.notes__actions}>
                <button className="btn" onClick={() => setOpen(true)}>
                    + Add Note
                </button>
            </div>
            <GridLayout
                data={data || notes}
                id={(item) => item.id}
                Component={NoteItem}
            />
            <PopupModal {...{ open }} onRequestClose={closeModel}>
                <div className={classes.notes__popup}>
                    <div className={classes.notes__popup__title}>
                        <InputControl
                            label="Title"
                            error=""
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            type="text"
                        />
                    </div>
                    <div className={classes.notes__popup__body}>
                        <textarea
                            rows={10}
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            placeholder="Your Notes..."
                        />
                    </div>
                    <div className={classes.notes__popup__actions}>
                        <button
                            disabled={
                                title.trim().length === 0 ||
                                body.trim().length === 0
                            }
                            className="btn btn-round btn-outline"
                            onClick={() => {
                                dispatch({
                                    type: '[Notes] ADD_NOTE',
                                    payload: {
                                        title,
                                        body,
                                    },
                                });
                                closeModel();
                            }}
                        >
                            Add
                        </button>
                        <button className="btn btn-round" onClick={closeModel}>
                            Cancel
                        </button>
                    </div>
                </div>
            </PopupModal>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            notes,
        },
    };
};

export default Notes;
