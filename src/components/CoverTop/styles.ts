import styled from "styled-components";

import coverTopImage from '../../assets/cover.png';

export const Container = styled.header`
  width: 100%;
  height: 296px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-image: url(${coverTopImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  img {
    margin-top: 64px;
  }
`;