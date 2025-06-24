import { ChangeEvent } from "react";
import style from "./style.module.scss";

interface SearchBar {
  searchTerm: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
}

export const SearchBar = ({ searchTerm, onSearchChange, onReset }: SearchBar) => (
  <div className={style.inputWrapper}>
    <input
      className={style.input}
      type="text"
      value={searchTerm}
      onChange={onSearchChange}
      placeholder="Поиск по названию..."
    />
    <button className={style.inputButton} onClick={onReset}>
      Отмена
    </button>
  </div>
);