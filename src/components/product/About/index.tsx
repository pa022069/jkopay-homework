import { Fragment } from "react";
import { Bar } from "@/components/Bar";
import { Container, Content } from "./style";
import { ArticleType } from "@/types";

interface AboutProps {
  data: ArticleType[];
}

export default function About(props: AboutProps) {
  return (
    <Container>
      {props.data.map((item: ArticleType, index: number) => (
        <Fragment key={item.title}>
          {index !== 0 && <Bar />}
          <Content>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </Content>
        </Fragment>
      ))}
    </Container>
  );
}
