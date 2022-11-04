import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavList = styled.ul`
  display: flex;
`;

export const AuthNavItem = styled.li`
  margin-right: 35px;
  &:last-child {
    margin-right: 0;
  }
`;

export const AuthNavLink = styled(NavLink)`
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--main-text-color);
  transition: color var(--main-hover-animation);
  :hover,
  :focus {
    color: #cccccc;
  }
  &.active {
    color: var(--accent-text-color);
  }
`;
