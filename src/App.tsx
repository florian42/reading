import React from "react";
import "./App.css";
import StopwatchButton from "./components/StopwatchButton";
import sampleText from "./text";

const medianNumberOfWordsForBooks = 64000;

function App() {
  const [startTime, setStartTime] = React.useState<Date | null>(null);
  const [endTime, setEndTime] = React.useState<Date | null>(null);
  const [durationInSeconds, setDurationInSeconds] = React.useState<
    number | null
  >(null);
  const [wordsPerMinute, setWordsPerMinute] = React.useState<number | null>(
    null
  );
  const [readingTimePerDay, setReadingTimePerDay] = React.useState(30);

  function roundToTwo(number: number) {
    return Math.round((number + Number.EPSILON) * 100) / 100;
  }

  React.useEffect(() => {
    if (startTime && endTime) {
      setDurationInSeconds((endTime.getTime() - startTime.getTime()) / 1000);
    }
    if (durationInSeconds) {
      setWordsPerMinute(
        roundToTwo((sampleText.split(" ").length / durationInSeconds) * 60)
      );
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Measure your reading speed</h1>
      </header>
      <StopwatchButton
        startTime={startTime}
        setStartTime={setStartTime}
        endTime={endTime}
        setEndTime={setEndTime}
      />
      <p>{sampleText}</p>
      <StopwatchButton
        startTime={startTime}
        setStartTime={setStartTime}
        endTime={endTime}
        setEndTime={setEndTime}
      />
      {durationInSeconds && wordsPerMinute && (
        <>
          <p>
            It took you {durationInSeconds} seconds to read the text. You read{" "}
            <b>{wordsPerMinute} words per minute</b>. The median number of words
            per book is {medianNumberOfWordsForBooks}. With this speed you will
            finish an average book in{" "}
            {roundToTwo(medianNumberOfWordsForBooks / wordsPerMinute / 60)}{" "}
            hours. If you only read {readingTimePerDay} minutes each day, you
            can finish{" "}
            {roundToTwo(
              365 /
                (medianNumberOfWordsForBooks /
                  (wordsPerMinute * readingTimePerDay))
            )}{" "}
            books in one year.
          </p>
          <input
            type="range"
            id="readingMinutesPerDay"
            name="readingMinutesPerDay"
            min="1"
            max={16 * 60}
            value={readingTimePerDay}
            onChange={(event) =>
              setReadingTimePerDay(parseInt(event.target.value, 10))
            }
          />
        </>
      )}
    </div>
  );
}

export default App;
