import { Icon } from "@iconify/react";
// import home from "@iconify/icons-mdi-light/home";
import React from "react";
import Layout from "../../common/Layout/Layout";

const FarmList = () => {
    const list = [{ name: "Farm du lol", content: "Lolilol" }];

    return (
        <Layout>
            <h1>FarmList OMG!!!!!!!!!!!!!!!!!!!</h1>
            <Icon icon="home" />
        </Layout>
    );
};

export default FarmList;
