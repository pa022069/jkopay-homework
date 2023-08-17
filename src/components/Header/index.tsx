import { Container, LeftArrowIcon, HeaderTitle } from "./style";

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
      <HeaderTitle className="title">{props.title}</HeaderTitle>
    </Container>
  );
}
