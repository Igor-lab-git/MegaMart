import React, { useState } from "react";
import style from "./style.module.scss";

interface CommentFormProps {
  onSubmit: (username: string, text: string) => void;
}

export const CommentForm = ({
  onSubmit,
}: CommentFormProps): React.JSX.Element => {
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    username.trim();
    text.trim();
    if (username && text) {
      onSubmit(username, text);
      setUsername("");
      setText("");
    }
  };

  return (
    <form className={style.wrapperForm} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="Имя пользователя"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <textarea
        className={style.textarea}
        placeholder="Комментарий"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className={style.btnAdd} type="submit">
        Оставить отзыв
      </button>
    </form>
  );
};
