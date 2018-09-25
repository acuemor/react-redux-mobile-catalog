import React from 'react';
import PropTypes from 'prop-types';
import './styles/PhoneDetail.css';

function PhoneDetail({ phoneDetail }) {
  return !phoneDetail.key ? null : (
    <div className="content">
      <div className="title">{phoneDetail.text}</div>
      <div className="desc">{phoneDetail.description}</div>
      <table>
        <thead>
          <tr>
            <th className="has-text-centered">Precio (€)</th>
            <th className="has-text-centered">Color</th>
            <th className="has-text-centered">Pantalla</th>
            <th className="has-text-centered">Batería</th>
            <th className="has-text-centered">Cámara</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="has-text-centered">{phoneDetail.price}</td>
            <td className="has-text-centered">{phoneDetail.color}</td>
            <td className="has-text-centered">{phoneDetail.screen}</td>
            <td className="has-text-centered">{phoneDetail.battery}</td>
            <td className="has-text-centered">{phoneDetail.camera}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

PhoneDetail.propTypes = {
  phoneDetail: PropTypes.object,
};

export default PhoneDetail;
