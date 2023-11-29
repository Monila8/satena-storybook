import React from 'react';
import PropTypes from 'prop-types';

export const Comments = ({ ...props }) => {

  return (
    <section className='comments'>
      <div className="comments__container">
        <div className="comments__headline-side">
          <h4 className="comments__headline">Comentarios de otros viajeros</h4>
          <div className="comments__highlighter">
            <ul>
              <li>0</li>
            </ul>
          </div>
        </div>
        <div className="comments__slider-side">

        </div>
      </div>
    </section>
  );
};

Comments.propTypes = {
};

Comments.defaultProps = {
};
