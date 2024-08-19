import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TextAnimationNav } from 'ui-ecapp';
import { useState } from 'react';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  background-color: gray;
  padding: 0px;
  width: 100%;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  margin: auto;
  font-weight: bold;
  margin-right: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const NewTextAnimation = styled(TextAnimationNav)`
  font-size: 10px;
  text-align: left;
  justify-content: center;
`;

const TopNavigation: React.FC = () => {
  const [animating, setAnimating] = useState(true);

  return (
    <Nav>
      <NewTextAnimation animating={animating}>
          <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
            EcApp
          </NavLink>
      </NewTextAnimation>
      <NavLink to="/postagens">Postagens</NavLink>
      <NavLink to="/">Membros</NavLink>
    </Nav>
  );
};

export default TopNavigation;