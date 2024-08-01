import styled from "styled-components";
import { theme } from "../../theme";

export const Button = styled.button`
    border: 2px solid ${theme.colors.primary};
    background-color: transparent;
    padding: 10px 75px;
    border-radius: 10px;

    color: ${theme.colors.primary};
    font-weight: ${theme.typography.weight.bold};
    font-size: ${theme.typography.size.text};
    cursor: pointer;
`;