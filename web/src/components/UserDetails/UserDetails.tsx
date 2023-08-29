import React from 'react';
import { UserDetailsContainer, UserImage, UserDetail } from './styles';
import { UserDetailsProps } from '../../model/user';

function UserDetails({ user }: UserDetailsProps ) {

  return (
    <UserDetailsContainer>
      <UserImage src={user.picture} alt={user.name} />
      <UserDetail><strong>age:</strong> {user.age}</UserDetail>
      <UserDetail><strong>email:</strong> {user.email}</UserDetail>
      <UserDetail><strong>{user.greeting}</strong></UserDetail>
    </UserDetailsContainer>
  );
}

export default UserDetails;