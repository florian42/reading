import React from "react";
import Typography from "./Typography";

interface Props {
  className?: string;
}

function About({ className }: Props) {
  return (
    <section className={className}>
      <Typography size="2xl">About</Typography>
      <Typography size="base">
        Since the new year started I want to set myself a realistic goal on how
        many books I can read this year when spending 30 minutes each day
        reading. A Video by Max Joseph about books got me interested in
        achieving this, you can watch it here:{" "}
        <a
          className="underline hover:text-blue-500 text-gray-900 dark:text-white"
          href="https://www.youtube.com/watch?v=lIW5jBrrsS0"
        >
          BOOKSTORES: How to Read More Books in the Golden Age of Content
        </a>
        .
      </Typography>
      <Typography size="base">
        When you&apos;re ready to start reading, hit the &apos;Start
        Stopwatch&apos; button. After you&apos;ve finished reading the last
        word, hit the button again which after starting shows &apos;End
        Stopwatch!&apos;. You can reset the state using the same button.
      </Typography>
    </section>
  );
}

export default About;
