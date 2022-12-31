import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  position: relative;

  img {
    width: 148px;
    height: 148px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: ${({ theme }) => theme.colors["base-title"]};
    font-size: ${({ theme }) => theme.font.sizes.xxl};
    font-weight: 700;
    margin-bottom: 8px;
  }

  p {
    color: ${({ theme }) => theme.colors["base-text"]};
    font-size: ${({ theme }) => theme.font.sizes.regular};
    font-weight: 400;
    text-align: justify;
    margin-bottom: 24px;
  }
`;

export const ProfileDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const DetailsItem = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.font.sizes.lg};
  color: ${({ theme }) => theme.colors["base-label"]};
  gap: 8px;

  span {
    font-size: ${({ theme }) => theme.font.sizes.regular};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }
`;

export const GithubLink = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.font.sizes.sm};
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  position: absolute;
  top: 40px;
  right: 40px;
`