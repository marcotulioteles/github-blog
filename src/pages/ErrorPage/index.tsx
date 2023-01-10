import { useRouteError } from "react-router-dom";
import { Container } from "./styles";

export function ErrorPage() {
  const error: any = useRouteError();

  return (
    <Container>
      <div className="content">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has ocurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </Container>
  )
}