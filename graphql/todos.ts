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

export { getTodosGql, createTodoGql };
