import React from "react";

const About = (args: string[]) => {
  if (args.length > 0)
    return <p>about: {args.join(" ")} is not valid command</p>;
  return (
    <div style={{ maxWidth: "600px" }}>
      <p>Hi, my name is Deepak Kumar!</p>
      <br />
      <p>
        I am a passionate self-taught Web Developer that focuses on Designing
        and Developing software for the web, from simple websites to full-stack
        Applications.
        <br />
      </p>
    </div>
  );
};

export default About;
