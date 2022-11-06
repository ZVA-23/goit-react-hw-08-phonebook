import styled from '@emotion/styled';

export const Wrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    gap: 15px;
  }
`;

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
