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
  theme,
}) => {
  return (
    <figure
      className={["comment-item", `comment-item--${theme}`, first && "comment-item--first"].join(" ")}
    >
      <img src={avatarURL} alt="" className="comment-item__image" />
      <figcaption className="comment-item__caption">
        <p className="comment-item__text">{comment}</p>
        <div className="comment-item__author-and-destination">
          <p className="comment-item__author">
            <b>{author}</b>
          </p>
          <p className="comment-item__destination">
            <span>{from}</span>
            <span className="comment-item__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  className="comment-item__plane-path"
                  d="M16.9898 15.5473H2.8231C2.36477 15.5473 1.98977 15.9223 1.98977 16.3806C1.98977 16.8389 2.36477 17.2139 2.8231 17.2139H16.9898C17.4481 17.2139 17.8231 16.8389 17.8231 16.3806C17.8231 15.9223 17.4481 15.5473 16.9898 15.5473ZM18.2981 7.74727C18.1148 7.0806 17.4314 6.68893 16.7648 6.86393L12.3398 8.04727L6.95643 3.0306C6.73143 2.81393 6.40643 2.73893 6.10643 2.82227C5.53977 2.9806 5.2731 3.6306 5.56477 4.13893L8.43143 9.1056L4.28977 10.2139L2.98143 9.1806C2.7731 9.02227 2.50643 8.96393 2.2481 9.0306L1.9731 9.1056C1.70643 9.17227 1.58143 9.4806 1.7231 9.71393L3.28977 12.4223C3.48143 12.7473 3.86477 12.9056 4.2231 12.8139L17.4064 9.2806C18.0731 9.09727 18.4731 8.41393 18.2981 7.74727Z"
                  fill="#5E6282"
                />
              </svg>
            </span>
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
  theme: PropTypes.oneOf(['light', 'dark'])
};

CommentItem.defaultProps = {
  boolean: false,
  avatarURL: "",
  comment: "",
  author: "",
  from: "",
  to: "",
  theme: 'light',
};
