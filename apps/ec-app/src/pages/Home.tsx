import React from 'react';
import style from 'styled-components';

const Title = style.h1`
  font-size: 2.5rem;
  color: white;
  font-weight: bold;
`;

const TextContent = style.p`
  font-size: 1.5rem;
  color: white;
  margin-top: 30px;
`;

const Container = style.div`
  padding: 10px;
  text-align: center;
  color: white;
  margin-left: 10px;
  width: 100%;
`;


const Home: React.FC = () => {
  return (
    <Container>
      <Title>Bem-vindo à EcApp</Title>
      <TextContent>Esta é a página inicial</TextContent>
    </Container>
  );
};

export default Home;
