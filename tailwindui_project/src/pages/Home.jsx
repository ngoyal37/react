import React from "react";
import Layout from "../components/common/Layout";
import MainBanner from "../components/home/MainBanner";
import TabsSection from "../components/home/TabsSection";
import AboutSection from "../components/home/AboutSection";

const Home = () => {
    return (
        <Layout>
            <MainBanner />
            <AboutSection />
            <TabsSection />
        </Layout>
    );
}

export default Home;
