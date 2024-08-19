import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TextAnimation } from 'ui-ecapp';
import { useState } from 'react';


const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin-left: 10px;
`;

const HeaderText = styled.h1`
  color: white;
`;

const Header: React.FC = () => {
  const [animating, setAnimating] = useState(true);
  
  return (
    <HeaderContainer>
      <TextAnimation animating={animating}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            EcApp
          </Link>
      </TextAnimation>
    </HeaderContainer>
  );
};

export default Header;