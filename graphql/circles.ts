import { gql } from "graphql-request";

export const circlesGql = gql`
    {
        circles {
            id
            name
            description
            icon
            cover
            dateCreated
        }
    }
`;

export const circlesLinkGql = gql`
    {
        circles {
            name
        }
    }
`