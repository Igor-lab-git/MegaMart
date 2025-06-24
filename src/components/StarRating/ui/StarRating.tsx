import { useEffect, useState } from "react";
import style from "./style.module.scss"

export const StarRating = () => {
  const [rating, setRating] = useState<number>(() => {
    const savedRating = localStorage.getItem("starRating");
    return savedRating ? parseInt(savedRating) : 0;
  });

  useEffect(() => {
    localStorage.setItem("starRating", rating.toString());
  }, [rating]);

  const handleClick = (index: number) => {
    setRating(index);
  };
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className={style.wrapperStart}>
      {stars.map((star) => (
        <svg
          key={star}
          width="18"
          height="24"
          viewBox="0 0 24 24"
          fill={star <= rating ? "gold" : "gray"}
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => handleClick(star)}
          style={{ marginRight: "4px" }}
        >
          <polygon points="12,2 15,9 22,9 17,14 18.5,21 12,17.5 5.5,21 7,14 2,9 9,9" />
        </svg>
      ))}
    </div>
  );
};
