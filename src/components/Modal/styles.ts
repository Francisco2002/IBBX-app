import styled from "styled-components";
import Typography from "../Typography";
import { theme } from "../../theme";

export const ModalOverlay = styled.div`
    position: fixed;
    display: flex;
    height: 100%;
    width: 100vw;
    background-color: rgba(${theme.colors.darkHex},.5);
    top: 0;
    left: 0;

    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    z-index: 2;
`;

export const ModalContent = styled.div`
    background-color: ${theme.colors.light};
    padding: 25px;
    border-radius: 10px;
    width: 60%;

    @media (max-width: 768px) {
        width: 95%;
    }

    &.slide-top {
        -webkit-animation: slide-top 0.5s both;
        animation: slide-top 0.5s both;
    }

    @-webkit-keyframes slide-top {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateY(-100px);
            transform: translateY(-100px);
            opacity: 1;
        }
    }
    @keyframes slide-top {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateY(-100px);
            transform: translateY(-100px);
            opacity: 1;
        }
    }
`;

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const ModalTitle = styled(Typography)``;

export const ButtonClose = styled.button`
    font-size: ${theme.typography.size.title};
    font-weight: ${theme.typography.weight.bold};
    cursor: pointer;
`;

export const ModalBody = styled.div``;