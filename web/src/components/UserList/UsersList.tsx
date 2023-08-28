import React from 'react';
import {
  UserGrid,
  UserCard,
  UserDetail,
  UserImage,
  UserName,
  UserDetailsContainer,
} from './styles';
import {UsersData} from '../../model/user';

function UsersList({users, onClick}: UsersData) {
  return (
    <UserGrid>
      {users.map(user => (
        <UserCard key={user._id} onClick={() => onClick?.(user._id)}>
          <UserImage src={user.picture} alt={user.name} />
          <UserName>{user.name}</UserName>
          <UserDetailsContainer>
            <UserDetail>Age: {user.age}</UserDetail>
            <UserDetail>Eye Color: {user.eyeColor}</UserDetail>
            <UserDetail>Company: {user.company}</UserDetail>
            <UserDetail>Email: {user.email}</UserDetail>
          </UserDetailsContainer>
        </UserCard>
      ))}
    </UserGrid>
  );
}

export default UsersList;
