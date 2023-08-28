export const schema = `
  type Query {
    user(_id: String!): User
    list(name: String): [User]
  },
  type User {
    _id: String
    index: Int
    picture: String
    age: Int
    eyeColor: String
    name: String
    company: String
    email: String
    phone: String
    greeting: String
    friends: [Friends]
  },
  type Friends {
    _id: String
    index: Int
    picture: String
    age: Int
    eyeColor: String
    name: String
    company: String
    email: String
    phone: String
  }
`;
