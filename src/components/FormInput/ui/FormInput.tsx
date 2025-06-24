import React from "react";
import style from "./style.module.scss";

interface FormInputProps {
  name: string;
  label: string;
  type: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput = ({
  name,
  label,
  type,
  value,
  error,
  onChange,
}: FormInputProps): React.JSX.Element => (
  <div className={style.formGroup}>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className={error ? "error" : ""}
    />
    {error && <span className={style.errorMessage}>{error}</span>}
  </div>
);
