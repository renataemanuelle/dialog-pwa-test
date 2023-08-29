import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_ALL_USERS, GET_FILTERED_USERS } from '../graphql/queries';
import UsersList  from '../components/UserList/UsersList';
import { useSearch } from '../contexts/SearchContext';



function Home() {
  const { searchValue } = useSearch();
  const { loading, error, data } = useQuery(GET_ALL_USERS);
  const [getFilteredUsers, { loading: loadingFiltered, error: errorFiltered, data: dataFiltered }] = useLazyQuery(GET_FILTERED_USERS);
  const [list, setList] = useState([])
  const navigate = useNavigate();

  const handleUserClick = (userId: string) => {
    navigate(`/user/${userId}`);
    window.scrollTo(0, 0);
  };

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

  useEffect(() => {
    if (searchValue) {
      getFilteredUsers({ variables: { name: searchValue } });
    } else {
      if (data && data.list) {
        setList(data.list);
      }
    }
  }, [searchValue, data, getFilteredUsers]);

  if (loading || loadingFiltered) return <p>Loading...</p>;
  if (error || errorFiltered) return <p>Error...</p>;

  return (
    <div>
      <UsersList users={list} onClick={handleUserClick}/>
    </div>
  );
}

export default Home;
