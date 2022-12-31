import { faArrowUpRightFromSquare, faBuilding, faCodeFork, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, DetailsItem, GithubLink, ProfileContent, ProfileDetails } from "./styles";

export function Profile() {
  return (
    <Container>

      <img src="https://github.com/marcotulioteles.png" alt="Foto do perfil" />

      <ProfileContent>
        <h1>Marco Túlio Teles dos Reis</h1>
        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas.
          Eu viverra massa quam dignissim aenean malesuada suscipit.
          Nunc, volutpat pulvinar vel mass.
        </p>

        <ProfileDetails>
          <DetailsItem>
            <FontAwesomeIcon icon={faCodeFork} />
            <span>marcotulioteles</span>
          </DetailsItem>
          <DetailsItem>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Ernst & Young</span>
          </DetailsItem>
          <DetailsItem>
            <FontAwesomeIcon icon={faUsers} />
            <span>13 seguidores</span>
          </DetailsItem>
        </ProfileDetails>

      </ProfileContent>

      <GithubLink>
        <span>github</span>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </GithubLink>

    </Container>
  )
}