import { useAuth } from 'hooks';
import { NaviList, NaviItem, NaviLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <NaviList>
      <NaviItem>
        <NaviLink to="/">Home</NaviLink>
      </NaviItem>
      {isLoggedIn && (
        <NaviItem>
          <NaviLink to="/contacts">Contacts</NaviLink>
        </NaviItem>
      )}
    </NaviList>
  );
};
