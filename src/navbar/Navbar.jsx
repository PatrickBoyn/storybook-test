import React from 'react';
import { NavWrapper, ListItem, StyledLink, Title, List } from './navbarStyles';

const Navbar = () => {
  return (
    <NavWrapper>
      <List>
        <ListItem>
          <Title>
            <StyledLink href='#'>Test</StyledLink>
          </Title>
        </ListItem>
      </List>
    </NavWrapper>
  );
};

export default Navbar;
