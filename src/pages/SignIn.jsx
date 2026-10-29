import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <main>
      <div className="form-container">
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#F8C761' }}>Вход в MyBook</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required placeholder="example@mail.ru" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input type="password" id="password" required placeholder="******" />
          </div>
          <button type="submit" className="btn-catalog" style={{ width: '100%', marginTop: '10px' }}>Войти</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '0.9rem' }}>
          Нет аккаунта? <Link to="/" style={{ color: '#F8C761' }}>Зарегистрироваться</Link>
        </p>
      </div>
    </main>
  );
}
