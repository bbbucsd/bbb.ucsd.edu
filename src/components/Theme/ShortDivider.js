import Styles, { media, styled } from './Styles';

const ShortDivider = styled.div`
  background-image: -webkit-gradient(radial, right top, 10, 90% 0%, 150, from(${p => p.theme.brandSuccess}), to(${p => p.theme.brandInfo}));
  background-image: -webkit-radial-gradient(right top, 100% 600px, ${p => p.theme.brandSuccess}, ${p => p.theme.brandInfo});
  background-image: -moz-radial-gradient(right top, farthest-corner, ${p => p.theme.brandSuccess} 0%, ${p => p.theme.brandInfo} 72%);
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  height: 3px;
  width: 100%;
  ${media.greaterThan('small')`
    width: 30%;
  `}

`;

export default ShortDivider;
