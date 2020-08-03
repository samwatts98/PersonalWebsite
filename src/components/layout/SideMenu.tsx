import styled, { keyframes } from 'styled-components';
import React from 'react';
import { pageLinks, PageLinkProps } from 'components/pages/PageRouter';
import { themeTransition } from './GlobalStyle';
import { Link } from 'react-router-dom';

const slideOutEffect = keyframes`
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(1rem);
  }
`;

const SideMenuComponent = styled.nav`
  position: fixed;
  top: 0;
  padding: 3rem 1rem 0 1rem;
  width: 3rem;
  height: 100vh;
  transition: width 0.2s ease-in, ${themeTransition};

  &:hover {
    width: 15rem;
    .menuItemName {
      opacity: 1;
      transition: opacity 0.2s ease-in 0.2s;
    }
  }
`;

const SideMenuItemComponent = styled(Link)`
  display: flex;
  align-items: baseline;
  background-color: Transparent;
  border: none;
  outline: none;
  border-radius: 0.25rem;
  width: min-content;

  .menuItemName {
    padding: 0 1rem;
    opacity: 0;
    transition: opacity 0.2s;
  }
  .menuIcon {
    background-color: Transparent;
    border: none;
    outline: none;
    svg {
      vertical-align: text-bottom;
    }
  }
  &:hover,
  &:focus {
    animation: ${slideOutEffect} ease-out 0.2s forwards;
  }
`;

function SideMenuItem({ MenuIcon, text, to }: PageLinkProps): React.ReactElement {
  return (
    <SideMenuItemComponent to={to} aria-label={text}>
      <button disabled className="menuIcon">
        <MenuIcon size={'2rem'} />
      </button>
      <h2 className="menuItemName">{text}</h2>
    </SideMenuItemComponent>
  );
}

export function SideMenu(): React.ReactElement {
  return (
    <SideMenuComponent>
      {pageLinks.map((link) => (
        <SideMenuItem key={link.text} {...link} />
      ))}
    </SideMenuComponent>
  );
}
