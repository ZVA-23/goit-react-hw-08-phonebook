import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import { Container } from '../Container/Container';
import {
  LoginTitle,
  LoginLabel,
  LoginTitleInput,
  LoginInput,
  LoginFormBtn,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <LoginTitle>Login</LoginTitle>
      <form onSubmit={handleSubmit} autoComplete="off">
        <LoginLabel>
          <LoginTitleInput>Email</LoginTitleInput>
          <LoginInput type="email" name="email" />
        </LoginLabel>
        <LoginLabel>
          <LoginTitleInput>Password</LoginTitleInput>
          <LoginInput type="password" name="password" />
        </LoginLabel>
        <LoginFormBtn type="submit">Log In</LoginFormBtn>
      </form>
    </Container>
  );
};
