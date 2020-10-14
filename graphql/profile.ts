import { gql } from 'graphql-request';

const getCurrentUser = gql`
    query getCurrentUser {
        profile {
            id
            fullName
            image
        }
    }
`;

export { getCurrentUser };
