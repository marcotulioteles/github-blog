import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Header, LinksContainer, LinkItem, DetailsContainer, DetailsItem, MarkdownWrapper } from "./styles";
import { faChevronLeft, faArrowUpRightFromSquare, faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons";
import { FaGithub } from 'react-icons/fa';
import ReactMarkdown from "react-markdown";
import { MARKDOWN_EXAMPLE } from "./markdown-example";

export function PostPage() {
  return (
    <Container>
      <Header>
        <LinksContainer>
          <LinkItem iconPosition="left">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>Voltar</span>
          </LinkItem>
          <LinkItem iconPosition="right">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            <span>Ver no github</span>
          </LinkItem>
        </LinksContainer>
        <h1>JavaScript data types and data structures</h1>

        <DetailsContainer>
          <DetailsItem>
            <FaGithub />
            <span>marcotulioteles</span>
          </DetailsItem>
          <DetailsItem>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Há 1 dia</span>
          </DetailsItem>
          <DetailsItem>
            <FontAwesomeIcon icon={faComment} />
            <span>5 comentários</span>
          </DetailsItem>
        </DetailsContainer>
      </Header>

      <MarkdownWrapper>
        <ReactMarkdown children={MARKDOWN_EXAMPLE.description} />
      </MarkdownWrapper>
    </Container>
  )
}