import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ inStock, children, onClick }) => {
  if (inStock) {
    return <span>{children}</span>
  }

  return (
    <button href="#"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </button>
  )
}

Link.propTypes = {
  inStock: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link