import React from 'react';
import BookCard from '../components/BookCard';

const allBooks = [
  { id: 1, title: 'Шестёрка воронов', author: 'Ли Бардуго', rating: '4.9', cover: '/assets/images/book1.webp' },
  { id: 2, title: 'Продажное Королевство', author: 'Ли Бардуго', rating: '5.0', cover: '/assets/images/book2.webp' },
  { id: 3, title: 'Дом в котором...', author: 'Мариам Петросян', rating: '4.9', cover: '/assets/images/book3.webp' },
  { id: 4, title: 'Макабр', author: 'Мила Нокс', rating: '4.9', cover: '/assets/images/book4.webp' },
  { id: 5, title: 'Благие знамения', author: 'Т. Пратчетт, Н. Гейман', rating: '4.9', cover: '/assets/images/book5.webp' },
  { id: 6, title: 'Книжная кухня', author: 'Ким Чжи Хе', rating: '4.6', cover: '/assets/images/book6.webp' },
  { id: 7, title: 'Похититель детей', author: 'Джеральд Бром', rating: '4.9', cover: '/assets/images/book7.webp' },
  { id: 8, title: 'Ученица', author: 'Тара Вестовер', rating: '4.8', cover: '/assets/images/book8.webp' }
];

export default function Catalog() {
  return (
    <main>
      <section className="slider-section">
        <h2>Каталог книг</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {allBooks.map(b => <BookCard key={b.id} {...b} />)}
        </div>
      </section>
    </main>
  );
}