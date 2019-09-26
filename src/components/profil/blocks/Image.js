import styled from "styled-components";

const Image = styled.img`
  border-radius: 4px;
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 240px;
  margin-right: 25px;
  @media (max-width: 668px) {
    margin: 0 auto;
    margin-bottom: 10px;
  }
`;

export default Image;
