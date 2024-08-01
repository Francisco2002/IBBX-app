import React, { PropsWithChildren } from "react";
import { ButtonClose, ModalBody, ModalContent, ModalHeader, ModalOverlay, ModalTitle } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { theme } from "../../theme";

type ModalProps = {
    open: boolean;
    close: () => void;
    title: string;
}

const Modal: React.FC<PropsWithChildren<ModalProps>> = ({ open, close, title, children }) => {
    return (
        <ModalOverlay style={{ display: open ? "flex" : "none" }}>
            <ModalContent>
                <ModalHeader>
                    <ModalTitle variant="title">{title}</ModalTitle>

                    <ButtonClose onClick={close}>
                        <AiOutlineClose width="20px" color={theme.colors.danger} />
                    </ButtonClose>
                </ModalHeader>

                <ModalBody>
                    {children}
                </ModalBody>
            </ModalContent>
        </ModalOverlay>
    );
}

export default Modal;