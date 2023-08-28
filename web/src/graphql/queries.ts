import { gql } from '@apollo/client';

export const GET_ALL_USERS = gql`
  query GetAllUsers{
    list {
      _id
      index
      picture
      age
      eyeColor
      name
      company
      email
      phone
      greeting
    }
  }
`;

export const GET_FILTERED_USERS = gql`
  query GetFilteredUsers($name: String!) {
    list(name: $name) {
      _id
      index
      picture
      age
      eyeColor
      name
      company
      email
      phone
      greeting
    }
  }
`;

export const GET_USER_DETAILS = gql`
  query GetUserDetails($id: String!) {
    user(_id: $id) {
      _id
      index
      picture
      age
      eyeColor
      name
      company
      email
      phone
      greeting
      friends {
        _id
        index
        picture
        age
        eyeColor
        name
        company
        email
        phone
      }
    }
  }
`;