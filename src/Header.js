/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import { colors } from "./global-style";
import Authentication from "./Authentication";

const Header = styled.header`
  background-color: ${colors.contrast};
  color: ${colors.default};
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2em;
`;

const Nav = styled.ul`
  margin-left: 10px;
  flex-grow: 1;
`;

const NavItem = styled.li`
  display: inline-block;
  margin-left: 10px;
  cursor: pointer;
`;

const HomeLink = styled.a`
  cursor: pointer;
`;

const Link = styled.a`
  cursor: pointer;

  &.active {
    text-decoration: underline;
  }
`;

export default ({ pages, selectedPage, selectPage }) => {
  const links = pages.map(({ name, slug }) => (
    <NavItem key={slug}>
      <Link
        title={name}
        onClick={() => selectPage(slug)}
        className={selectedPage === slug ? "active" : ""}
      >
        {name}
      </Link>
    </NavItem>
  ));
  return (
    <Header>
      <HomeLink title="home" onClick={() => selectPage("home")}>
        <Title>byom</Title>
      </HomeLink>
      <Nav>{links}</Nav>
      <Authentication />
    </Header>
  );
};
