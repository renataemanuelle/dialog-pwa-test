import React, { useState } from 'react';
import { Container, SearchBar, Title, SearchLabel } from './styles';

function Header() {
  const [searchName, setSearchName] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(event.target.value);
  }

  return (
    <Container>
      <Title>MySocial</Title>
      <SearchLabel htmlFor="searchBar">Search:</SearchLabel>
      <SearchBar
        id="searchBar"
        type="text"
        placeholder="search..."
        value={searchName}
        onChange={handleSearchChange}
      />
    </Container>
  )
}

export default Header;
