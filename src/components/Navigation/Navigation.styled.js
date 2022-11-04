import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NaviList = styled.ul`
  display: flex;
`;

export const NaviItem = styled.li`
  margin-right: 15px;
  &:last-child {
    margin-right: 0;
  }
`;

export const NaviLink = styled(NavLink)`
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--main-text-color);
  /* color: var(--main-hover-animation); */
  transition: color var(--main-hover-animation);
  :hover,
  :focus {
    color: #cccccc;
  }
  &.active {
    color: var(--accent-text-color);
  }
`;
