import React from "react";

const Section = ({ id, title, content }) => (
  <section id={id} className="section">
    <h2>{title}</h2>
    {content}
  </section>
);

export default Section;
