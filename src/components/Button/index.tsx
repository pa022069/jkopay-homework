import { Container } from "./style";

interface ButtonProps {
  isActive?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  return (
    <Container isActive={props.isActive} onClick={() => props.onClick}>
      {props.children}
    </Container>
  );
}
