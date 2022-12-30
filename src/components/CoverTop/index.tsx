import { Container } from "./styles";

import logo from '../../assets/logo.svg';

export function CoverTop() {
  return (
    <Container>
      <img src={logo} alt="Logo" width={148} />
    </Container>
  )
}