import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: gray;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

const BottomNavigation: React.FC = () => {
  return (
    <Nav>
      <NavLink to="/postagens">Postagens</NavLink>
      <NavLink to="/membros">Membros</NavLink>
    </Nav>
  );
};

export default BottomNavigation;