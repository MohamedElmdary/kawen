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

export { getTodosGql, createTodoGql, createTaskGql, updateTaskcardGql };
