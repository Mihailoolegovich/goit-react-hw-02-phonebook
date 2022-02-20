import React from 'react';
import './Section.css';
import propTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section className="container">
    <h2 className="title">{title}</h2>
    {children}
  </section>
);

export default Section;

Section.propTypes = {
  title: propTypes.string.isRequired,
  // children: propTypes.arrayOf(propTypes.object.isRequired),
  // children: propTypes.objectOf(propTypes.array.isRequired),

  // children: propTypes.object.isRequired,
  children: propTypes.array.isRequired,
};
