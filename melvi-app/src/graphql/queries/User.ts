import gql from 'graphql-tag';

export const SIGN_IN = gql`
  query signIn($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const ME = gql`
  query {
    me {
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
`;

export const GET_USER = gql`
  query GetUser($userId: Number!) {
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

export const VERIFY_AUTH_TOKEN = gql`
  {
    token @client
  }
`;
