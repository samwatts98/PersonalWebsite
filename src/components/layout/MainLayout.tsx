import React from 'react';
import styled from 'styled-components';
import { Title } from 'components/Title';
import { Light, Dark } from 'components/common/Themes';
import { FiMoon, FiSun } from 'react-icons/fi';
import { SideMenu } from 'components/layout/SideMenu';

type Theme = typeof Light | typeof Dark;

type MainLayoutProps = {
  children?: React.ReactNode;
  handleDarkModeChange: () => void;
  darkMode: boolean;
};

const MainSection = styled.main`
  margin-left: 5rem;
  padding-left: 1rem;
  height: 100%;
`;

const HeaderSection = styled.header`
  margin-left: 5rem;
  padding: 1rem 0 1rem 1rem;
  display: flex;
  justify-content: space-around;
`;

const ThemeToggle = styled.button`
  margin: 1rem;
  background-color: Transparent;
  border: none;
  font-size: 2.5rem;
  outline: none;
  &:active {
    background-color: Transparent;
  }
`;

const MainLayout = ({ children, handleDarkModeChange, darkMode }: MainLayoutProps): React.ReactElement => (
  <>
    <SideMenu />
    <HeaderSection>
      <Title>Hello World 2</Title>
      <ThemeToggle onClick={handleDarkModeChange}>{darkMode ? <FiMoon /> : <FiSun />}</ThemeToggle>
    </HeaderSection>
    <MainSection>{children}</MainSection>
  </>
);

export default MainLayout;
