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

export { getTodosGql };
