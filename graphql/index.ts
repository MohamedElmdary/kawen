import { GraphQLClient } from 'graphql-request';
import { GQL_URL } from '../constants/data';

const graphQLClient = new GraphQLClient(GQL_URL);

export default graphQLClient;
