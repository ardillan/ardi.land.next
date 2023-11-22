import React from "react";

import BasicLayout from "@/appComponents/BasicLayout";
import Posts from "@/appComponents/Posts";
import Welcome from "@/appComponents/Welcome";
import { IMarkDownData } from "@/interfaces/IMarkDownData";
import { getSortedPostsData } from "@/lib/posts";

import global from "../ui/Global.module.css";

const Home = async (): Promise<JSX.Element> => {
  const allPostsData = await getAllPostData();

  return (
    <BasicLayout>
      <div className={global.container}>
        <Welcome />
        <Posts layout="list" allPostsData={allPostsData} />
      </div>
    </BasicLayout>
  );
};

const getAllPostData = async (): Promise<IMarkDownData[]> =>
  getSortedPostsData();

export default Home;
