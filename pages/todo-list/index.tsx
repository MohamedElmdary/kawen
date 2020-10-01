import React, { useEffect, Dispatch, useState } from 'react';
import Layout from '../../components/layout';
import { GetServerSideProps } from 'next';
import todos from '../../data/todos';
import GridLayout from '../../components/gridLayout';
import TodoListItem from '../../components/todoListItem';
import { TodoListModel, TodosActions } from '../../store/todos';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store';
import PopupModal from '../../components/popupModal';
import classes from './todo-list.module.scss';
import InputControl from '../../components/inputControl';

interface Props {
    todos: TodoListModel[];
}

const TodoList: React.FC<Props> = ({ todos }) => {
    const dispatch: Dispatch<TodosActions> = useDispatch();
    const data = useSelector((state: AppState) => state.todos.todos);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    useEffect(() => {
        dispatch({
            type: '[Todos] INIT_TODOS',
            payload: todos,
        });
    }, []);

    return (
        <Layout title="Kawen | Todo List">
            <div className={classes.todo__actions}>
                <button className="btn" onClick={() => setOpen(true)}>
                    + Add Task Card
                </button>
            </div>
            <GridLayout
                data={data || todos}
                id={({ id }) => id}
                Component={TodoListItem}
            />
            <PopupModal {...{ open }} onRequestClose={() => setOpen(false)}>
                <div className={classes.todo__modal}>
                    <div className={classes.todo__modal__input}>
                        <InputControl
                            autofocus={true}
                            label="Task Title"
                            onChange={(e) => setValue(e.target.value)}
                            {...{ error: '', type: 'text', value }}
                        />
                    </div>
                    <div className={classes.todo__modal__actions}>
                        <button
                            className="btn btn-round btn-outline"
                            onClick={() => {
                                const val = value.trim();
                                if (val) {
                                    dispatch({
                                        type: '[Todos] ADD_TODO',
                                        payload: val,
                                    });
                                }
                                setValue('');
                                setOpen(false);
                            }}
                        >
                            Add
                        </button>
                        <button
                            className="btn btn-round"
                            onClick={() => {
                                setValue('');
                                setOpen(false);
                            }}
                        >
                            cancel
                        </button>
                    </div>
                </div>
            </PopupModal>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: { todos },
    };
};

export default TodoList;
