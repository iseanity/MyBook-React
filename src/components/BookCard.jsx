import React from 'react';
import { Link } from 'react-router-dom';

export default function BookCard({ id, title, author, rating, cover }) {
  return (
    <Link to={`/book/${id}`} className="book-card">
      <img src={cover} alt={`Обложка книги ${title}`} className="book-cover" width="135" height="300" loading="lazy" />
      <div className="book-info">
        <p className="book-title">{title}</p>
        <p className="book-author">{author}</p>
        <p className="book-rating">★ {rating}</p>
      </div>
    </Link>
  );
}