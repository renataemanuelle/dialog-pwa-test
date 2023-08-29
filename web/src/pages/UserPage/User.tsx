import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USER_DETAILS } from '../../graphql/queries';
import UserDetails from '../../components/UserDetails/UserDetails';
import UsersList from '../../components/UserList/UsersList';
import { User } from '../../model/user';
import { Container, BackButton } from './styles';

function UserPage() {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery(GET_USER_DETAILS, {
    variables: { id }
  });
  const navigate = useNavigate();


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user: User = data.user;

  return (
    <>
    <Container>
      <UserDetails user={user} />
      <BackButton onClick={() => navigate(-1)}>
        &larr; Go back
      </BackButton>
    </Container>
      
      <UsersList users={user.friends} title="Friends"/>
    </>
  );
}

export default UserPage;