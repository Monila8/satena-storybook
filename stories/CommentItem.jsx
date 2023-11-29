import PropTypes from "prop-types";
import React from "react";

export const CommentItem = ({ imageSource, comment, author, from, to }) => {
  return (
    <div className="comment-item">
      <img src={imageSource} alt="" className="comment-item__image" />
      <p className="comment-item__text">{comment}</p>
      <p className="comment-item__author">{author}</p>
      <p>
        <span>{from}</span>
        <span className="comment-item__icon"></span>
        <span>{to}</span>
      </p>
    </div>
  )
}

CommentItem.propTypes = {
  imageSource: PropTypes.string,
  comment: PropTypes.string,
  author: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string,
}

CommentItem.defaultPropTypes = {
  imageSource: '',
  comment: '',
  author: '',
  from: '',
  to: '',
}
