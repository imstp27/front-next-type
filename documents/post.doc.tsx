import { gql } from '@apollo/client';

export const POST_FRAGMENT = gql`
  fragment Post on Post {
    _id
    title
    subtitle
    content
    author
    createdOn
  }
`;

export const GET_POSTS = gql`
  query getPosts {
    getPosts {
      ...Post
    }
  }
  ${POST_FRAGMENT}
`;
