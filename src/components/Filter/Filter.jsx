import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { Container } from '../Container/Container';
import {
  FilterLabel,
  FilterTitle,
  FilterTitleInput,
  FilterInput,
} from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const handelFilter = ({ target: { value } }) =>
    dispatch(setFilter(value.toLowerCase()));

  return (
    <Container>
      <FilterLabel>
        <FilterTitle>Contacts</FilterTitle>
        <FilterTitleInput>Find contacts by name</FilterTitleInput>
        <FilterInput
          type="text"
          name="filter"
          required
          onChange={evt => handelFilter(evt)}
          placeholder="Enter name for search"
        />
      </FilterLabel>
    </Container>
  );
};
