import React from 'react';
import { List, ListItem, StyledLink } from '../navbarStyles';

const LoggedOut = () => {
  return (
    <List>
      <ListItem>
        <StyledLink href='#'>Login</StyledLink>
      </ListItem>
    </List>
  );
};

export default LoggedOut;
