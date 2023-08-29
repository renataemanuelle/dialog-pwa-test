import styled from 'styled-components';

interface UserCardProps {
  $clickable?: boolean;
}

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  max-width: 1200px;
`;

export const UserContainer = styled.div`
  margin: auto;
  max-width: 1200px;
`;

export const UserGrid = styled.div`
  padding: 10px;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  } 
`;

export const UserCard = styled.div<UserCardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e1e1e1;
  padding: 1rem;
  border-radius: 8px;
  transition: 0.3s ease-in-out;
  text-decoration: none;
  color: inherit;
  width: auto;
  max-width: 300px;

  ${props => props.$clickable && `
    &:hover {
      background-color: #7be694;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    }
  `}
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
  color: #333;
`;