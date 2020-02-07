import React from 'react';
import Navbar from './Navbar';

export default {
  title: 'Navbar',
  component: Navbar
};

export const Login = () => <Navbar isLoggedIn={true} />;

export const Logout = () => <Navbar isLoggedIn={false} />;
