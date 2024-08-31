import styled from "styled-components";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const But = styled.button`
  background-color: #4caf50; 
  border: none; 
  color: white; 
  padding: 15px 32px; 
  text-align: center; 
  text-decoration: none; 
  display: inline-block; 
  font-size: 16px; 
  margin: 4px 2px; 
  cursor: pointer; 
  border-radius: 8px; 
  transition: background-color 0.3s ease; 
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
