/* eslint-disable react/prop-types */
// TODO: Look how to type Markdown props
import Image from "next/image";
import React from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import theme from "react-syntax-highlighter/dist/cjs/styles/prism/synthwave84";

import styles from "./SuperMarkdown.module.css";

export type ISuperMarkdonw = {
  markdownContent: string;
};

const SuperMarkdown = ({
  markdownContent,
}: {
  markdownContent: string;
}): JSX.Element => {
  return (
    <Markdown
      components={{
        code: function ({ ...props }) {
          const { children, className, ...rest } = props;

          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              {...rest}
              PreTag="div"
              language={match[1]}
              style={theme}
              className={styles.code}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
        p: function ({ ...props }) {
          // This avoid having images within <p> elements
          // TODO: Fix this. Paragraphs are not correctly added
          return typeof props.children === "object" ? (
            <>{props.children}</>
          ) : (
            <p>{props.children}</p>
          );
        },
        h2: function ({ ...props }) {
          const title = props.node?.children[0].valueOf()["value"];
          return (
            <h2 id={`anchor_${title}`}>
              <a href={`#anchor_${title}`}>{title}</a>
            </h2>
          );
        },
        img: function ({ ...props }) {
          if (!props.src) return;

          return (
            <figure>
              <Image
                src={props.src}
                alt={props.alt ?? ""}
                title={props.alt}
                width={900}
                height={900}
                sizes="(max-width: 768px) 100vw"
                style={{
                  objectFit: "contain",
                  width: "100%",
                  position: "relative",
                }}
              />
              {props.alt !== null ? <figcaption>{props.alt}</figcaption> : null}
            </figure>
          );
        },
      }}
      className={styles.markdownContent}
    >
      {markdownContent}
    </Markdown>
  );
};

export default SuperMarkdown;
