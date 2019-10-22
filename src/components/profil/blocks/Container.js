import styled, { css } from 'styled-components';
import { border } from './mixins';
import theme from './Theme';

const Container = styled.div`
  padding: ${theme.spacing.padding.p1};
  display: flex;
  max-width:1000px;
  
  margin-left:auto;
  margin-right:auto;
  ${border};
  ${({ fill }) =>
    fill &&
    css`
      flex: 1;
      flex-direction: column;
      width: 100%;
    `}
   
    ${({ noPad }) =>
      noPad &&
      css`
        padding: ${theme.spacing.padding.p0};
        width: 100%;
      `}
    ${({ grid }) =>
      grid &&
      css`
        padding: ${theme.spacing.padding.p0};
      `}
    ${({ spacebetween }) =>
      spacebetween &&
      css`
        justify-content: space-between;
      `}

@media(max-width:668px){
    flex-direction:column;
}
${({ tags }) =>
  tags &&
  css`
    font-family: 'Roboto', sans-serif;
    padding: ${theme.spacing.padding.p0};
    padding-top: ${theme.spacing.padding.p1};
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    @media (max-width: 668px) {
      flex-direction: row;
    }
  `}      
`;

export default Container;
