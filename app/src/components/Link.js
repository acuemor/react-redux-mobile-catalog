import React from 'react';
import PropTypes from 'prop-types';
import './styles/Link.css';

const Link = ({ inStock, children, onClick }) => {
  if (inStock) {
    return <span className="button">{children}</span>;
  }

  return (
    <div>
      <div className="columns">
        <div className="column">
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
        </div>
      </div>
    </div>
  );
};

Link.propTypes = {
  inStock: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
