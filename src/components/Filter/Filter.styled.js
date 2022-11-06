import styled from '@emotion/styled';

export const FilterTitle = styled.h2`
  font-size: 26px;
  text-transform: uppercase;
  font-weight: 800;
  color: var(--main-text-color);
  margin-bottom: 30px;
`;

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const FilterTitleInput = styled.span`
  font-weight: 600;
  color: var(--main-text-color);
  margin-bottom: 5px;
`;

export const FilterInput = styled.input`
  height: 40px;
  max-width: 600px;
  padding: 0 10px 0 10px;
  border: 1px solid var(--second-bg-color);
  outline: none;
  color: var(--main-text-color);
  font-size: 14px;
  :focus {
    border-color: var(--accent-bg-color);
  }
  ::placeholder {
    font-size: 12px;
    color: var(--main-text-color);
  }
`;
