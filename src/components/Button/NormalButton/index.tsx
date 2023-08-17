import { Container } from "./style";

interface ButtonProps {
  isActive?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

export default function Button(props: ButtonProps) {
  return (
    <Container
      disabled={props.disabled}
      isActive={props.isActive}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </Container>
  );
}
