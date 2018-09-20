import React from 'react';
import PropTypes from 'prop-types';
import './styles/Link.css';

const Link = ({ inStock, children, onClick }) => {
  if (inStock) {
    return <span className="button">{children}</span>;
  }

  return (
    <button
      className="button"
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
};

Link.propTypes = {
  inStock: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
