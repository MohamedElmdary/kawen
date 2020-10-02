import React, { useState, Dispatch } from 'react';
import classes from './noteItem.module.scss';
import { Note, NotesActions } from '../../store/notes';
import getDateDetails from '../../shared/utils/getDateDetails';
import { useDispatch } from 'react-redux';

interface Props {
    item: Note;
}

const NoteItem: React.FC<Props> = (props) => {
    const dispatch: Dispatch<NotesActions> = useDispatch();
    const {
        item: { id, title: _t, body: _b, date },
    } = props;

    /* edits */
    // - title
    const [title, setTitle] = useState(_t);
    const [editTitle, setEditTitle] = useState(false);
    // - body
    const [body, setBody] = useState(_b);
    const [editBody, setEditBody] = useState(false);

    const d = getDateDetails(new Date(date));

    return (
        <section className={classes.note}>
            <div className={classes.note__header}>
                <div style={{ flexGrow: editTitle ? 1 : undefined }}>
                    {editTitle ? (
                        <input
                            className={classes.edit__input}
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            autoFocus
                            onBlur={() => {
                                const val = title.trim();
                                if (val) {
                                    dispatch({
                                        type: '[Notes] UPDATE_TITLE',
                                        payload: { id, title },
                                    });
                                } else {
                                    setTitle(_t);
                                }
                                setEditTitle(false);
                            }}
                        />
                    ) : (
                        <p>{_t}</p>
                    )}
                    <span>
                        {d.monthNameShort} {d.day}, {d.year}
                    </span>
                </div>
                {editTitle ? null : (
                    <div className={classes.note__header__actions}>
                        <button onClick={() => setEditTitle(true)}>
                            <img
                                src="/images/icons/edit-square.svg"
                                alt="edit icon"
                            />
                        </button>
                        <button
                            onClick={() => {
                                dispatch({
                                    type: '[Notes] REMOVE_NOTE',
                                    payload: id,
                                });
                            }}
                        >
                            <img
                                src="/images/icons/remove.svg"
                                alt="remove icon"
                            />
                        </button>
                    </div>
                )}
            </div>
            <div className={classes.note__container}>
                {editBody ? (
                    <textarea
                        rows={10}
                        className={classes.edit__input}
                        autoFocus
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        onBlur={() => {
                            const val = body.trim();
                            if (val) {
                                dispatch({
                                    type: '[Notes] UPDATE_BODY',
                                    payload: { id, body },
                                });
                            } else {
                                dispatch({
                                    type: '[Notes] REMOVE_NOTE',
                                    payload: id,
                                });
                            }
                            setEditBody(false);
                        }}
                    />
                ) : (
                    <p onClick={() => setEditBody(true)}>{_b}</p>
                )}
            </div>
        </section>
    );
};

export default NoteItem;
