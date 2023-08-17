import { memo } from "react";
import { Container, LeftArrowIcon, HeaderTitle } from "./style";

interface HeaderProps {
  title: string;
  style?: React.CSSProperties;
  handleGoBack?: () => void;
}

function Header(props: HeaderProps) {
  return (
    <Container style={props.style}>
      {
        props.handleGoBack && <LeftArrowIcon onClick={props.handleGoBack} />
      }
      <HeaderTitle className="title">{props.title}</HeaderTitle>
    </Container>
  );
}

export default memo(Header);
