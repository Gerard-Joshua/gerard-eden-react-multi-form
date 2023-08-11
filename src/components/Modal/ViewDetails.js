import { useState, useContext, forwardRef, useImperativeHandle } from "react";
import 'react-responsive-modal/styles.css';
import { Modal } from "react-responsive-modal";
import { styled } from "styled-components";
import { FormContext } from "../../App";

const Section = styled.div`
    display: block;
    width: 500px;
`;

const Content = styled.span`
    display: block;
    padding-top: 10px;
    font-weight: bold;
`;

const ViewDetails = forwardRef((props, ref) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const { formData } = useContext(FormContext);

    useImperativeHandle(ref, () => ({
        handleShow(){
            setShow(true);
        }
    }));

    return (
        <>
            <Modal open={show} onClose={handleClose} center>
                <Section><Content>Full Name:</Content> {formData?.full_name}</Section>
                <Section><Content>Display Name:</Content> {formData?.display_name}</Section>
                <Section><Content>Workspace Name:</Content> {formData?.workspaceName}</Section>
                <Section><Content>Workspace URL:</Content> {formData?.workspaceURL}</Section>
                <Section><Content>Planning:</Content> {formData?.planning}</Section>
            </Modal>
        </>
    );
});

export default ViewDetails;
