import PropTypes from 'prop-types';
import { WrapContainer, Title } from './Container.styled';

export const Container = ({ children, title }) => {
  return (
    <WrapContainer>
      {title && <Title>{title}</Title>}
      {children}
    </WrapContainer>
  );
};

Container.prototype = {
  children: PropTypes.element,
  title: PropTypes.string,
};
