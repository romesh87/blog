import React from 'react';

export interface IGuardedPage extends React.FC {
  auth: boolean;
}
