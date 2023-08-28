import React, { useEffect, useState } from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_ALL_USERS, GET_FILTERED_USERS } from '../graphql/queries';
import UsersList  from '../components/UserList/UsersList';
import { SearchBar } from '../components/SearchBar';
import { Button } from '../components/Button';
import Header from '../components/Header/Header';


function UsersPage() {
  const { loading, error, data } = useQuery(GET_ALL_USERS);
  const [getFilteredUsers, { loading: loadingFiltered, error: errorFiltered, data: dataFiltered }] = useLazyQuery(GET_FILTERED_USERS);
  const [searchName, setSearchName] = useState("");
  const [list, setList] = useState([])

  useEffect(() => {
    if (data && data.list) {
      setList(data.list);
    }
  }, [data]);

  useEffect(() => {
    if (dataFiltered && dataFiltered.list) {
      setList(dataFiltered.list);
    }
  }, [dataFiltered]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(event.target.value);
  }
  
  const handleSearchClick = () => {
    if(searchName) {
      getFilteredUsers({
        variables: { name: searchName }
      });
    }
  };
  

  if (loading || loadingFiltered) return <p>Loading...</p>;
  if (error || errorFiltered) return <p>Error...</p>;

  return (
    <div>
      <Header />
      <h1>Lista de Usuários</h1>
      <SearchBar
      type="text"
      placeholder="Pesquisar por nome..."
      value={searchName}
      onChange={handleSearchChange}
      />
      <Button onClick={handleSearchClick}>Buscar</Button>
      <UsersList users={list} />
    </div>
  );
}

export default UsersPage;
