import { Container, DetailsItem, GithubLink, ProfileContainer, ProfileContent, ProfileDetails } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faCodeFork, faBuilding, faUsers } from '@fortawesome/free-solid-svg-icons';

export function Home() {
  return (
    <Container>
      <ProfileContainer>

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

      </ProfileContainer>
    </Container>
  )
}