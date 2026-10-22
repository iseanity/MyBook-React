import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Импортируем Link

// Общий список книг с детальной информацией
const booksData = {
  1: {
    title: 'Шестёрка воронов',
    author: 'Ли Бардуго',
    rating: '4.9',
    genre: 'Фэнтези, Приключения',
    year: '2016',
    cover: '/assets/images/book1.webp',
    description: 'Кеттердам — шумный центр международной торговли, где можно купить всё, если есть деньги. Гениальный вор Каз Бреккер получает предложение, от которого не может отказаться: организовать дерзкое похищение.'
  },
  2: {
    title: 'Продажное Королевство',
    author: 'Ли Бардуго',
    rating: '5.0',
    genre: 'Фэнтези, Драма',
    year: '2017',
    cover: '/assets/images/book2.webp',
    description: 'Казу Бреккеру и его команде удалось совершить невозможное, но вместо заслуженно высокой награды их ждёт жестокое предательство. Теперь им придется вести борьбу за собственную жизнь.'
  },
  3: {
    title: 'Дом в котором...',
    author: 'Мариам Петросян',
    rating: '4.9',
    genre: 'Магический реализм',
    year: '2009',
    cover: '/assets/images/book3.webp',
    description: 'На окраине города стоит Серый Дом, в котором живут дети-инвалиды, отвергнутые обществом. Но Дом — это не просто здание, это отдельная вселенная со своими законами и тайнами.'
  },
  4: {
    title: 'Макабр',
    author: 'Мила Нокс',
    rating: '4.9',
    genre: 'Темное фэнтези',
    year: '2017',
    cover: '/assets/images/book4.webp',
    description: 'Раз в столетие открываются двери между мирами, и начинается Турнир Макабр. Победитель получит исполнение самого заветного желания.'
  },
  5: {
    title: 'Благие знамения',
    author: 'Терри Пратчетт, Нил Гейман',
    rating: '4.9',
    genre: 'Юмористическое фэнтези',
    year: '1990',
    cover: '/assets/images/book5.webp',
    description: 'Демон Кроули и ангел Азирафель прожили среди людей тысячи лет и привыкли к уютной жизни на Земле. Узнав о скором Апокалипсисе, они решают объединиться, чтобы предотвратить конец света.'
  },
  6: {
    title: 'Книжная кухня',
    author: 'Ким Чжи Хе',
    rating: '4.6',
    genre: 'Уютная проза, Хюгге',
    year: '2022',
    cover: '/assets/images/book6.webp',
    description: 'В живописной корейской деревне открывается уютный книжный отель. Здесь каждый гость найдет не только чашку горячего чая и правильную книгу, но и ответы на важные жизненные вопросы.'
  },
  7: {
    title: 'Похититель детей',
    author: 'Джеральд Бром',
    rating: '4.9',
    genre: 'Мрачные сказки, Мистика',
    year: '2009',
    cover: '/assets/images/book7.webp',
    description: 'Он обещает спасти тебя от любой беды и увести в волшебный мир, где никто не стареет. Питер — харизматичный, юный и... смертельно опасный похититель пропавших душ.'
  },
  8: {
    title: 'Ученица',
    author: 'Тара Вестовер',
    rating: '4.8',
    genre: 'Автобиография, Мемуары',
    year: '2018',
    cover: '/assets/images/book8.webp',
    description: 'Впервые Тара переступила порог школы в 17 лет. Взращенная в семье выживальщиков на изолированной ферме, она смогла самостоятельно поступить в университет и изменить свою судьбу.'
  }
};

export default function BookDetail() {
  const { id } = useParams(); // Получаем ID из URL (например, /book/1)
  const book = booksData[id] || booksData[1];

  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '0 16px' }}>
      {/* Используем компонент Link для перехода назад в каталог */}
      <Link
        to="/catalog"
        style={{
          display: 'inline-block',
          color: '#F8C761',
          textDecoration: 'none',
          fontSize: '1rem',
          marginBottom: '20px'
        }}
      >
        ← Назад в каталог
      </Link>

      <div style={{ background: '#595082', borderRadius: '24px', padding: '24px', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        <img
          src={book.cover}
          alt={book.title}
          style={{ width: '160px', height: '240px', objectFit: 'cover', borderRadius: '16px', backgroundColor: '#2C263F' }}
        />

        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#FFFFFF' }}>{book.title}</h2>
          <p style={{ color: '#E2E0EC', fontSize: '1.1rem' }}>Автор: <strong>{book.author}</strong></p>
          <p style={{ color: '#F8C761', fontSize: '1.1rem' }}>★ Рейтинг: {book.rating}</p>
          <p style={{ color: '#D1CDDF', fontSize: '0.95rem' }}>Жанр: {book.genre} | Год: {book.year}</p>

          <p style={{ marginTop: '10px', lineHeight: '1.5', color: '#E2E0EC', fontSize: '0.95rem' }}>
            {book.description}
          </p>

          <div style={{ marginTop: 'auto', paddingTop: '15px', display: 'flex', gap: '12px' }}>
            <button className="btn-catalog" style={{ border: 'none', padding: '10px 24px', cursor: 'pointer' }}>
              Читать
            </button>
            <button style={{ background: '#201D30', color: '#FFF', border: 'none', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer' }}>
              В избранное
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}