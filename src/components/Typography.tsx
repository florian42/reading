import React from "react";

interface Props {
  children: React.ReactNode;
  size: "4xl" | "3xl" | "2xl" | "base" | "lg";
  my?: string;
  bold?: boolean;
}

function Typography({ children, size, my = "4", bold = false }: Props) {
  return (
    <div
      className={`font-sans ${
        bold ? "font-bold" : undefined
      } antialiased my-${my} text-${size} text-gray-900 dark:text-white`}
    >
      {children}
    </div>
  );
}

export default Typography;
