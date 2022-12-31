import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 854px;
  display: flex;
  flex-direction: column;
  margin: -88px auto 0;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 72px;
`;

export const SearchHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;

  h2 {
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    font-size: ${({ theme }) => theme.font.sizes.xl};
    font-weight: 700;
  }

  span {
    color: ${({ theme }) => theme.colors["base-span"]};
    font-size: ${({ theme }) => theme.font.sizes.md};
    font-weight: 400;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors["base-border"]};
  background-color: ${({ theme }) => theme.colors["base-input"]};
  color: ${({ theme }) => theme.colors["base-text"]};
  padding: 12px 16px;
  border-radius: 6px;
  transition: all 0.2s ease-in-out;
  
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.blue};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors["base-label"]};
  }
`;

export const PostWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-top: 48px;
`;