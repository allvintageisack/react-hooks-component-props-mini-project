
import React from 'react';

const Article = ({ title, date, preview }) => {
  // Calculate minutes to read
  const calculateMinutesToRead = () => {
    const wordsPerMinute = 200; // Average reading speed
    const words = preview.split(' ').length;
    return Math.ceil(words / wordsPerMinute);
  };

  // Render minutes to read
  const renderMinutesToRead = () => {
    const minutes = calculateMinutesToRead();
    const coffeeCups = Math.ceil(minutes / 5);
    const bentoBoxes = Math.ceil(minutes / 10);

    let content = '';
    if (minutes < 30) {
      content = '☕️'.repeat(coffeeCups);
    } else {
      content = '🍱'.repeat(bentoBoxes);
    }

    return `${content} ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      <p>{renderMinutesToRead()}</p>
    </article>
  );
};

export default Article;
