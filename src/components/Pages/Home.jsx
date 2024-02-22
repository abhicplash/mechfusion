import React from "react";
import Banner from "../Layout/Banner";
import Layout from "../Layout/Layout";
import ServiceHome from "../Layout/ServiceHome";

function Home() {
  return (
    <Layout>
      <Banner />
      {/* <Home_Services /> */}
      <ServiceHome/>
    </Layout>
  );
}

export default Home;
