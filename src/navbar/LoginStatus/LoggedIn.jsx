import React from 'react';
import { List, ListItem, StyledLink } from '../navbarStyles';

const LoggedIn = () => {
  return (
    <List>
      <ListItem>
        <StyledLink href='#'>List of Users</StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink href='#'>Logout</StyledLink>
      </ListItem>
    </List>
  );
};

export default LoggedIn;
