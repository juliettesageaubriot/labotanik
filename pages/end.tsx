import React from "react";
import HeadTag from "@components/HeadTag/HeadTag";
import EndPage from "@components/EndPage/EndPage";
import Layout from "@components/Layout/Layout";

const End = () => {
    return (
        <Layout page="end">
            <HeadTag title="LaBotaNik' - Fin" />
            <EndPage />
        </Layout>
    )
}

export default End