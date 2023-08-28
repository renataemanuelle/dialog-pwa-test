import React, { useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';
import { Container, SearchBar, Title, SearchLabel } from './styles';
import { useSearch } from '../../contexts/SearchContext';

function Header() {
  const { searchValue, setSearchValue } = useSearch();
  const [localSearchValue, setLocalSearchValue] = useState(searchValue)
  const searchTimeoutRef = useRef<number | null>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setLocalSearchValue(event.target.value);
  };

  const handleSearchSubmit = () => {
    setSearchValue(localSearchValue);
  }

  useEffect(() => {
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);

    searchTimeoutRef.current = window.setTimeout(() => {
        setSearchValue(localSearchValue);
    }, 500);

    return () => {
        if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    };
  }, [localSearchValue]);

  useEffect(() => {
    setLocalSearchValue(searchValue);
  }, [searchValue]);

  return (
    <Container>
      <Title>MySocial</Title>
      <SearchLabel htmlFor="searchBar">Search:</SearchLabel>
      <SearchBar
        id="searchBar"
        type="text"
        placeholder="search..."
        value={localSearchValue}
        onChange={handleSearchChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSearchSubmit();
        }}
      />
    </Container>
  )
}

export default Header;
