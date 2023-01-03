import styled from "styled-components";

interface LinkItemProps {
  iconPosition: 'left' | 'right';
}

export const Container = styled.main`
  width: 100%;
  max-width: 854px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: -88px auto 0;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors["base-background"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinkItem = styled.div<LinkItemProps>`
  display: flex;
  align-items: center;
  flex-direction: ${({ iconPosition }) => iconPosition === 'right' ? 'row-reverse' : 'row'};
  gap: 8px;
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.font.sizes.sm};
  text-transform: uppercase;
  cursor: pointer;

  a {
    text-decoration: none;
  }
`;