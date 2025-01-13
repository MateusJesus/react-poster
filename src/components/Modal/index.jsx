import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
`;

const Dialog = styled.dialog`
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  background-color: transparent;
  width: 50%;
  border: none;
`;

const Modal = ({ children }) => {
  const navigate = useNavigate();
  const onClose = () => {
    navigate("..");
  };

  return (
    <>
      <Overlay onClick={onClose} />
      <Dialog open>{children}</Dialog>
    </>
  );
};

export default Modal;
