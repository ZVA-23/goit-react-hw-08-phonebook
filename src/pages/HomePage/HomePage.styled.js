import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HomeWrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 15px;
`;

export const HomeTitle = styled.h1`
  font-weight: 800;
  font-size: 48;
  text-align: center;
  margin: 0px;
`;

export const HomeTitleCurrent = styled.span`
  color: var(--accent-text-color);
`;

export const HomeTitleText = styled.h2`
  font-weight: 500;
  font-size: 48;
  text-align: center;
  margin: 0px;
`;

export const HomeTitleBox = styled.div`
  align-items: center;
  column-gap: 20px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const HomeLink = styled(Link)`
  color: var(--main-text-color);
  font-size: 30px;
  font-weight: 800;
  transition-duration: 800ms;
  :hover,
  :focus,
  &.active {
    color: #cccccc;
    margin-right: 20px;
    font-size: 35px;
    text-shadow: 0px 2px 1px rgb(178 146 171);
    font-weight: 800;
    transform: scale(1.1);
  }
`;
