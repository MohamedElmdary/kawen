import React from 'react';
import Layout from '../../components/layout';
import { GetServerSideProps } from 'next';
import todos, { TodoListModel } from '../../data/todos';
import GridLayout from '../../components/gridLayout';
import TodoListItem from '../../components/todoListItem';

interface Props {
    todos: TodoListModel[];
}

const TodoList: React.FC<Props> = ({ todos: data }) => {
    return (
        <Layout title="Kawen | Todo List">
            <GridLayout
                {...{ data }}
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
