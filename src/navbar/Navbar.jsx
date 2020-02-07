import React from 'react';
import { NavWrapper, ListItem, StyledLink, Title, List } from './navbarStyles';
import LoggedIn from '../navbar/LoginStatus/LoggedIn';
import LoggedOut from '../navbar/LoginStatus/LoggedOut';

const Navbar = props => {
  return (
    <NavWrapper>
      <List>
        <ListItem>
          <Title>
            <StyledLink href='#'>My App</StyledLink>
          </Title>
        </ListItem>
        {props.isLoggedIn ? <LoggedIn /> : <LoggedOut />}
      </List>
    </NavWrapper>
  );
};

export default Navbar;
