import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: gray;
  padding: 10px;
  width: 100%;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  margin: auto;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const TopNavigation: React.FC = () => {
  return (
    <Nav>
      <NavLink to="/postagens">Postagens</NavLink>
      <NavLink to="/membros">Membros</NavLink>
    </Nav>
  );
};

export default TopNavigation;