import React from "react";
import styled from "styled-components";

const AsciiArt = styled.pre`
  font-family: "MS PGothic", sans-serif;
  /* color: ${({ theme }: { theme: Theme }) => theme.cyan}; */
  font-weight: bold;
`;

/* eslint-disable no-irregular-whitespace */
const art = `
　　 　 　/＾>》, -―‐‐＜＾}
　　　　 /:::::::/,≠´:::::;::::::::ヽ.
.　　　 /:::::::〃:::::::::／}::::丿ハ
　　  /:::::::::i{l|:::::／　ﾉ／ }::::::}
　  /:::::::::::瓜イ-‐　´ ‐ ,':::::ﾉ
.  /:::::::::::::|ﾉﾍ.{､　( ﾌ_ノﾉイ　　　ようこそ!
 /:::::::::::::::|　／}｀不´} ::::::::
`;

const BannerArt = () => <AsciiArt>{art}</AsciiArt>;
const Banner = (args: string[]) => {
  if (args.join()) console.log(args);

  return (
    <div>
      <BannerArt />
      <br />
      <p>
        Welcome To my terminal Website.
        <br />
        <br /> --- <br />
        Type `repo` to open project repostory.
        <br /> --- <br />
        Type `help` to see list of available commands
      </p>
      <br />
      <br />
    </div>
  );
};

export default Banner;
