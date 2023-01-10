import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    flex-direction: column;
    margin: auto auto;
    
    h1 {
      font-size: 32px;
    }

    p {
      font-size: 16px;
    }
  }
`;