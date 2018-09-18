import { styled, media } from 'components/Theme/Styles';
import { Container } from 'styled-bootstrap-components';

const ModalContainer = styled(Container)`
  padding: 25px;
  border-radius: 5px;
  border-top: 4px solid ${p => p.theme.brandInfo};
  width: 100%;
  min-height: 100%;
  ${media.greaterThan('medium')`
    ${p => p.width && 'width: ' + p.width + 'px'};
    min-height: 200px;
  `}
  background: white;
  &:before {
    content: ' ';
    position: absolute;
    top: -1px;
    background-image: -webkit-gradient(radial, right top, 10, 90% 0%, 150, from(${p => p.theme.brandSuccess}), to(${p => p.theme.brandInfo}));
    background-image: -webkit-radial-gradient(right top, 100% 600px, ${p => p.theme.brandSuccess}, ${p => p.theme.brandInfo});
    background-image: -moz-radial-gradient(right top, farthest-corner, ${p => p.theme.brandSuccess} 0%, ${p => p.theme.brandInfo} 72%);
    width: 100%;
    left: 0;
    z-index: 1;
    height: 5px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
`;

export default ModalContainer;
