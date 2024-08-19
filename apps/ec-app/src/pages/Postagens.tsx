import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Typography, CardContent, Container, Grid } from '@mui/material';
import styled from 'styled-components';
import { Loader } from 'ui-ecapp';
import { TextAnimation } from 'ui-ecapp';


const MainCard = styled.div`
  width: 300px;
  margin: 16px;
  padding: 16px;
  background-color: gray;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: white;
  font-weight: bold;
`;

const MessageCard = styled.div`
  border-radius: 10%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  background-color: white;
  color: black;
  text-align: center;
  font-weight: bold;
  width: 200px;
  height: 100px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: white;
  text-align: center;
  margin-bottom: 24px;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
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

const Postagens: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);


  return (
    <Container>
      <TextAnimation animating={animating}>
          Postagens
      </TextAnimation>
      {!animating && <Title id="Member-title">Membros</Title>}
      {loading ? (
        <CenteredContainerLoader>
        <Loader loading={loading} />
        </CenteredContainerLoader>
      ) : (
        <Grid container spacing={2}>
          {posts.map((post, index) => (
            <Grid item key={index}>
              <MainCard>
                <CardContent>
                  <Typography variant="h6">Usuário: {post.member.username}</Typography>
                  <Typography variant="body2">Mensagem:</Typography>
                  <MessageCard>
                    <Typography variant="body2">{post.message}</Typography>
                  </MessageCard>
                </CardContent>
              </MainCard>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Postagens;
