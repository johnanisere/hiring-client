import styled, { css } from "styled-components";
import { size, color, thickness, lineHeight, spacing } from "./mixins";
import theme from "./Theme";
const Text = styled.p`
  margin: ${theme.spacing.margin.m0};
  ${size};
  ${color};
  ${thickness};
  ${lineHeight};
  ${spacing};
  font-family: sans-serif;
  .small {
    font-size: ${theme.textSize[4]};
    color: ${theme.color.grey};
    font-weight: ${theme.weight.small};
  }
  ${({ defined }) =>
    defined &&
    css`
      width: 100%;
      max-width: 195px;
      text-transform: uppercase;
    `}
  ${({ spacingsonSM }) =>
    spacingsonSM &&
    css`
      @media (max-width: 668px) {
        margin-top: ${theme.spacing.margin.m2};
        margin-bottom: ${theme.spacing.margin.m2};
      }
    `}
    ${({ spacingsonLG }) =>
      spacingsonLG &&
      css`
        @media (max-width: 668px) {
          margin-top: ${theme.spacing.margin.m3};
          margin-bottom: ${theme.spacing.margin.m3};
        }
      `}
`;

export default Text;
