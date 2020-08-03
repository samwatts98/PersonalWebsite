import React from 'react';
import { HasChildren } from 'types/common';

export function Home({ children }: HasChildren): React.ReactElement {
  return (
    <div>
      <h1>Homepage!</h1>
      {children}
    </div>
  );
}
