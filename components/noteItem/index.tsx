import React, { useState, Dispatch } from 'react';
import classes from './noteItem.module.scss';
import { Note, NotesActions } from '../../store/notes';
import getDateDetails from '../../shared/utils/getDateDetails';
import { useDispatch } from 'react-redux';
import DropDown, { DropDownItem, DropDownDivider } from '../dropDownMenu';

interface Props {
    item: Note;
}

const NoteItem: React.FC<Props> = (props) => {
    const dispatch: Dispatch<NotesActions> = useDispatch();
    const {
        item: { id, title, body, date, edit: _e },
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
                    <DropDown
                        actionClass={classes.note__header__actions__button}
                        actionElement={
                            <img
                                src="/images/icons/edit-square.svg"
                                alt="edit icon"
                            />
                        }
                    >
                        <DropDownItem>Update Title</DropDownItem>
                        <DropDownDivider />
                        <DropDownItem>Update Note</DropDownItem>
                    </DropDown>
                    <button
                        onClick={() => {
                            dispatch({
                                type: '[Notes] REMOVE_NOTE',
                                payload: id,
                            });
                        }}
                    >
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
