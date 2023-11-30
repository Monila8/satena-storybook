import React, { useState } from "react";
import PropTypes from "prop-types";
import { CommentItem } from "./CommentItem";
import './comments.css'

export const Comments = ({ ...props }) => {
  const [comm, setComm] = useState([
    {
      imageSource: "",
      author: "Andres Guzman",
      from: "",
      to: "",
      comment: "Lorem one",
    },
    {
      imageSource: "",
      author: "Eric Padilla",
      from: "",
      to: "",
      comment: "Loren 2",
    },
  ]
)

const handleClickButton = () => {
  setComm(pc => [...pc].reverse())
}
  
return (
    <section className="comments">
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
          <div className="comments__list">
            {comm.map((c) => (
              <div className="comments__item" key={c.author}>
                <CommentItem
                  imageSource={c.imageSource}
                  author={c.author}
                  from={c.from}
                  to={c.to}
                  comment={c.comment}
                />
              </div>
            ))}
          </div>

          <div className="comments__controls">
            <button className="comments__up" onClick={handleClickButton}>
              %
            </button>
            <button className="comments__down" onClick={handleClickButton}>down</button>
          </div>
        </div>
      </div>
    </section>
  );
};

Comments.propTypes = {};

Comments.defaultProps = {};
