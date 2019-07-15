import React, { lazy, Suspense, useState } from "react";
import jacobImage from "../../assets/images/personal_image.jpg";

import style from "./style";

const Skills = lazy(() => import(`../skills`));

const About = () => {
  const [display, setDisplay] = useState(false);

  const { imageContainer } = style;
  return (
    <Suspense fallback={<div>...Loading</div>}>
      <section>
        <img
          src={jacobImage}
          alt="self-portrait"
          style={{ ...imageContainer }}
        />
        <div>
          <aside>
            ASIDE
            <button onClick={() => setDisplay(!display)}>Skills</button>
            {display ? <Skills /> : null}
          </aside>
          <p>Something about Me. The Skills, Projects</p>
        </div>
      </section>
    </Suspense>
  );
};
export default About;
