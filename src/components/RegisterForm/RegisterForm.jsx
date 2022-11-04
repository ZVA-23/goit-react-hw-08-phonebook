import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import {
  RegisterTitle,
  RegisterLabel,
  RegisterTitleInput,
  RegisterInput,
  RegisterFormBtn,
} from './RegisterForm.styled';
import { Container } from '../Container/Container';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <RegisterTitle>Registration</RegisterTitle>
      <form onSubmit={handleSubmit} autoComplete="off">
        <RegisterLabel>
          <RegisterTitleInput>Username</RegisterTitleInput>
          <RegisterInput type="text" name="name" />
        </RegisterLabel>
        <RegisterLabel>
          <RegisterTitleInput>Email</RegisterTitleInput>
          <RegisterInput type="email" name="email" />
        </RegisterLabel>
        <RegisterLabel>
          <RegisterTitleInput>Password</RegisterTitleInput>
          <RegisterInput type="password" name="password" />
        </RegisterLabel>
        <RegisterFormBtn type="submit">Register</RegisterFormBtn>
      </form>
    </Container>
  );
};
