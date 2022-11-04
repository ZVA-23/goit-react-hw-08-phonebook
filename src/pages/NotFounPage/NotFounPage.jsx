import { Link } from 'react-router-dom';

const NotFounPage = () => {
  return (
    <>
      <h2>Oops... nothing found...</h2>
      <Link to="/">Back to home</Link>
    </>
  );
};
export default NotFounPage;
