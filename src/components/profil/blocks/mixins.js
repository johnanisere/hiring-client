import theme from './Theme';

export const size = ({ size1, size2, size3, size4, size5, size6 }) => `
font-size:${
  size1
    ? theme.textSize[1]
    : size2
    ? theme.textSize[2]
    : size3
    ? theme.textSize[3]
    : size4
    ? theme.textSize[5]
    : size5
    ? theme.textSize[6]
    : size6
    ? theme.textSize[7]
    : theme.textSize[4]
}
`;

export const color = ({ blue, grey, white }) => `
color:${
  blue
    ? theme.color.blue
    : white
    ? theme.color.white
    : grey
    ? theme.color.grey
    : theme.color.black
}
`;

export const thickness = ({ bold, medium }) => `
font-weight:${
  bold ? theme.weight.bold : medium ? theme.weight.medium : theme.weight.small
}
`;

export const border = ({ top, bottom, left, right }) => `
border-top:${top ? `2px solid ${theme.color.lightgrey};` : '0px'}
border-bottom:${bottom ? `2px solid ${theme.color.lightgrey};` : '0px'}
border-left:${left ? `2px solid ${theme.color.lightgrey};` : '0px'}
border-right:${right ? `2px solid ${theme.color.lightgrey};` : '0px'}
`;

export const lineHeight = ({ l20 }) => `
line-height:${l20 ? '20px' : 'initial'}
`;
export const spacing = ({ mtb1, mt5 }) => `
margin-top:${mtb1 || mt5 ? theme.spacing.margin.m1 : '0px'};
margin-bottom:${mtb1 ? theme.spacing.margin.m1 : '0px'};
`;
