import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USER_DETAILS } from '../graphql/queries';
import UserDetails from '../components/UserDetails/UserDetails';
import UsersList from '../components/UserList/UsersList'; // Vamos renomear para ser mais genérico.
import { User } from '../model/user';

function UserPage() {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery(GET_USER_DETAILS, {
    variables: { id }
  });


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user: User = data.user;

  return (
    <>
      <UserDetails user={user} />
      <UsersList users={user.friends} title="Friends"/>
    </>
  );
}

export default UserPage;