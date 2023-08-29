import React from 'react';
import {
  UserDetailsContainer,
  UserImage,
  UserDetail,
  UserDetailsInfo,
  UserName,
} from './styles';
import {UserDetailsProps} from '../../model/user';

function UserDetails({user}: UserDetailsProps) {
  return (
    <UserDetailsContainer>
      <UserImage src={user.picture} alt={user.name} />

      <UserDetailsInfo>
        <UserName>{user.name}</UserName>
        <UserDetail>Age: {user.age}</UserDetail>
        <UserDetail>Email: {user.email}</UserDetail>
        <UserDetail>{user.greeting}</UserDetail>
      </UserDetailsInfo>
    </UserDetailsContainer>
  );
}

export default UserDetails;
