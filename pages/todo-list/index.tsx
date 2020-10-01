import React, { useEffect, Dispatch } from 'react';
import Layout from '../../components/layout';
import { GetServerSideProps } from 'next';
import todos from '../../data/todos';
import GridLayout from '../../components/gridLayout';
import TodoListItem from '../../components/todoListItem';
import { TodoListModel, TodosActions } from '../../store/todos';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store';
import SvgCircle from '../../components/svgCircle';

interface Props {
    todos: TodoListModel[];
}

const TodoList: React.FC<Props> = ({ todos }) => {
    const dispatch: Dispatch<TodosActions> = useDispatch();
    const data = useSelector((state: AppState) => state.todos.todos);

    useEffect(() => {
        dispatch({
            type: '[Todos] INIT_TODOS',
            payload: todos,
        });
    }, []);

    return (
        <Layout title="Kawen | Todo List">
            <GridLayout
                data={data || todos}
                id={({ id }) => id}
                Component={TodoListItem}
            />
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: { todos },
    };
};

export default TodoList;
