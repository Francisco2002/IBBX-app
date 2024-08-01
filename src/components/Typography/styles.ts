import styled from "styled-components";
import { theme } from "../../theme";

export const Text = styled.span`
    color: ${theme.colors.dark};

    &.txt-normal {
        font-size: ${theme.typography.size.text};
    }

    &.txt-title {
        font-size: ${theme.typography.size.title};
        font-weight: ${theme.typography.weight.bold};
    }
`;