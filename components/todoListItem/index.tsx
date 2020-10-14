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
    const { id, name, task } = item;
    const [update, setUpdate] = useState(false);
    const [value, setValue] = useState(item.name);

    const updateTodoTitle = (name: string) => {
        dispatch({
            type: '[Todos] UPDATE_TODO_TITLE',
            payload: { id, name },
        });
    };

    const removeTodo = () => {
        dispatch({
            type: '[Todos] REMOVE_TODO',
            payload: id,
        });
    };

    const updateTitle = useCallback(
        (id: TodoListModel['id'], name: TodoListModel['name']) => {
            dispatch({
                type: '[Todos] UPDATE_TASK_TITLE',
                payload: {
                    todoId: item.id,
                    taskId: id,
                    name,
                },
            });
        },
        [task]
    );
    const updateCompleted = useCallback(
        (id: TodoListModel['id'], done: boolean) => {
            dispatch({
                type: '[Todos] UPDATE_TASK_COMPLETED',
                payload: {
                    todoId: item.id,
                    taskId: id,
                    done,
                },
            });
        },
        [task]
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
        [task]
    );

    const addTask = useCallback(() => {
        dispatch({
            type: '[Todos] ADD_TASK',
            payload: id,
        });
    }, [task]);

    const tasksCmp = task.map((t) => {
        const key = t.id;
        return (
            <TaskItem
                {...{ task: t, key, updateTitle, updateCompleted, deleteTask }}
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
            return setValue(item.name);
        }
        updateTodoTitle(val);
    };

    return (
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
                        <h3>{name}</h3>
                    )}
                    <p>{task.length} Tasks</p>
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
    );
};

export default TodoListItem;
