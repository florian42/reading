import React from "react";

interface Props {
  className?: string;
  startTime: Date | null;
  endTime: Date | null;
  setStartTime: (date: Date | null) => void;
  setEndTime: (date: Date | null) => void;
  resetStopwatch: () => void;
}

function StopwatchButton({
  className,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
  resetStopwatch,
}: Props) {
  function useButton(): [string, () => void] {
    if (startTime && endTime) {
      return ["Reset", resetStopwatch];
    }
    if (startTime) {
      return ["End Stopwatch!", () => setEndTime(new Date())];
    }
    return ["Start Stopwatch", () => setStartTime(new Date())];
  }

  const [buttonLabel, onClick] = useButton();

  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded-full max-w-md place-self-center ${className}`}
    >
      {buttonLabel}
    </button>
  );
}

export default StopwatchButton;
