import { Container, LeftArrowIcon } from "./style";

interface HeaderProps {
  title: string;
  style?: React.CSSProperties;
  handleGoBack?: () => void;
}

export default function Header(props: HeaderProps) {
  return (
    <Container style={props.style}>
      {
        props.handleGoBack && <LeftArrowIcon onClick={props.handleGoBack} />
      }
      <p className="title">{props.title}</p>
    </Container>
  );
}
