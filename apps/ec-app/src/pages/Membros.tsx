import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';
import styled from 'styled-components';

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  box-sizing: border-box;
  border: 2px solid white;
  border-radius: 4px;
  background-color: transparent;
  color: white;
  font-size: 16px;

  &::placeholder {
    color: white;
  }

  &:focus {
    outline: none;
    border-color: white;
  }
`;

const memberData = [
  { name: 'Alice Johnson', username: 'alicej', email: 'alice@example.com' },
  { name: 'Bob Smith', username: 'bobsmith', email: 'bob@example.com' },
  { name: 'Charlie Brown', username: 'charlieb', email: 'charlie@example.com' },
];

const FixedSizeCard = styled(Card)`
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px; /* Margem fixa entre os cartões */
`;

const Membros: React.FC = () => {
  const [search, setSearch] = useState<string>('');

  const filteredMembers = memberData.filter(member =>
    member.name.toLowerCase().includes(search.toLowerCase()) ||
    member.username.toLowerCase().includes(search.toLowerCase()) ||
    member.email.toLowerCase().includes(search.toLowerCase())
  );

  const Title = styled.h1`
  font-size: 2rem;
  color: white;
  text-align: center;
  margin-bottom: 24px;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
`;
  
  return (
    <Container>
      <Title id="Member-title">
        Membros
      </Title>
      <SearchInput
        type="text"
        placeholder="Pesquisar membros..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Grid container spacing={2} marginTop={2} justifyContent="center">
        {filteredMembers.map((member, index) => (
          <Grid item key={index}>
            <FixedSizeCard>
              <CardContent>
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="body2">Usuário: {member.username}</Typography>
                <Typography variant="body2">E-mail: {member.email}</Typography>
              </CardContent>
            </FixedSizeCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Membros;
