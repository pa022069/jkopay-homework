import { Container } from "./style";

interface ButtonProps {
  isActive?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}

export default function Button(props: ButtonProps) {
  return (
    <Container
      isActive={props.isActive}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </Container>
  );
}
