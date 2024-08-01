import React from "react";
import { Container } from "./styles";
import Logo from "../Logo";

const Header: React.FC = () => {
    return (
        <Container>
            <div onClick={() => window.location.href = "/"}>
                <Logo />
            </div>
        </Container>
    )
}

export default Header;