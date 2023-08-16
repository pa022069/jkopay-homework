import { Container, Content, Bar } from "./style";
import { ArticleType } from "@/types";

interface AboutProps {
  data: ArticleType[];
}

export default function About(props: AboutProps) {
  return (
    <Container>
      {props.data.map((item: ArticleType, index: number) => (
        <>
          {index !== 0 && <Bar />}
          <Content>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </Content>
        </>
      ))}
    </Container>
  );
}
