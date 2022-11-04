// .wrapper {
//     display: flex;
//     align-items: center;
//     gap: 12px;
// }

// .username {
//     font-weight: 700;
// }

import styled from '@emotion/styled';
// import { BiUser } from 'react-icons/bi';

export const Wrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
  }
`;

export const UsermenuWrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 1440px) {
    margin-bottom: 20px;
  }
`;

// export const UserIcon = styled(BiUser)`
//   background-color: var(--accent-text-color);
//   color: var(--second-text-color);
//   padding: 10px;
//   border-radius: 50%;
// `;

export const UsermenuTextWrapper = styled.div`
  margin-left: 25px;
  margin-right: 25px;
`;

export const UsermenuText = styled.p`
  font-weight: 700;
  margin-bottom: 5px;
`;

export const UsermenuUserName = styled.span`
  color: var(--accent-text-color);
`;

export const UsermenuEmail = styled.p`
  font-size: 14px;
  color: #cccccc;
`;

export const UsermenuBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  padding: 0 20px 0 20px;
  background-color: var(--accent-bg-color);
  color: var(--second-text-color);
  font-family: inherit;
  border: none;
  cursor: pointer;
  transition: background-color var(--main-hover-animation);
  :hover,
  :focus {
    background-color: var(--second-bg-color);
  }
  @media screen and (max-width: 1439px) {
    width: 100%;
  }
`;
