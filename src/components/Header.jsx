import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="header-content">
        <Link to="/" className="logo">
          <img src="/assets/images/logo.svg" alt="Логотип MyBook" width="36" height="36" />
          <h1>MyBook</h1>
        </Link>
        <Link to="/sign-in" className="profile-icon" aria-label="Личный кабинет">
          <img src="/assets/images/user.png" alt="Профиль" width="38" height="38" />
        </Link>
      </div>
    </header>
  );
}