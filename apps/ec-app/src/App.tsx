import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from 'layout-ecapp';
import { HeaderNative } from 'layout-ecapp';
import { Button } from 'ui-ecapp';
import { TopNavigation } from 'layout-ecapp';
import { BottomNavigation } from 'layout-ecapp';
import Postagens from './pages/Postagens';
import Membros from './pages/Membros';
import Home from './pages/Home';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const Container = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
`;

const App: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <Router>
      {isMobile ? <HeaderNative /> : null}
      {isMobile ? <BottomNavigation /> : <TopNavigation />}
      <Container>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/postagens" element={<Postagens />} />
          <Route path="/" element={<Membros />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;