import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  padding: 10px;
  text-align: center;
  color: white;
  margin-left: 10px;
  width: 100%;

  h1 {
    margin: 0;
    font-size: 2.5rem;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <h1>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          EcApp
        </Link>
      </h1>
    </HeaderContainer>
  );
};

export default Header;
