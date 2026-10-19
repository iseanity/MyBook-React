import React from 'react';

export default function Profile() {
  return (
    <main>
      <section className="banner">
        <h2>Мой профиль</h2>
        <p>Добро пожаловать в личный кабинет!</p>
        <div style={{ marginTop: '15px', background: '#201D30', padding: '15px 25px', borderRadius: '16px' }}>
          <p><strong>Избранные книги:</strong> 0</p>
          <p><strong>Прочитано:</strong> 0 книг</p>
        </div>
      </section>
    </main>
  );
}