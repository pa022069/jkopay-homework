import { Container } from "./style";

interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  return (
    <Container>{props.title}</Container>
  )
}