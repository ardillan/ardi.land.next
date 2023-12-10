"use client";

import React from "react";
import { Tooltip } from "react-tooltip";

const CustomTooltip = ({
  children,
  id,
  content,
  played,
}: {
  children?: JSX.Element;
  id: string;
  content: string;
  played?: boolean;
}): JSX.Element => {
  return (
    <>
      <a
        data-tooltip-id={id}
        data-played={played}
        data-tooltip-content={content}
      >
        {children && children}
      </a>
      <Tooltip
        id={id}
        style={{
          backgroundColor: "rgba(var(--color-space-darker))",
          color: "rgba(var(--color-honey-yellow))",
          zIndex: 10,
          fontSize: "0.75rem",
          opacity: 1,
        }}
      />
    </>
  );
};

export default CustomTooltip;
