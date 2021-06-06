import { gql } from '@apollo/client';

export const LOG_IN = gql`
  query logIn($email: String!, $password: String!) {    
      accountLogIn(user: { email: $email, password: $password }){
        userId
        token
        tokenExpiration
      }    
  }
`

export const CREATE_USER = gql`
  mutation createUser($userName: String!, $email: String!, $password: String!){
  createUser(user: {userName: $userName, email: $email, password: $password})
}
`

export const GET_FCARDS = gql`
  query getFCards($token: String!){
    getFlashCards(token: $token) {
      id
      title
      content
    }
  }
`

export const DELETE_FCARD = gql`
  mutation deleteFcard($id: ID!, $token: String!){
    deleteFCard(fcard: {_id: $id, token: $token})
  }
`

export const EDIT_FCARD = gql`
  mutation editFCard($id: ID!, $token: String!, $title: String!, $content: String!){
  editFCard(fcard: {_id: $id, token: $token, title: $title, content: $content})
}
`

export const GET_ONE_FCARD = gql`
  query getOneFlashCard($id: ID!, $token: String!){
    getOneFlashCard(fcard: {_id: $id, token: $token}){
      id
      title
      content
      author
      createdAt
      updatedAt
    }
}
`

export const CREATE_FCARD = gql`
  mutation addFCard($title: String!, $content: String!, $token: String!){
  createFCard(fcard: {title: $title, content: $content, token: $token})
}
`