import React, { useState } from 'react';
import { Container, SearchBar, Title } from './styles';


function Header() {

  const [searchName, setSearchName] = useState("");
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchName(event.target.value);
    }

  return (
    <Container>
      <Title>MySocial</Title>
      <SearchBar
      type="text"
      placeholder="search..."
      value={searchName}
      onChange={handleSearchChange}
      /> 
    </Container>

  )
}

export default Header;
