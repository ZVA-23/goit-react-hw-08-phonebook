import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { fetchCurrentUser } from 'redux/auth/authOperations';
// import { PrivateRoute } from 'HOCs/PrivateRoute';
// import { PublicRoute } from 'HOCs/PublicRoute';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            // <PublicRoute>
            <HomePage />
            // </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            // <PublicRoute redirectTo="/" restricted>
            <RegisterPage />
            // </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            // <PublicRoute redirectTo="/" restricted>
            <LoginPage />
            // </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            // <PrivateRoute redirectTo="/login">
            <ContactsPage />
            // </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};
