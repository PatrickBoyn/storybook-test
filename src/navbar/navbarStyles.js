import styles from 'styled-components';

export const NavWrapper = styles.nav`
    display: flex;
    background-color: #242424;
`;

export const Title = styles.h2``;

export const List = styles.ul``;

export const ListItem = styles.li`
    list-style: none;
`;

export const StyledLink = styles.a`
    text-decoration: none;
    color: white;

    &:hover {
        color: #ddd;
    }
`;
