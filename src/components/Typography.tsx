import React from "react";

interface Props {
  children: React.ReactNode;
  size: "4xl" | "3xl" | "2xl" | "base" | "lg";
  my?: string;
}

function Typography({ children, size, my = "4" }: Props) {
  return (
    <div
      className={`font-sans font-bold antialiased my-${my} text-${size} text-gray-900 dark:text-white`}
    >
      {children}
    </div>
  );
}

export default Typography;
