import { Fragment, memo } from "react";
import { Bar } from "@/components/Bar";
import { Container, Content } from "./style";
import { ArticleType } from "@/types";

interface AboutProps {
  data: ArticleType[];
}

function About(props: AboutProps) {
  return (
    <Container>
      {props.data.map((item: ArticleType, index: number) => (
        <Fragment key={item.title}>
          {index !== 0 && <Bar />}
          <Content>
            <h2 className="PAbout__title">{item.title}</h2>
            <p className="PAbout__text">{item.content}</p>
          </Content>
        </Fragment>
      ))}
    </Container>
  );
}

export default memo(About);
