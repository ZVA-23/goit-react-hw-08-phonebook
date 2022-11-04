import { AuthNavList, AuthNavItem, AuthNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavList>
      <AuthNavItem>
        <AuthNavLink to="/register">Register</AuthNavLink>
      </AuthNavItem>
      <AuthNavItem>
        <AuthNavLink to="/login">Login</AuthNavLink>
      </AuthNavItem>
    </AuthNavList>
  );
};
