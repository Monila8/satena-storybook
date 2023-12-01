import PropTypes from "prop-types";
import React from "react";
import "./commentItem.css";

export const CommentItem = ({
  first,
  avatarURL,
  comment,
  author,
  from,
  to,
}) => {
  return (
    <figure
      className={["comment-item", first && "comment-item--first"].join(" ")}
    >
      <img
        src={avatarURL}
        alt=""
        className="comment-item__image"
      />
      <figcaption className="comment-item__caption">
        <p className="comment-item__text">{comment}</p>
        <div className="comment-item__author-and-destination">
          <p className="comment-item__author">
            <b>{author}</b>
          </p>
          <p className="comment-item__destination">
            <span>{from}</span>
            <span className="comment-item__icon"></span>
            <span>{to}</span>
          </p>
        </div>
      </figcaption>
    </figure>
  );
};

CommentItem.propTypes = {
  boolean: PropTypes.bool,
  avatarURL: PropTypes.string,
  comment: PropTypes.string,
  author: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string,
};

CommentItem.defaultPropTypes = {
  boolean: false,
  avatarURL: "",
  comment: "",
  author: "",
  from: "",
  to: "",
};
