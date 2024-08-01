import styled from "styled-components";
import { theme } from "../../theme";

export const FormBody = styled.div`
    margin-bottom: 30px;
`;

export const FormFooter = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;

    @media (max-width: 768px) {
        justify-content: flex-start;
        
        button {
            width: 100%;
        }
    }
`;

export const InputContainer = styled.div`
    display:  flex;
    flex-direction: column;
    flex: 1;

    input, textarea, select {
        width: 100%;
        padding: 10px 15px;
        border-radius: 5px;
        font-size: ${theme.typography.size.text};
        color: ${theme.colors.dark};
        outline: none;
        margin: 5px 0;
        border: 1px solid ${theme.colors.gray};

        &::placeholder {
            color: rgba(${theme.colors.darkHex}, .8);
        }
    }

    .error-message {
        color: ${theme.colors.danger};
        font-size: ${theme.typography.size.small};
        font-weight: ${theme.typography.weight.bold};
        margin-top: 5px;
        margin-left: 5px;
    }
`;