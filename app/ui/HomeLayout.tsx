import React from "react";

import BasicLayout from "@/appComponents/BasicLayout";
import Posts from "@/appComponents/Posts";
import Welcome from "@/appComponents/Welcome";
import { getSortedPostsData } from "@/lib/getPostData";

import global from "../ui/Global.module.css";

const Home = () => {
  const allPostsData = getSortedPostsData(5);

  return (
    <BasicLayout>
      <div className={global.container}>
        <Welcome />
        <Posts layout="list" allPostsData={allPostsData} />
      </div>
    </BasicLayout>
  );
};

export default Home;
