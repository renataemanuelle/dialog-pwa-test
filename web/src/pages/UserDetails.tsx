import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USER_DETAILS } from '../graphql/queries';
import { UserDetailsContainer, UserImage, UserDetail } from '../components/UserDetails';
import { Title } from '../components/Title';
import { UserItem, UsersList } from '../components/UsersList';
import { Friend } from '../model/user';

function UserDetails() {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery(GET_USER_DETAILS, {
    variables: { id }
  });


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user = data.user;

  return (
    <UserDetailsContainer>
      <Title>Detalhes do Usuário: {user.name}</Title>
      <UserImage src={user.picture} alt={user.name} />
      <UserDetail><strong>Idade:</strong> {user.age}</UserDetail>
      <UserDetail><strong>Cor dos Olhos:</strong> {user.eyeColor}</UserDetail>
      <UserDetail><strong>Empresa:</strong> {user.company}</UserDetail>
      <UserDetail><strong>Email:</strong> {user.email}</UserDetail>
      <UserDetail><strong>Telefone:</strong> {user.phone}</UserDetail>
      <UserDetail><strong>Saudação:</strong> {user.greeting}</UserDetail>
      <h3>Amigos:</h3>
      <UsersList>
        {user.friends && user.friends.map((friend: Friend) => (
          <UserItem key={friend._id}>
            <UserImage src={friend.picture} alt={friend.name} />
            <UserDetail><strong>Name:</strong> {friend.age}</UserDetail>
            <UserDetail><strong>Age:</strong> {friend.age}</UserDetail>
            <UserDetail><strong>Eye Color:</strong> {friend.eyeColor}</UserDetail>
            <UserDetail><strong>Empresa:</strong> {friend.company}</UserDetail>
            <UserDetail><strong>Email:</strong> {friend.email}</UserDetail>
            <UserDetail><strong>Telefone:</strong> {friend.phone}</UserDetail>
          </UserItem>
        ))}
      </UsersList>
    </UserDetailsContainer>
  );
}

export default UserDetails;