import React from "react";
import Banner from "../Layout/Banner";
import Layout from "../Layout/Layout";
import ServiceHome from "../Layout/ServiceHome";
import AboutHome from "../Layout/AboutHome";

function Home() {
  return (
    <Layout>
      <Banner />
      <AboutHome />
      <ServiceHome />
    </Layout>
  );
}

export default Home;
