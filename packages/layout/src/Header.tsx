import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TextAnimation } from 'ui-ecapp';
import { useState } from 'react';

const HeaderContainer = styled.header`
  padding: 10px;
  text-align: center;
  color: white;
  margin-left: 10px;
  width: 100%;

  h1 {
    margin: 0;
  }
`;

const Header: React.FC = () => {
  const [animating, setAnimating] = useState(true);

  return (
    <HeaderContainer>
      <h1>
      <TextAnimation animating={animating}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            EcApp
          </Link>
      </TextAnimation>
      </h1>
    </HeaderContainer>
  );
};

export default Header;
