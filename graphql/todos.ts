import { gql } from 'graphql-request';

const getTodosGql = gql`
    query getTodos {
        todo {
            id
            name
            task {
                id
                name
                done
                created
            }
        }
    }
`;

const createTodoGql = gql`
    mutation createTodoGql($name: String!) {
        CreateTaskcard(name: $name) {
            taskcard {
                id
                name
                task {
                    id
                    name
                    done
                    created
                }
            }
        }
    }
`;

const createTaskGql = gql`
    mutation createTask($id: Int!, $name: String!) {
        CreateTask(taskcard: $id, name: $name) {
            task {
                id
                name
                created
                done
            }
        }
    }
`;

const updateTaskcardGql = gql`
    mutation UpdateTaskcard($id: Int!, $name: String!) {
        UpdateTaskcard(id: $id, name: $name) {
            taskcard {
                id
                name
            }
        }
    }
`;

const deleteTaskcardGql = gql`
    mutation deleteTaskcard($id: Int!) {
        DeleteTaskcard(id: $id) {
            message
        }
    }
`;

const updateTaskDoneGql = gql`
    mutation updateTaskDone($cardId: Int!, $id: Int!, $done: Boolean!) {
        UpdateTask(cardId: $cardId, id: $id, done: $done) {
            task {
                id
            }
        }
    }
`;

const updateTaskNameGql = gql`
    mutation updateTaskName($cardId: Int!, $id: Int!, $name: String!) {
        UpdateTask(cardId: $cardId, id: $id, name: $name) {
            task {
                id
            }
        }
    }
`;

const deleteTaskGql = gql`
    mutation DeleteTask($cardId: Int!, $id: Int!) {
        DeleteTask(cardId: $cardId, id: $id) {
            message
        }
    }
`;

export {
    getTodosGql,
    createTodoGql,
    createTaskGql,
    updateTaskcardGql,
    deleteTaskcardGql,
    updateTaskDoneGql,
    updateTaskNameGql,
    deleteTaskGql,
};
