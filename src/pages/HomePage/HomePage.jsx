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
        <HomeLink href="/localhost:3000/register">Register</HomeLink>
        <HomeTitleText>or</HomeTitleText>
        <HomeLink>Log in</HomeLink>
      </HomeTitleBox>
    </HomeWrapper>
  );
};
export default HomePage;
