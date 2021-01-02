import React from "react";
import { default as RcSlider } from "rc-slider";
import "rc-slider/assets/index.css";
import Typography from "./Typography";

interface Props {
  readingTimePerDay: number;
  setReadingTimePerDay: (time: number) => void;
}

function Slider({ readingTimePerDay, setReadingTimePerDay }: Props) {
  return (
    <>
      <Typography size="base">
        Play with how much time of your day you want to dedicate to reading.
      </Typography>
      <RcSlider
        className="mb-6"
        value={readingTimePerDay}
        onChange={(event) => setReadingTimePerDay(event)}
        trackStyle={{ backgroundColor: "rgba(29, 78, 216, 1)" }}
        min={5}
        max={16 * 60}
        step={5}
      />
    </>
  );
}

export default Slider;
