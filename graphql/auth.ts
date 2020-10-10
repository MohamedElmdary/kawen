import { gql } from 'graphql-request';

const registerGql = gql`
    mutation register($name: String!, $email: String!, $password: String!) {
        createMember(fullName: $name, email: $email, password: $password) {
            member {
                isActive
            }
        }
    }
`;

const loginGql = gql`
    mutation login($email: String!, $password: String!) {
        tokenAuth(email: $email, password: $password) {
            payload
            refreshExpiresIn
            token
        }
    }
`;

export { registerGql, loginGql };
