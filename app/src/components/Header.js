import React from 'react';
import LinkContainer from '../containers/LinkContainer';

const Header = () => (
  <div>
    <LinkContainer filter="SHOW_ALL">Catálogo completo</LinkContainer>
    {'  '}
    <LinkContainer filter="SHOW_IN_STOCK">En stock</LinkContainer>
    {'  '}
    <LinkContainer filter="SHOW_SOLD_OUT">Agotados</LinkContainer>
  </div>
);

export default Header;
