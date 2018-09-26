import React from 'react';
import LinkContainer from '../containers/LinkContainer';
import './styles/Header.css';

const Header = () => (
  <div className="columns buttons-top">
    <div className="column has-text-centered">
      <LinkContainer filter="SHOW_ALL">Catálogo completo</LinkContainer>
      {'  '}
      <LinkContainer filter="SHOW_IN_STOCK">En stock</LinkContainer>
      {'  '}
      <LinkContainer filter="SHOW_SOLD_OUT">Agotados</LinkContainer>
    </div>
  </div>
);

export default Header;
