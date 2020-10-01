import React, { useState, useCallback } from 'react';
import { TodoListModel, Task } from '../../data/todos';
import classes from './todoListItem.module.scss';
import TaskItem from './taskItem';

interface props {
    item: TodoListModel;
}

const TodoListItem: React.FC<props> = ({ item }) => {
    const [tasks, setTasks] = useState(item.tasks);

    const updateTitle = useCallback(
        (id: TodoListModel['id'], title: TodoListModel['title']) => {
            const taskIndex = tasks.findIndex((task) => task.id === id);
            if (taskIndex === -1) return;
            const newTasks = [...tasks];
            newTasks[taskIndex].title = title;
            setTasks(newTasks);
        },
        [tasks]
    );
    const updateCompleted = useCallback(
        (id: TodoListModel['id'], completed: boolean) => {
            const taskIndex = tasks.findIndex((task) => task.id === id);
            if (taskIndex === -1) return;
            const newTasks = [...tasks];
            newTasks[taskIndex].completed = completed;
            setTasks(newTasks);
        },
        [tasks]
    );

    const deleteTask = useCallback(
        (id: TodoListModel['id']) => {
            const taskIndex = tasks.findIndex((task) => task.id === id);
            if (taskIndex === -1) return;
            const newTasks = [...tasks];
            newTasks.splice(taskIndex, 1);
            setTasks(newTasks);
        },
        [tasks]
    );

    const addTask = useCallback(() => {
        const newTasks = [...tasks];
        const id = new Date().getTime();
        newTasks.push({
            id: id,
            date: id,
            completed: false,
            title: '',
            edit: true,
        } as Task & { edit?: boolean });
        setTasks(newTasks);
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
                    <h3>{item.title}</h3>
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
