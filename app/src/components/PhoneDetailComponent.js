import React from 'react';
import PropTypes from 'prop-types';
import './styles/PhoneDetail.css';

function PhoneDetail({ phoneDetail }) {
  return !phoneDetail.key ? null : (
    <div>
      <div className="title">Detalles del producto</div>
      <div className="line" />
      <div className="text">{phoneDetail.text}</div>
      <div className="desc">{phoneDetail.description}</div>
      <div>
        {' '}
        <div className="features-title">Características</div>
        <div className="features">
          <p>Precio:</p>
          <p>{phoneDetail.price}</p>
          {' '}
          <p>euros</p>
        </div>
        <div className="features">
          <p>Color:</p>
          <p>{phoneDetail.color}</p>
        </div>
        <div className="features">
          <p>Pantalla</p>
          <p>{phoneDetail.screen}</p>
        </div>
        <div className="features">
          <p>Batería:</p>
          <p>{phoneDetail.battery}</p>
        </div>
        <div className="features">
          <p>Cámara:</p>
          <p>{phoneDetail.camera}</p>
        </div>
      </div>
    </div>
  );
}

PhoneDetail.propTypes = {
  phoneDetail: PropTypes.object,
};

export default PhoneDetail;
