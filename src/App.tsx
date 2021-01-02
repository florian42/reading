import React from "react";
import "./App.css";
import About from "./components/About";
import Slider from "./components/Slider";
import StopwatchButton from "./components/StopwatchButton";
import Typography from "./components/Typography";
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

  function renderStatisticsSection() {
    if (!wordsPerMinute) {
      return null;
    }

    return (
      <ul className="text-gray-600 dark:text-gray-300">
        <li>It took you {durationInSeconds} seconds to read the text.</li>
        <li>
          You read <b>{wordsPerMinute} words per minute</b>.
        </li>{" "}
        <li>
          The median number of words per book is {medianNumberOfWordsForBooks}.
        </li>{" "}
        <li>
          {" "}
          With this speed you will finish an average book in{" "}
          {roundToTwo(medianNumberOfWordsForBooks / wordsPerMinute / 60)} hours.
        </li>
        <li>
          If you only read {readingTimePerDay} minutes each day, you can finish{" "}
          <b>
            {roundToTwo(
              365 /
                (medianNumberOfWordsForBooks /
                  (wordsPerMinute * readingTimePerDay))
            )}{" "}
            books in one year
          </b>
          .
        </li>
      </ul>
    );
  }

  function resetStopwatch() {
    setStartTime(null);
    setEndTime(null);
    setDurationInSeconds(null);
    setWordsPerMinute(null);
  }

  return (
    <div className="App bg-white dark:bg-gray-800">
      <header className="App-header">
        <Typography size="4xl">Measure your reading speed</Typography>
      </header>
      <About />
      <StopwatchButton
        startTime={startTime}
        setStartTime={setStartTime}
        endTime={endTime}
        setEndTime={setEndTime}
        resetStopwatch={resetStopwatch}
      />
      <p className="font-serif text-lg antialiased leading-relaxed text-left text-gray-600 dark:text-gray-300 divide-y">
        {sampleText}
      </p>
      <StopwatchButton
        startTime={startTime}
        setStartTime={setStartTime}
        endTime={endTime}
        setEndTime={setEndTime}
        resetStopwatch={resetStopwatch}
      />
      {durationInSeconds && (
        <>
          <Typography size="2xl">Your statistics</Typography>
          {renderStatisticsSection()}
          <Slider
            readingTimePerDay={readingTimePerDay}
            setReadingTimePerDay={setReadingTimePerDay}
          />
        </>
      )}
    </div>
  );
}

export default App;
