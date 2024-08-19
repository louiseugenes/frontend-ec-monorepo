import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';
import styled from 'styled-components';
import axios from 'axios';
import { Loader } from 'ui-ecapp';
import { TextAnimation } from 'ui-ecapp';

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

const FixedSizeCard = styled.div`
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px;
  background-color: gray;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: white;
  font-wight: bold;
`;

const CenteredContainerLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

interface LoaderProps {
  loading: boolean;
}

const Membros: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/members');
        setMembers(response.data);
      } catch (error) {
        console.error('Error fetching members', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const filteredMembers = members.filter(member =>
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
    <TextAnimation animating={animating}>
        Membros
    </TextAnimation>
    {!animating && <Title id="Member-title">Membros</Title>}
    {loading ? (
      <CenteredContainerLoader>
        <Loader loading={loading} />
      </CenteredContainerLoader>
    ) : (
      <>
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
      </>
    )}
  </Container>
);
};

export default Membros;
