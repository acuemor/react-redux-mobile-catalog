import React from 'react';
import PropTypes from 'prop-types';

function ModalComponent({
  content, close, title, closeModalHandler,
}) {
  return close ? null : (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" type="button" aria-label="close" onClick={closeModalHandler} />
        </header>
        <section className="modal-card-body">
          <div className="content">
            <div className="desc">{content.description}</div>
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
                  <td className="has-text-centered">{content.price}</td>
                  <td className="has-text-centered">{content.color}</td>
                  <td className="has-text-centered">{content.screen}</td>
                  <td className="has-text-centered">{content.battery}</td>
                  <td className="has-text-centered">{content.camera}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

ModalComponent.propTypes = {
  content: PropTypes.object,
  close: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  closeModalHandler: PropTypes.func.isRequired,
};

export default ModalComponent;
