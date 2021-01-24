import { GraphQLClient } from 'graphql-request';

//const url = '/graphql';
const url = process.env.API_REST_URL_GRAPHQL;

export const graphQLClient = new GraphQLClient(url);

const urlLocal = '/graphql';
export const graphQLClientLocal = new GraphQLClient(urlLocal);
