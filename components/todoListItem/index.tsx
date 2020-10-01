import React, { useCallback, Dispatch, useState } from 'react';
import classes from './todoListItem.module.scss';
import TaskItem from './taskItem';
import { TodoListModel, TodosActions } from '../../store/todos';
import { useDispatch } from 'react-redux';
import DropDown, { DropDownItem, DropDownDivider } from '../dropDownMenu';

interface props {
    item: TodoListModel;
}

const TodoListItem: React.FC<props> = ({ item }) => {
    const dispatch: Dispatch<TodosActions> = useDispatch();
    const { id, title, tasks } = item;
    const [update, setUpdate] = useState(false);
    const [value, setValue] = useState(item.title);

    const updateTodoTitle = (title: string) => {
        dispatch({
            type: '[Todos] UPDATE_TODO_TITLE',
            payload: { id, title },
        });
    };

    const removeTodo = () => {
        dispatch({
            type: '[Todos] REMOVE_TODO',
            payload: id,
        });
    };

    const updateTitle = useCallback(
        (id: TodoListModel['id'], title: TodoListModel['title']) => {
            dispatch({
                type: '[Todos] UPDATE_TASK_TITLE',
                payload: {
                    todoId: item.id,
                    taskId: id,
                    title,
                },
            });
        },
        [tasks]
    );
    const updateCompleted = useCallback(
        (id: TodoListModel['id'], completed: boolean) => {
            dispatch({
                type: '[Todos] UPDATE_TASK_COMPLETED',
                payload: {
                    todoId: item.id,
                    taskId: id,
                    completed,
                },
            });
        },
        [tasks]
    );

    const deleteTask = useCallback(
        (id: TodoListModel['id']) => {
            dispatch({
                type: '[Todos] DELETE_TASK',
                payload: {
                    todoId: item.id,
                    taskId: id,
                },
            });
        },
        [tasks]
    );

    const addTask = useCallback(() => {
        dispatch({
            type: '[Todos] ADD_TASK',
            payload: id,
        });
    }, [tasks]);

    const tasksCmp = tasks.map((task) => {
        const key = task.id;
        return (
            <TaskItem
                {...{ task, key, updateTitle, updateCompleted, deleteTask }}
            />
        );
    });

    const actionClass = classes.list__header__action;
    const actionElement = (
        <img src="/images/icons/dots-menu.svg" alt="dots menu icon" />
    );

    const onBlur = () => {
        const val = value.trim();
        setUpdate(false);
        if (!val) {
            return setValue(item.title);
        }
        updateTodoTitle(val);
    };

    return (
        <section className={classes.container}>
            <section className={classes.list}>
                <div className={classes.list__header}>
                    <div>
                        {update ? (
                            <input
                                type="text"
                                onChange={(e) => setValue(e.target.value)}
                                {...{ value, onBlur }}
                            />
                        ) : (
                            <h3>{title}</h3>
                        )}
                        <p>{tasks.length} Tasks</p>
                    </div>
                    <DropDown {...{ actionElement, actionClass }}>
                        <DropDownItem onClick={() => setUpdate(true)}>
                            <div role="button">
                                <p>Update Title</p>
                            </div>
                        </DropDownItem>
                        <DropDownDivider />
                        <DropDownItem onClick={removeTodo}>
                            <div role="button">
                                <p>Remove</p>
                            </div>
                        </DropDownItem>
                    </DropDown>
                    <div
                        className={classes.list__header__additem}
                        onClick={addTask}
                    >
                        <button>+</button>
                    </div>
                </div>
                <div className={classes.list__container}>
                    {/* prettier-ignore */}
                    {tasksCmp}
                </div>
            </section>
        </section>
    );
};

export default TodoListItem;
