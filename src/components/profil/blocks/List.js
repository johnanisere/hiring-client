import styled, { css } from 'styled-components';
import theme from './Theme';

const List = styled.ul`
  padding: ${theme.spacing.padding.p0};

  font-family: sans-serif;
  li {
    margin-bottom: ${theme.spacing.margin.m2};
    margin-bottom: 5px;
    list-style: disc;
    padding: 0 0 3px;
    color: ${theme.color.grey};
    a {
      text-decoration: none;
    }
  }
  ${({ nobullet }) =>
    nobullet
      ? css`
          li {
            list-style: none !important;
            padding-left: ${theme.spacing.padding.p0};
          }
        `
      : css`
          padding-left: 16px;
        `}
  ${({ nomargin }) =>
    nomargin &&
    css`
      margin: ${theme.spacing.padding.p0};
    `}
`;
export default List;
