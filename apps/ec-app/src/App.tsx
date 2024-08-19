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

const FixedTopNavigation = styled(TopNavigation)`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const FixedBottomNavigation = styled(BottomNavigation)`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
`;

const App: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <Router>
      {isMobile ? <HeaderNative /> : <Header />}
      {isMobile ? <FixedBottomNavigation /> : <FixedTopNavigation />}
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/postagens" element={<Postagens />} />
          <Route path="/membros" element={<Membros />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;