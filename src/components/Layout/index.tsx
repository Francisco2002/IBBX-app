import React from "react";
import { Body, Content } from "./styles";
import Header from "../Header";
import List from "../List";

const Layout: React.FC = () => {

    return (
        <Content>
            <Header />

            <Body>
                <List />
            </Body>
        </Content>
    );
}

export default Layout;