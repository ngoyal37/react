import React from "react";
import Layout from "../components/common/Layout";
import { Link } from "react-router-dom";

const Productlst = () => {
    return (<Layout>
        <h1>Productlst</h1>
        <Link to={"1"}>Go to Product Detail page</Link>
    </Layout>);
}
export default Productlst;