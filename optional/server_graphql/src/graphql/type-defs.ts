import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type characterComment {
    id: ID!
    comment: String!
  }

  type Query {
    characterComment(id: ID!): characterComment!
  }

  input CharacterCommentInput {
    id: ID!
    comment: String!
  }

  type Mutation {
    saveCharacterComment(characterComment: CharacterCommentInput!, exists: Boolean!): Boolean
  }
`;
