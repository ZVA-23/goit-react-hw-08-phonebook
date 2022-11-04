import {
  HomeWrapper,
  HomeTitle,
  HomeTitleText,
  HomeTitleBox,
  HomeLink,
  HomeTitleCurrent,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <HomeWrapper>
      <HomeTitle>
        Welcome to the <HomeTitleCurrent>phonebook</HomeTitleCurrent>
      </HomeTitle>
      <HomeTitleText>
        please
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </HomeTitleText>
      <HomeTitleBox>
        <HomeLink href="/goit-react-hw-08-phonebook/register" to="/register">
          Register
        </HomeLink>
        <HomeTitleText>or</HomeTitleText>
        <HomeLink href="/goit-react-hw-08-phonebook/login" to="/login">
          Log in
        </HomeLink>
      </HomeTitleBox>
    </HomeWrapper>
  );
};
export default HomePage;
