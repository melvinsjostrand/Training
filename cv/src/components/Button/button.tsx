import styled from "styled-components";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const But = styled.button`
`;

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <But onClick={onClick} 
    >
      {children}
    </But>
  );
};

export default Button;
