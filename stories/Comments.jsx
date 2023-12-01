import React, { useState } from "react";
import PropTypes from "prop-types";
import { CommentItem } from "./CommentItem";
import "./comments.css";
import "./global.css";

export const Comments = ({ data }) => {
  const [comm, setComm] = useState(data);
  const [indicator, setIndicator] = useState(false);

  const handleClickButton = () => {
    setComm((pc) => [...pc].reverse());
    setIndicator((val) => !val);
  };

  return (
    <section className="comments">
      <div className="comments__container">
        <header className="comments__header">
          <h6 className="text__pre-headline">Testimonios</h6>
          <h4 className="text__headline">Comentarios de otros viajeros</h4>
          <div className="comments__highlighter">
            <button
              className={[
                "comments__indicator-item",
                !indicator && "comments__indicator-item--active",
              ]
                .filter(Boolean)
                .join(" ")}
            />
            <button
              className={[
                "comments__indicator-item",
                indicator && "comments__indicator-item--active",
              ]
                .filter(Boolean)
                .join(" ")}
            />
          </div>
        </header>
        <div className="comments__slider">
          <div className="comments__list">
            {comm.map((c, i) => (
              <div className="comments__item" key={c.author}>
                <CommentItem
                  avatarURL={c.avatarURL}
                  author={c.author}
                  from={c.from}
                  to={c.to}
                  comment={c.comment}
                  first={i === 0}
                />
              </div>
            ))}
          </div>

          <div className="comments__controls">
            <button
              className="comments__button comments--up"
              onClick={handleClickButton}
            >
              &lt;
            </button>
            <button
              className="comments__button comments--down"
              onClick={handleClickButton}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

Comments.propTypes = {};

Comments.defaultProps = {};
