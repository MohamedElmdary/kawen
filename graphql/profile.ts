import { gql } from 'graphql-request';

const getCurrentUserGql = gql`
    query getCurrentUser {
        profile {
            id
            fullName
            image
        }
    }
`;

export { getCurrentUserGql };
