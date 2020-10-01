import React, { useState, useCallback, Dispatch } from 'react';
import classes from './todoListItem.module.scss';
import TaskItem from './taskItem';
import { TodoListModel, Task, TodosActions } from '../../store/todos';
import { useDispatch } from 'react-redux';

interface props {
    item: TodoListModel;
}

const TodoListItem: React.FC<props> = ({ item }) => {
    const dispatch: Dispatch<TodosActions> = useDispatch();
    const { id, title, tasks } = item;

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

    return (
        <section className={classes.container}>
            <section className={classes.list}>
                <div className={classes.list__header}>
                    <h3>{title}</h3>
                    <p>{tasks.length} Tasks</p>
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
