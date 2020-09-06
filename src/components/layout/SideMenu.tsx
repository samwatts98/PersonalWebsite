/* eslint-disable jsx-a11y/anchor-is-valid */
import styled, { css } from 'styled-components';
import React, { useState } from 'react';
import { pageLinks, PageLinkProps } from 'components/util/pageLinks';
import { THEME_TRANSITION, DESKTOP_MEDIA_QUERY } from './GlobalStyle';
import { FiMenu } from 'react-icons/fi';
import Link from 'next/link';

type ToggleProps = {
  expanded: boolean;
};

const SideMenuComponent = styled.nav<ToggleProps>`
  display: flex;
  position: fixed;
  padding: 1rem;
  top: 0;
  flex-direction: column;
  width: 100%;
  height: 3rem;

  ${({ expanded }) =>
    expanded
      ? css`
          height: fit-content;
        `
      : css`
          height: 3rem;
          > a {
            display: none;
          }
        `};

  ${DESKTOP_MEDIA_QUERY} {
    width: 3rem;
    height: 100vh;
    transition: width 0.2s ease-in, ${THEME_TRANSITION};

    > a {
      display: flex;
    }

    &:hover {
      width: 15rem;
      .menuItemName {
        font-weight: 400;
        opacity: 1;
        transition: opacity 0.2s ease-in 0.2s;
      }
    }
    .menuToggle {
      display: none;
    }
  }
`;

const SideMenuItemComponent = styled.a`
  display: flex;
  align-items: baseline;
  background-color: Transparent;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  width: min-content;
  padding: 0 0.5rem;
  transition: transform 0.2s, ${THEME_TRANSITION};
  text-decoration: none;

  .menuItemName {
    padding-left: 1rem;
  }

  ${DESKTOP_MEDIA_QUERY} {
    &:hover,
    &:focus-visible {
      transform: translateX(1rem);
    }
    .menuItemName {
      opacity: 0;
      transition: opacity 0.2s;
    }
  }

  svg {
    vertical-align: text-bottom;
  }
`;

const ToggleMenu = styled.button`
  background-color: Transparent;
  border: none;
  outline: none;
  width: min-content;
  height: min-content;
  justify-self: center;
  padding-left: 0.5rem;
  svg {
    margin: 0.5rem 0;
  }
`;

function SideMenuItem(props: PageLinkProps & { onClick: () => void }): React.ReactElement {
  return (
    <Link {...props} passHref>
      <SideMenuItemComponent>
        <p className="menuIcon">
          <props.MenuIcon />
        </p>
        <h2 className="menuItemName">{props.text}</h2>
      </SideMenuItemComponent>
    </Link>
  );
}

export function SideMenu({ children }: { children?: React.ReactNode }): React.ReactElement {
  const [expanded, setExpanded] = useState(false);
  const onClick = (): void => {
    setExpanded((e) => !e);
  };
  return (
    <SideMenuComponent expanded={expanded}>
      <ToggleMenu onClick={onClick} className="menuToggle" aria-label="toggle menu">
        <FiMenu />
      </ToggleMenu>
      {children}
      {pageLinks.map((link) => (
        <SideMenuItem key={link.text} {...link} onClick={onClick} />
      ))}
    </SideMenuComponent>
  );
}
