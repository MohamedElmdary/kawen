import React from 'react';
import { TodoListModel } from '../../data/todos';
import classes from './todoListItem.module.scss';

interface props {
    item: TodoListModel;
}

const TodoListItem: React.FC<props> = ({ item: { title, tasks } }) => {
    return (
        <section className={classes.container}>
            <section className={classes.list}>
                <div className={classes.list__header}>
                    <h3>{title}</h3>
                    <p>{tasks.length} Tasks</p>
                    <div className={classes.list__header__additem}>
                        <button>+</button>
                    </div>
                </div>
                <div className={classes.list__container}>lists here</div>
            </section>
        </section>
    );
};

export default TodoListItem;
