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
    <div className="App bg-white dark:bg-gray-800">
      <header className="App-header">
        <h1 className="font-sans font-bold antialiased my-4 text-4xl text-gray-900 dark:text-white">
          Measure your reading speed
        </h1>
      </header>
      <StopwatchButton
        startTime={startTime}
        setStartTime={setStartTime}
        endTime={endTime}
        setEndTime={setEndTime}
        setDurationInSeconds={setDurationInSeconds}
        setWordsPerMinute={setWordsPerMinute}
      />
      <p className="font-serif text-lg antialiased leading-relaxed text-left text-gray-600 dark:text-gray-300">
        {sampleText}
      </p>
      <StopwatchButton
        startTime={startTime}
        setStartTime={setStartTime}
        endTime={endTime}
        setEndTime={setEndTime}
        setDurationInSeconds={setDurationInSeconds}
        setWordsPerMinute={setWordsPerMinute}
      />
      {durationInSeconds && wordsPerMinute && (
        <>
          <h3 className="font-sans font-bold antialiased my-4 text-2xl text-gray-900 dark:text-white">
            Your statistics
          </h3>
          <ul className="text-gray-600 dark:text-gray-300">
            <li>It took you {durationInSeconds} seconds to read the text.</li>
            <li>
              You read <b>{wordsPerMinute} words per minute</b>.
            </li>{" "}
            <li>
              The median number of words per book is{" "}
              {medianNumberOfWordsForBooks}.
            </li>{" "}
            <li>
              {" "}
              With this speed you will finish an average book in{" "}
              {roundToTwo(
                medianNumberOfWordsForBooks / wordsPerMinute / 60
              )}{" "}
              hours.
            </li>
            <li>
              If you only read {readingTimePerDay} minutes each day, you can
              finish{" "}
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
          <label
            htmlFor="readingMinutesPerDay"
            className="text-gray-600 dark:text-gray-300 flex flex-auto flex-col flex-wrap flex-grow my-4"
          >
            Play with how much time of your day you want to dedicate to reading:
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
            I want to spend <b>{readingTimePerDay} minutes</b> each day reading
            books!
          </label>
        </>
      )}
    </div>
  );
}

export default App;
