import React from "react";

interface Props {
  readingTimePerDay: number;
  setReadingTimePerDay: (time: number) => void;
}

function Slider({ readingTimePerDay, setReadingTimePerDay }: Props) {
  return (
    <label
      htmlFor="readingMinutesPerDay"
      className="text-gray-600 dark:text-gray-300 flex flex-auto flex-col flex-wrap flex-grow my-4"
    >
      Play with how much time of your day you want to dedicate to reading:
      <input
        className="Slider"
        type="range"
        id="readingMinutesPerDay"
        name="readingMinutesPerDay"
        min="1"
        max={16 * 60}
        step="5"
        value={readingTimePerDay}
        onChange={(event) =>
          setReadingTimePerDay(parseInt(event.target.value, 10))
        }
      />
      I want to spend <b>{readingTimePerDay} minutes</b> each day reading books!
    </label>
  );
}

export default Slider;
