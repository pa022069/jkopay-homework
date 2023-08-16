import { Container, LeftArrowIcon } from "./style";

interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  return (
    <Container>
      <LeftArrowIcon />
      <p className="title">{props.title}</p>
    </Container>
  );
}
