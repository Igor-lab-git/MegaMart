import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { Comment } from "../../../types";
import { useParams } from "react-router-dom";
import { CommentForm } from "../../CommentForm";
import { CommentItem } from "../../CommentItem";

const COMMENTS_KEY = "comments";

export const NewComment = (): React.JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);

  const [comments, setComments] = useState<Comment[]>(() => {
    const data = window.localStorage.getItem(COMMENTS_KEY);
    return data ? JSON.parse(data) : [];
  });

  const productComments = comments.filter((c) => c.productId === productId);

  useEffect(() => {
    try {
      window.localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments));
    } catch (err) {
      console.error("Ошибка сохранения комментариев:", err);
    }
  }, [comments]);

  const addComment = (username: string, text: string) => {
    setComments([...comments, { id: Date.now(), productId, username, text }]);
  };

  const removeComment = (id: number) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };
  const date = new Date();
  const dateString = date.toLocaleDateString();

  return (
    <div className={style.wrapperMain}>
      <h2 className={style.titleComment}>Оставить комментарий</h2>
      <CommentForm onSubmit={addComment} />
      <div>
        <ul className={style.boxComments}>
          {productComments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              onRemove={removeComment}
              dateString={dateString}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
