import gql from 'graphql-tag';

export const ROADMAPS = gql`
  query Roadmaps($userId: Int!) {
    roadmaps(userId: $userId) {
      id
      title
      description
      icon
      user {
        id
        fullName
        dateOfBirth
        email
        password
        permission {
          id
          name
        }
      }
    }
  }
`;
