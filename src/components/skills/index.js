import React from "react";

const Skills = () => {
  // WILL USE FIREBASE FOR SKILLS TEMP DATA:
  const skills = [
    `Javascript`,
    `React`,
    `Node`,
    `Express`,
    `Firebase`,
    `GraphQL`,
    `MongoDB`,
    `HTML5`,
    `CSS3`,
  ];
  return (
    <section>
      {skills.map(skill => (
        <ul key={Date.now() * Math.random()}>{skill}</ul>
      ))}
    </section>
  );
};
export default Skills;
