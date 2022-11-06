import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import { Wrapper, UsermenuText, UsermenuBtn } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user: name } = useAuth();

  return (
    <Wrapper>
      <UsermenuText>Welcome, {name}</UsermenuText>
      <UsermenuBtn type="button" onClick={() => dispatch(logout())}>
        Logout
      </UsermenuBtn>
    </Wrapper>
  );
};
