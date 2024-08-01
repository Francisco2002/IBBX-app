import React, { PropsWithChildren } from "react";
import { Body, Content } from "./styles";
import Header from "../Header";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {

    return (
        <Content>
            <Header />

            <Body>
                {children}
            </Body>
        </Content>
    );
}

export default Layout;