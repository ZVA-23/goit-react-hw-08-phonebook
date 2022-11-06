import styled from '@emotion/styled';

export const ContactLi = styled.ul`
  gap: 20px;
`;

export const ContactItem = styled.li`
  display: flex;
  gap: 15px;
  align-items: center;
  max-width: 320px;
  border-bottom: 1px solid #2a363b;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ContacName = styled.span`
  font-weight: 700;
  color: var(--main-text-color);
  margin-right: 10px;
`;

export const ContactListBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 20px;
  padding-right: 5px;
  padding-left: 5px;
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
  @media screen and (min-width: 768px) {
    width: 50px;
  }
`;
