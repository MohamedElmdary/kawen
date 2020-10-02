import React, { useState } from 'react';
import classes from './noteItem.module.scss';
import { Note } from '../../store/notes';
import getDateDetails from '../../shared/utils/getDateDetails';

interface Props {
    item: Note;
}

const NoteItem: React.FC<Props> = (props) => {
    const {
        item: { title, body, date, edit: _e },
    } = props;
    const [edit, setEdit] = useState(_e);
    const [value, setValue] = useState(body);

    const d = getDateDetails(new Date(date));

    return (
        <section className={classes.note}>
            <div className={classes.note__header}>
                <div>
                    <p>{title}</p>
                    <span>
                        {d.monthNameShort} {d.day}, {d.year}
                    </span>
                </div>
                <div className={classes.note__header__actions}>
                    <button>
                        <img
                            src="/images/icons/edit-square.svg"
                            alt="edit icon"
                        />
                    </button>
                    <button>
                        <img src="/images/icons/remove.svg" alt="remove icon" />
                    </button>
                </div>
            </div>
            <div className={classes.note__container}>
                {edit ? (
                    <textarea
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onBlur={() => {
                            setEdit(false);
                        }}
                    />
                ) : (
                    <p>{body}</p>
                )}
            </div>
        </section>
    );
};

export default NoteItem;
