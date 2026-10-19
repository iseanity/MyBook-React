import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';

const newBooks = [
  { id: 1, title: 'Шестёрка воронов', author: 'Ли Бардуго', rating: '4.9', cover: '/assets/images/book1.jpg' },
  { id: 2, title: 'Продажное Королевство', author: 'Ли Бардуго', rating: '5.0', cover: '/assets/images/book2.webp' },
  { id: 3, title: 'Дом в котором...', author: 'Мариам Петросян', rating: '4.9', cover: '/assets/images/book3.jpg' },
  { id: 4, title: 'Макабр', author: 'Мила Нокс', rating: '4.9', cover: '/assets/images/book4.webp' }
];

const popBooks = [
  { id: 5, title: 'Благие знамения', author: 'Т. Пратчетт, Н. Гейман', rating: '4.9', cover: '/assets/images/book5.jpg' },
  { id: 6, title: 'Книжная кухня', author: 'Ким Чжи Хе', rating: '4.6', cover: '/assets/images/book6.jpg' },
  { id: 7, title: 'Похититель детей', author: 'Джеральд Бром', rating: '4.9', cover: '/assets/images/book7.webp' },
  { id: 8, title: 'Ученица', author: 'Тара Вестовер', rating: '4.8', cover: '/assets/images/book8.jpg' }
];

export default function Home() {
  const newRef = useRef(null);
  const popRef = useRef(null);

  const scroll = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 160, behavior: 'smooth' });
    }
  };

  return (
    <main>
      <section className="banner">
        <h2>MyBook — уютный уголок для чтения</h2>
        <p>Открой для себя тысячи книг прямо в своём браузере.</p>
        <Link to="/catalog" className="btn-catalog">Каталог</Link>
      </section>

      <section className="slider-section">
        <h2>Новинки</h2>
        <div className="slider-wrapper">
          <div className="cards-container" ref={newRef}>
            {newBooks.map(b => <BookCard key={b.id} {...b} />)}
          </div>
          <button className="slider-btn" onClick={() => scroll(newRef)} aria-label="Прокрутить новинки">
            <img src="/assets/images/next.svg" alt="Вперед" width="18" height="18" />
          </button>
        </div>
      </section>

      <section className="slider-section">
        <h2>Популярное</h2>
        <div className="slider-wrapper">
          <div className="cards-container" ref={popRef}>
            {popBooks.map(b => <BookCard key={b.id} {...b} />)}
          </div>
          <button className="slider-btn" onClick={() => scroll(popRef)} aria-label="Прокрутить популярное">
            <img src="/assets/images/next.svg" alt="Вперед" width="18" height="18" />
          </button>
        </div>
      </section>
    </main>
  );
}