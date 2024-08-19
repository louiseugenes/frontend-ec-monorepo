import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin-left: 10px;
`;

const HeaderText = styled.h1`
  font-size: 2.5rem;
  color: white;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <HeaderText>EcApp</HeaderText>
      </Link>
    </HeaderContainer>
  );
};

export default Header;