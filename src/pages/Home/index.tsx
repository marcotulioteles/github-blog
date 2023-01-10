import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { Container, PostWrapper, SearchContainer, SearchHeader, SearchInput } from "./styles";

const posts = [
  { id: 'VMnaljhqwi' },
  { id: 'EtaqwerRoy' },
  { id: 'IUtwfTwert' },
  { id: 'ARIgiujrtJ' },
  { id: 'IYGftiasTR' },
]

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
        {posts.map(item => (
          <Post key={item.id} postId={item.id} />
        ))}
      </PostWrapper>
    </Container>
  )
}