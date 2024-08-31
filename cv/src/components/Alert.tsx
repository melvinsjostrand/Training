import { ReactNode } from "react";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const DivAlert = styled.div`
    padding: 20px;
    background-color: #f44336;
    color: white;
    border-radius: 5px; 
    margin-bottom: 15px; 
    position: relative; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
`;

const Alert = ({ children, onClose }: Props) => {
  return (
    <DivAlert>
      {children}
      <IoClose
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></IoClose>
    </DivAlert>
  );
};

export default Alert;
