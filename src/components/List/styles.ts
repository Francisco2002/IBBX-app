import styled from "styled-components";
import Typography from "../Typography";
import { theme } from "../../theme";

export  const ListContent = styled.div``;

export const ListHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
`;

export const ListFilter = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const ListTitle = styled(Typography)``;

export const ListAddButton = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.success};
    color: ${theme.colors.light};
    cursor: pointer;
    box-shadow: 0 4px 4px rgba(${theme.colors.darkHex}, .25);
`;

export const GraphicContainer = styled.div`
    width: 100%;
    height: 500px;
    margin: 30px 0;
    z-index: 1;
`;

export const ListBody = styled.div`
    margin-top: 15px;
`;

export const EmptyList = styled.div`
    font-weight: ${theme.typography.weight.bold};
    text-align: center;
`;

export const ListItem = styled.div`
    background-color: ${theme.colors.light};
    margin-bottom: 15px;
    box-shadow: 0 0 5px rgba(${theme.colors.darkHex},.25);
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    gap: 20px;
    justify-content: space-between;
`;

export const ListButton = styled.button`
    cursor: pointer;
    font-size: ${theme.typography.size.text};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    background-color: ${props => props.color};
    border-radius: 500px;
`;

export const ListSection = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const ListId = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};
    font-size: ${theme.typography.size.title};
    color: ${theme.colors.light};
`;

export const ListData = styled(Typography)``;