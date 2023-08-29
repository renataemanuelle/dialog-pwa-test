export interface User {
  _id: string
  index: number
  picture: string
  age: number
  eyeColor: string
  name: string
  company: string
  email: string
  phone: string
  friends: Friend[]
  greeting: string
}

export interface Friend {
  _id: string
  index: number
  picture: string
  age: number
  eyeColor: string
  name: string
  company: string
  email: string
  phone: string
}

export interface UsersData {
  users: User[] | Friend[];
  title?: string;
  onClick?: (_id: string) => void;
};

export interface UserDetailsProps {
  user: User;
}