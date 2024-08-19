import React from 'react';
import { Card, Typography, CardContent, Container, Grid } from '@mui/material';
import styled from 'styled-components';


const MainCard = styled(Card)`
  width: 300px;
  margin: 16px;
  padding: 16px;
`;

const MessageCard = styled(Card)`
  border-radius: 50%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: white;
  text-align: center;
  margin-bottom: 24px;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
`;

const postData = [
  { user: 'Alice Johnson', message: 'Essa é uma mensagem de exemplo.' },
  { user: 'Bob Smith', message: 'Outra mensagem aqui para testar.' },
  { user: 'Charlie Brown', message: 'Mensagem adicional para verificação.' },
];

const Postagens: React.FC = () => {
  return (
    <Container>
      <Title id='titlePost'>
        Postagens
      </Title>
      <Grid container spacing={2}>
        {postData.map((post, index) => (
          <Grid item key={index}>
            <MainCard>
              <CardContent>
                <Typography variant="h6">Usuário: {post.user}</Typography>
                <Typography variant="body2">Mensagem:</Typography>
                <MessageCard>
                  <Typography variant="body2">{post.message}</Typography>
                </MessageCard>
              </CardContent>
            </MainCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Postagens;
