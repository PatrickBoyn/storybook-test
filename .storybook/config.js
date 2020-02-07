import React from 'react';
import { GlobalStyle } from '../src/styles/globalStyles';
import { addDecorator } from '@storybook/react';

addDecorator(storyFn => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
));
