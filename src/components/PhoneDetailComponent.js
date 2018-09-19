import React from 'react';
import PropTypes from 'prop-types';

const PhoneDetail = ({ phoneDetail }) => (
  <div>
    <div>Detalles del producto</div>
    <div>{phoneDetail.text}</div>
    <div>{phoneDetail.description}</div>
    <div>
      Precio:
      {phoneDetail.price}
      {' '}
euros
    </div>
    <div>
      Color:
      {phoneDetail.color}
    </div>
    <div>
      Pantalla:
      {phoneDetail.screen}
    </div>
    <div>
      Batería:
      {phoneDetail.battery}
    </div>
    <div>
      Cámara:
      {phoneDetail.camera}
    </div>
  </div>
);

PhoneDetail.propTypes = {
  phoneDetail: PropTypes.object,
};

export default PhoneDetail;
