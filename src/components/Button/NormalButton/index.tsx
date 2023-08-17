import { memo } from "react";
import { Container } from "./style";

interface ButtonProps {
  isActive?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  style?: React.CSSProperties;
}

function Button(props: ButtonProps) {
  return (
    <Container
      disabled={props.disabled}
      isActive={props.isActive}
      onClick={props.onClick}
      type={props.type}
      style={props.style}
    >
      {props.children}
    </Container>
  );
}

export default memo(Button);
