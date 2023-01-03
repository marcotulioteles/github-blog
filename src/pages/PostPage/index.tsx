import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Header, LinksContainer, LinkItem } from "./styles";
import { faChevronLeft, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

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
      </Header>
    </Container>
  )
}