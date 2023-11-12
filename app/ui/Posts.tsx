import Link from "next/link";
import React from "react";

import Date from "@/appComponents/Date";
import { IPostData } from "@/interfaces/IPost";

import styles from "./Posts.module.css";

const Posts = ({ allPostsData }: { allPostsData: IPostData }): JSX.Element => (
  <ul className={styles.posts}>
    {allPostsData.map((post: { id: number; date: string; title: string }) => {
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

export default Posts;
