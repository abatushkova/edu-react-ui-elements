import React from 'react';
import './Blog.scss';

export const Blog = () => {
  return (
    <div className="container">
      <h1 className="title">What's new!</h1>
      <div className="blog">
        <h2 className="subtitle">The Best of Material in 2022</h2>
        <p className="text">Some of Material Design’s top moments from the past year.</p>
      </div>
      <div className="blog">
        <h2 className="subtitle">Top Tips for Data Accessibility</h2>
        <p className="text">Six strategies for making your data visualization accessible, scalable, and helpful.</p>
      </div>
    </div>
  );
}
