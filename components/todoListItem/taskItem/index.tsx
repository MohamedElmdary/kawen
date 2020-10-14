import React, { useState } from 'react';
import classes from './taskItem.module.scss';
import getDateDetails from '../../../shared/utils/getDateDetails';
import CheckInput from '../../checkInput';
import { TodoListModel, Task } from '../../../store/todos';

interface Props {
    task: Task;
    updateTitle(id: TodoListModel['id'], title: TodoListModel['name']): void;
    updateCompleted(id: TodoListModel['id'], completed: boolean): void;
    deleteTask(id: TodoListModel['id']): void;
}

const TaskItem: React.FC<Props> = (props) => {
    const { task, updateTitle, updateCompleted, deleteTask } = props;
    const [edit, setEdit] = useState(task.edit ?? false);
    const [value, setValue] = useState(task.name);

    const date = getDateDetails(new Date(task.created));

    const onBlur = () => {
        const val = value.trim();
        if (!val) {
            return deleteTask(task.id);
        }
        setEdit(false);
        return updateTitle(task.id, val);
    };

    return (
        <section className={classes.task}>
            <div className={classes.task__container}>
                <div className={classes.task__complete}>
                    <CheckInput
                        checked={task.done}
                        onChange={(e) => {
                            updateCompleted(task.id, e.target.checked);
                        }}
                    />
                </div>
                <div className={classes.task__details}>
                    {edit ? (
                        <textarea
                            rows={3}
                            className={classes.task__details__textarea}
                            autoFocus
                            onChange={(e) => setValue(e.target.value)}
                            {...{ value, onBlur }}
                        />
                    ) : (
                        <p>{task.name}</p>
                    )}
                    <span>
                        {date.monthNameShort} {date.day}, {date.year}
                    </span>
                </div>
            </div>
            <div className={classes.task__actions}>
                {edit ? (
                    <button onClick={onBlur}>
                        <img
                            src="/images/icons/save-icon.svg"
                            alt="save icon"
                            width={16}
                        />
                    </button>
                ) : (
                    <>
                        <button onClick={() => deleteTask(task.id)}>
                            <img
                                src="/images/icons/remove.svg"
                                alt="remove icon"
                            />
                        </button>
                        <button onClick={() => setEdit(true)}>
                            <img
                                src="/images/icons/edit-square.svg"
                                alt="edit icon"
                            />
                        </button>
                    </>
                )}
            </div>
        </section>
    );
};

export default TaskItem;
