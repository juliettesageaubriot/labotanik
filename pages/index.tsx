import React from "react";
import HeadTag from "@components/HeadTag/HeadTag";
import HomePage from "@components/HomePage/HomePage";
import Layout from "@components/Layout/Layout";

const Home = () => {
  return (
    <Layout page="home">
      <HeadTag title="LaBotaNik'" />
      <HomePage />
    </Layout>
  )
}

export default Home