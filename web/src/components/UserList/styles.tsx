import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UsersList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const UserItem = styled.li`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #e1e1e1;
`;



export const UserGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const UserCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e1e1e1;
  padding: 1rem;
  border-radius: 8px;
  transition: 0.3s ease-in-out;
  text-decoration: none;
  color: inherit;
  max-width: 300px;
  
  &:hover {
    background-color: #0AEA3E;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const UserImage = styled.img`
  width: 100%;
  max-width: 180px;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
`;

export const UserName = styled.h2`
  font-weight: bold;
  margin: 10px 0;
`;

export const UserDetailsContainer = styled.div`
  align-self: stretch; 
  text-align: left;
`;

export const UserDetail = styled.p`
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #333;
`;