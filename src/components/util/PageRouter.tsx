import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { NoMatch } from 'components/pages/NoMatch';

import { FiHome, FiUser, FiCode, FiCamera } from 'react-icons/fi';
import { Photography } from 'components/pages/Photography';
import { Home } from 'components/pages/Home';
import { IconType } from 'react-icons/lib';
import { ReactElement } from 'react';
import { HasChildren } from 'types/common';
import { Projects } from '../pages/Projects';
import { Contact } from '../pages/Contact';

export interface PageLinkProps {
  MenuIcon: IconType;
  text: string;
  to: string;
  Page: (props: HasChildren) => ReactElement;
}
export const pageLinks: Array<PageLinkProps> = [
  { text: 'Home', MenuIcon: FiHome, to: '/', Page: Home },
  { text: 'Photography', MenuIcon: FiCamera, to: '/photography', Page: Photography },
  { text: 'Projects', MenuIcon: FiCode, to: '/projects', Page: Projects },
  { text: 'Contact', MenuIcon: FiUser, to: '/contact', Page: Contact },
];

export const PageRouter = (): React.ReactElement => (
  <Switch>
    {pageLinks.map((link) => (
      <Route exact path={link.to} key={link.to} component={link.Page} />
    ))}

    <Route path="/404" component={NoMatch} />
    <Redirect to="/404" />
  </Switch>
);
