import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { useLocation } from 'react-router-dom';
import { Container } from '../Container/Container';
import { WrapHeader } from './AppBar.styled';
import { Logo } from '../Logo/Logo';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const locatiom = useLocation();

  return (
    <Container>
      <WrapHeader>
        {!locatiom.pathname.includes(`details`) && <Navigation />}
        <Logo />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </WrapHeader>
    </Container>
  );
};
