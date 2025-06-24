import React from "react";
import { StarRating } from "../../StarRating";
import style from "./style.module.scss";

interface CommentItemProps {
  comment: {
    id: number;
    username: string;
    text: string;
  };
  onRemove: (id: number) => void;
  dateString: string;
}

export const CommentItem = ({ 
  comment, 
  onRemove,
  dateString
}: CommentItemProps): React.JSX.Element => {
  return (
    <li className={style.listComments}>
      <div className={style.wrapperNameBtn}>
        <span className={style.nameComments}>{comment.username}</span>
        <button
          className={style.btnAdd}
          onClick={() => onRemove(comment.id)}
          aria-label={`Удалить комментарий от ${comment.username}`}
        >
          Удалить
        </button>
      </div>
      <p className={style.textComments}>{comment.text}</p>
      <div className={style.wrapperDetailes}>
        <StarRating />
        <span className={style.date}>{dateString}</span>
      </div>
    </li>
  );
};