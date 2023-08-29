import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center; 
  justify-content: space-between;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

export const SearchLabel = styled.label`
  display: none;
`;

export const SearchBar = styled.input`
  flex: 1;
  padding: 10px 15px;
  margin-left: 20px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 16px;
`;