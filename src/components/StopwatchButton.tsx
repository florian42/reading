import React from "react";

interface Props {
  startTime: Date | null;
  endTime: Date | null;
  setStartTime: (date: Date | null) => void;
  setEndTime: (date: Date | null) => void;
}

function useButton({
  startTime,
  endTime,
  setStartTime,
  setEndTime,
}: Props): [string, () => void] {
  if (startTime && endTime) {
    return [
      "Reset",
      () => {
        setStartTime(null);
        setEndTime(null);
      },
    ];
  }
  if (startTime) {
    return ["End Stopwatch!", () => setEndTime(new Date())];
  }
  return ["Start Stopwatch", () => setStartTime(new Date())];
}

function StopwatchButton({
  startTime,
  setStartTime,
  endTime,
  setEndTime,
}: Props) {
  const [buttonLabel, onClick] = useButton({
    startTime,
    endTime,
    setStartTime,
    setEndTime,
  });

  return (
    <button type="button" onClick={onClick}>
      {buttonLabel}
    </button>
  );
}

export default StopwatchButton;
