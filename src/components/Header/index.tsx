import React from "react";
import { Container, LogoContainer } from "./styles";
import Logo from "../Logo";

const Header: React.FC = () => {
    return (
        <Container>
            <LogoContainer onClick={() => window.location.href = "/"}>
                <Logo />
            </LogoContainer>
        </Container>
    )
}

export default Header;