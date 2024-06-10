import React from "react";

import { twMerge } from "tailwind-merge";

// Font files can be colocated inside of `app`
const CalSans = ({
  src: [{ path: "../../fonts/CalSans-SemiBold.woff2" }],
  display: "swap",
});

export const Heading = ({
  className,
  children,
  as: Tag = "h1",
}: {
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}) => {
  return (
    <Tag
      className=
        "text-base md:text-xl lg:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        
      
    >
      {children}
    </Tag>
  );
};
