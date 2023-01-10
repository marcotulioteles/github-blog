import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 416px;
  max-height: 260px;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors["base-post"]};
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  &:hover {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors["base-label"]};
  }

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    
    h1 {
      color: ${({ theme }) => theme.colors["base-title"]};
      font-size: ${({ theme }) => theme.font.sizes.xl};
      font-weight: 700;
      max-width: 282px;
    }

    span {
      display: inline-block;
      color: ${({ theme }) => theme.colors["base-span"]};
      font-size: ${({ theme }) => theme.font.sizes.md};
      font-weight: 400;
    }
  }

  .post-text {
    white-space: normal;
    overflow: hidden;
    width: 100%;
    max-height: 108px;
    
    p {
      color: ${({ theme }) => theme.colors["base-text"]};
      font-size: ${({ theme }) => theme.font.sizes.regular};
      font-weight: 400;
    }
  }
`;