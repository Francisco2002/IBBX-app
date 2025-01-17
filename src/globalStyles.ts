import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";


const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Istok+Web:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

    :root {
    }

    * {
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
        font-family: "Istok Web", sans-serif;
    }

    body {
        background-color: ${theme.colors.background};
    }
`;

export default GlobalStyles;