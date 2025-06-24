import React, { useState } from 'react';
import { FormInput } from '../../../components/FormInput/ui/FormInput';
import style from "./style.module.scss"
import { FormData, FormErrors } from '../../../types';

export const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.email.includes('@')) {
      newErrors.email = 'Введите корректный email';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Пароль должен быть не менее 6 символов';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Пароли не совпадают';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem('user', JSON.stringify({ email: formData.email }));
      alert('Регистрация успешна!');
    }
  };

  return (
    <div className={style.registrationContainer}>
      <h2 className={style.title}>Регистрация</h2>
      <form className={style.formWrapper} onSubmit={handleSubmit}>
        <FormInput
          name="email"
          label="Email"
          type="text"
          value={formData.email}
          error={errors.email}
          onChange={handleChange}
        />
        
        <FormInput
          name="password"
          label="Пароль"
          type="password"
          value={formData.password}
          error={errors.password}
          onChange={handleChange}
        />
        
        <FormInput
          name="confirmPassword"
          label="Подтвердите пароль"
          type="password"
          value={formData.confirmPassword}
          error={errors.confirmPassword}
          onChange={handleChange}
        />
        
        <button type="submit" className={style.submitBtn}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};