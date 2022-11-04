import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import {
  Wrapper,
  UsermenuWrapper,
  // UserIcon,
  // UsermenuTextWrapper,
  UsermenuText,
  // UsermenuUserName,
  // UsermenuEmail,
  UsermenuBtn,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  console.log(user);

  return (
    <Wrapper>
      <UsermenuWrapper>
        <UsermenuText>
          Welcome, {user.name}
          {/* {user.email} */}
        </UsermenuText>
        {/* <Email>{userEmail}</Email> */}
      </UsermenuWrapper>
      <UsermenuBtn type="button" onClick={() => dispatch(logout())}>
        Logout
      </UsermenuBtn>
    </Wrapper>
  );
};
