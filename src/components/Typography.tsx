import React from "react";

interface Props {
  children: React.ReactNode;
  size?: "h1" | "h3";
}

function Typography({ children, size }: Props) {
  const h3 =
    "font-sans antialiased my-4 text-gray-900 dark:text-white text-2xl";
  const h1 =
    "font-sans antialiased my-4 text-gray-900 dark:text-white text-4xl";

  const className = () => {
    switch (size) {
      case "h1":
        return h1;
      case "h3":
        return h3;
      default:
        return "font-sans antialiased my-4 text-base text-gray-900 dark:text-white";
    }
  };

  return <div className={className()}>{children}</div>;
}

export default Typography;
