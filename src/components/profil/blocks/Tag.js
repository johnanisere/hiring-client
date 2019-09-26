import styled from "styled-components";
import theme from "./Theme";

const Tag = styled.div`
  border-radius: 2px;
  border: 1px solid transparent;
  display: inline-block;
  padding: 2px 20px 0;
  margin-bottom: 7px;
  margin-right: 7px;
  background-color: ${theme.color.blue};
  color: ${theme.color.white};
  cursor: pointer;
  font-size: ${theme.textSize[7]};
  font-weight: ${theme.weight.medium};
  line-height: 25px;
  text-decoration: none;
`;

export default Tag;
