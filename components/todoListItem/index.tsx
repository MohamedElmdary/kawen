import React, { useCallback, Dispatch, useState } from 'react';
import classes from './todoListItem.module.scss';
import TaskItem from './taskItem';
import { TodoListModel, TodosActions } from '../../store/todos';
import { useDispatch } from 'react-redux';
import DropDown, { DropDownItem, DropDownDivider } from '../dropDownMenu';
import {
    createTaskItem,
    updateTaskCard,
    removeTodo as removeTodoAction,
    updateTaskDone,
    updateTaskName,
    deleteTask as deleteTaskAction,
} from '../../store/todos/actions';

interface props {
    item: TodoListModel;
}

const TodoListItem: React.FC<props> = ({ item }) => {
    const dispatch: Dispatch<TodosActions | Function> = useDispatch();
    const { id, name, task } = item;
    const [update, setUpdate] = useState(false);
    const [value, setValue] = useState(item.name);

    const [newItem, setNewItem] = useState<boolean>(false);

    const updateTodoTitle = (name: string) => {
        dispatch(updateTaskCard(id, name));
    };

    const removeTodo = () => {
        dispatch(removeTodoAction(id));
    };

    const updateTitle = useCallback(
        (id: TodoListModel['id'], name: TodoListModel['name']) => {
            dispatch(updateTaskName(item.id, id, name));
        },
        [task]
    );
    const updateCompleted = useCallback(
        (id: TodoListModel['id'], done: boolean) => {
            dispatch(updateTaskDone(item.id, id, done));
        },
        [task]
    );

    const deleteTask = useCallback(
        (id: TodoListModel['id']) => {
            dispatch(deleteTaskAction(item.id, id));
        },
        [task]
    );

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

        if (item.name !== val) {
            updateTodoTitle(val);
        }
    };

    return (
        <section className={classes.list}>
            <div className={classes.list__header}>
                <div>
                    {update ? (
                        <input
                            type="text"
                            autoFocus
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
                    onClick={() => {
                        setNewItem(true);
                    }}
                >
                    <button>+</button>
                </div>
            </div>
            <div className={classes.list__container}>
                {/* prettier-ignore */}
                {tasksCmp}
                {newItem && (
                    <TaskItem
                        task={{
                            id: -1,
                            created: new Date(),
                            done: false,
                            name: '',
                            edit: true,
                        }}
                        deleteTask={() => {
                            setNewItem(false);
                        }}
                        updateTitle={(_, val) => {
                            dispatch(createTaskItem(id, val));
                            setNewItem(false);
                        }}
                        updateCompleted={() => null}
                    />
                )}
            </div>
        </section>
    );
};

export default TodoListItem;
