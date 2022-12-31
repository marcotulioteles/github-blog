import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { Container, PostWrapper, SearchContainer, SearchHeader, SearchInput } from "./styles";

export function Home() {
  return (
    <Container>
      <Profile />
      <SearchContainer>
        <SearchHeader>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </SearchHeader>
        <SearchInput
          placeholder="Buscar conteúdo"
        />
      </SearchContainer>

      <PostWrapper>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostWrapper>
    </Container>
  )
}