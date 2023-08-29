import styled from 'styled-components';

export const UserDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  padding: 1rem;
  position: relative
`;

export const UserImage = styled.img`
  width: 150px; 
  height: 150px;
  border-radius: 15px; 
  object-fit: cover; 
  margin-right: 1rem; 
`;

export const UserDetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserName = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const UserDetail = styled.p`
  font-size: 1rem;
  margin: 0.2rem 0;
`;

export const UserGreetings = styled.p`
  font-size: 1rem;
  margin: 0.2rem 0;
`;