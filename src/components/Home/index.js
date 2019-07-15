import React, { Component } from "react";
import styles from "./style";
// temp hard code projects ADD PICTURES OR SOMETHING
const Projects = {
  Porjects: ``,
  "Twitter Bot": [`https://github.com/JacobMGEvans/twitter-bot-rtl`],
  "Machine Learning Sound": [
    `https://github.com/IntelliSound/intelliSound-Client`,
  ],
  "Naive Blockchain Implementation": [`https://github.com/HashMoney/Noncents`],
};
const {} = styles;
export default class Home extends Component {
  render() {
    return (
      <section style={{ border: `.2vw solid black` }}>
        <h1 style={{ border: `.2vw solid green` }}>Jacob M-G Evans</h1>
        <h2 style={{ border: `.2vw solid orange` }}>
          Full-Stack JavaScript Developer | Air Force Veteran | Hardware
          Enthusiast | Outdoorsman
        </h2>

        <main style={{ border: `.2vw solid goldenrod` }}>
          <p>
            As a Developer, I am an ambitious and tenacious individual that
            seeks opportunities that foster my growth and experience as a
            software engineer to continue to expand my knowledge and skill base
            in the software engineering field to drive forward my passion to
            improve my community and environment with technology. My passions
            are in both technology, nature, also service and protection to the
            community. While camping, hiking, fishing or any other activities
            are a great part of my life, so is being a software engineer, gamer,
            and hardware enthusiast.
          </p>

          <aside style={{ border: `.2vw solid blue` }}>
            {Object.entries(Projects).map((ele, ind) => (
              <ul key={ind + Math.random()}>{`${ele[0]} : ${ele[1]} `}</ul>
            ))}
          </aside>
        </main>
      </section>
    );
  }
}
