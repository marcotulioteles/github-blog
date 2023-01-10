import { Container } from "./styles";
import { Link } from 'react-router-dom';

interface PostProps {
  postId: string;
}

export function Post({ postId }: PostProps) {
  return (
    <Container>
      <Link to={`/post/${postId}`}>
        <header>
          <h1>JavaScript data types and data structures</h1>
          <span>Há 1 dia</span>
        </header>
        <div className="post-text">
          <p>
            Programming languages all have built-in data structures, but these often
            differ from one language to another. This article attempts to list the
            built-in data structures available in JavaScript and what properties
            they have. These can be used to build other data structures. Wherever
            possible, comparisons with other languages are drawn.
          </p>
        </div>
      </Link>
    </Container>
  )
}