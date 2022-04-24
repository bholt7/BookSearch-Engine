import gql from 'gql-tag'

export const USER_LOGIN = gql`
mutation login($email: String!, $password: String!){
  login(email: $email, password: $password) {
    token
    user{
      _id
      username
    }
  }
}

`

export const REGISTER_USER = gql`
mutation registerUser($username: String!, $password: String!, $email: String!){
  registerUser(username: $username, password: $password, email: $email){
    token
    user{
      username
      _id
      email
    }
  }
}


`
export const SAVE_BOOK = gql`
  mutation saveBook($input: SavedBookInput) {
    saveBook(input: $input) {
      username
      _id
      bookCount
      savedBooks {
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }
`

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      bookCount
      savedBooks {
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }
`