import { Container, List, Bar, TagsGroup, Tag } from "./style";

interface DetailProps {
  name: string;
  tags?: string[];
  details?: string[];
}

export default function Detail(props: DetailProps) {
  return (
    <Container>
      <h1>{props.name}</h1>
      {props.tags && props.tags.length !== 0 && (
        <TagsGroup>
          {props.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagsGroup>
      )}
      {props.details && props.details.length !== 0 && (
        <>
          <Bar />
          <List>
            {props.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </List>
        </>
      )}
    </Container>
  );
}
