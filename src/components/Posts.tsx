import React from "react";
import Date from "@/components/Date";
import Link from "next/link";

import styles from "./Posts.module.css";

const Posts = ({ allPostsData }): JSX.Element => {
  console.log(allPostsData.slice(0, 5));
  return (
    <ul className={styles.posts}>
      {allPostsData
        .slice(0, 5)
        .map((post: { id: number; date: string; title: string }) => {
          return (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>
                {post.title}
                <small>
                  <Date dateString={post.date} />
                </small>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default Posts;
