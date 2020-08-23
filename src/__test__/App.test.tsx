import React from 'react';
import renderer from 'react-test-renderer';
import { ToggleThemeButton } from 'components/layout/ToggleThemeButton';
import { FiHome, FiCode } from 'react-icons/fi';

it('renders', () => {
  let icon = FiHome;
  const getIcon = () => {
    icon = icon === FiHome ? FiCode : FiHome;
  };

  const tree = renderer.create(<ToggleThemeButton handleClick={getIcon} Icon={icon} />);
  expect(tree).toMatchSnapshot();
});
'';
