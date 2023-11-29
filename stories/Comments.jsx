import React from 'react';
import PropTypes from 'prop-types';
import { CommentItem } from './CommentItem';

export const Comments = ({ ...props }) => {
  const commentsData = [
    { imageSource: '', author: '', from: '', to: '', comment: '' }
  ]
  return (
    <section className='comments'>
      <div className="comments__container">
        <div className="comments__headline-side">
          <h6 className="text__pre-headline">Testimonios</h6>
          <h4 className="text__headline">Comentarios de otros viajeros</h4>
          <div className="comments__highlighter">
            <ul>
              <li>0</li>
            </ul>
          </div>
        </div>
        <div className="comments__slider-side">
          <div className="comments__items-column">

          {commentsData.map(c => (
            <CommentItem
              imageSource={c.imageSource}
              author={c.author}
              from={c.from}
              to={c.to}
              comment={c.comment}
            />
          ))}
          </div>

          <div className="comments__controls">
            <span className="comments__up"></span>
            <span className="comments__down"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

Comments.propTypes = {
};

Comments.defaultProps = {
};
