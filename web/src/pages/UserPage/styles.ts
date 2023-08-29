import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem 0;
  margin: auto
`;

export const BackButton = styled.div`
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 0;
  &:hover {
    background-color: #0AEA3E;
    border-radius: 5px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  }
`;