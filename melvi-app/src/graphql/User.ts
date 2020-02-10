import gql from 'graphql-tag';

export const SIGN_IN = gql`
  query signIn($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const ME = gql`
  query me($userId: Number!) {
    getUser(id: $userId) {
      id
      fullName
      dateOfBirth
      email
      permission {
        id
        name
      }
    }
  }
`;
