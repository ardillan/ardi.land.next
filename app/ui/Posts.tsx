/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Date from "@/appComponents/Date";
import { IPostData } from "@/interfaces/IPost";

import styles from "./Posts.module.css";

export type IDynamicPost = {
  allPostData?: IPostData[];
};

export const PostsImages = ({
  allPostsData,
}: {
  allPostsData: IPostData[];
}) => {
  return (
    <ul className={`${styles.default} ${styles.images}`}>
      {allPostsData.map((post: IPostData) => {
        const featuredImagePath = `/posts/${
          post.id
        }/${post?.featuredImage?.replace("./", "")}`;

        return (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <div className={styles.image}>
                <Image
                  src={`${featuredImagePath}`}
                  alt="Imagen de cabecera"
                  width={100}
                  height={100}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    position: "relative",
                  }}
                />
              </div>
              <div className={styles.meta}>
                <p>{post.title}</p>
                {post.description && <small>{post.description}</small>}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export const PostsList = ({ allPostsData }: { allPostsData: IPostData[] }) => {
  return (
    <ul className={`${styles.default} ${styles.list}`}>
      {allPostsData.map((post: IPostData) => {
        return (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              {post.title}
              {post.date && (
                <small>
                  <Date dateString={post.date} />
                </small>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const Posts = ({
  allPostsData,
  layout = "list",
}: {
  allPostsData: IPostData[];
  layout: string;
}): JSX.Element => {
  const dynamicPosts: { [key: string]: any } = {
    list: PostsList,
    images: PostsImages,
  };

  const DynamicPost = dynamicPosts[layout];

  return <DynamicPost allPostsData={allPostsData} />;
};

export default Posts;
