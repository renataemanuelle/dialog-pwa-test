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

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin: 0;
  color: #0AEA3E;
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

export const ClearButton = styled.button`
  position: absolute;
  right: 10px; 
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  z-index: 10;
`;