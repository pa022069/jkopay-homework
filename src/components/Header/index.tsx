import { Container, LeftArrowIcon } from "./style";

interface HeaderProps {
  title: string;
  style?: React.CSSProperties;
}

export default function Header(props: HeaderProps) {
  return (
    <Container style={props.style}>
      <LeftArrowIcon />
      <p className="title">{props.title}</p>
    </Container>
  );
}
