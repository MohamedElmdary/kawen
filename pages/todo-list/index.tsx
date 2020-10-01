import React from 'react';
import Layout from '../../components/layout';
import { GetServerSideProps } from 'next';
import todos, { TodoListModel } from '../../data/todos';
import GridLayout from '../../components/gridLayout';
import TodoListItem from '../../components/todoListItem';

interface Props {
    todos: TodoListModel[];
}

const TodoList: React.FC<Props> = ({ todos }) => {
    return (
        <Layout title="Kawen | Todo List">
            <GridLayout
                data={todos}
                id={({ id }) => id}
                Component={TodoListItem}
            />
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    console.log(
        ctx.req?.headers?.['user-agent'],
        ctx.req?.headers?.['user-agent']?.match(
            /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
        )
    );

    return {
        props: { todos },
    };
};

export default TodoList;
