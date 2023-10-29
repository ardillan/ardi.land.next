import React from "react";
import Date from "@/components/Date";
import Link from "next/link";

import styles from "./Posts.module.css";

const Posts = ({ allPostsData }): JSX.Element => {
  return (
    <ul className={styles.posts}>
      {allPostsData.map((post: { id: number; date: string; title: string }) => {
        return (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
            <br />
            <small>
              <Date dateString={post.date} />
            </small>
          </li>
        );
      })}
    </ul>
  );
};

export default Posts;
