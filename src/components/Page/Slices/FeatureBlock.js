import React, { Component } from 'react';
import Block, { Section } from 'components/Theme/Block';
import Styles, { styled, css} from 'components/Theme/Styles';
import ThemeRichText from 'components/Theme/RichText'
import ThemeButton from 'components/Theme/Button';
import ThemeHeadline from 'components/Theme/Headline';

const Container = styled(Block)`
  background-color: ${props => props.theme.white};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: ${props => props.theme.largePadding * 1.5}px;
`;

const Feature = styled(Section)`
   text-align: center !important;
   padding: 0 ${props => props.theme.largePadding};
`;

const Asset = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  overflow: hidden;
  width:100%;
  height:500px;
  background-image: url('${props => props.background && props.background}');
`;

const Button = styled(ThemeButton)`
  margin-top: 30px;
`;

const Headline = styled(ThemeHeadline)`
  // insert styles here
`;

const Subheadline = styled(ThemeHeadline)`
  // insert styles here
`;

class FeatureBlock extends Component {

  render() {
    const { slice } = this.props;
    const { items } = slice;

    return (
      <Container>
        {( items || [] ).map((item) =>
          <Feature>
            <Asset background={item.asset.url} />
            <Headline h2 text={item.headline} />
            <Subheadline h3 text={item.subheadline} />
            <Button small={true} to={item.cta_link && item.cta_link.url}>{item.cta_label}</Button>
          </Feature>
        )}
      </Container>
    )
  }
}

export default FeatureBlock;

export const query = graphql`
  fragment FeatureBlock on PrismicPageBodyFeatureBlock {
    slice_type
    items {
      asset {
        url
      }
      headline {
        text
      }
      subheadline {
        text
      }
      cta_label
      cta_link {
        url
        document {
          data {
            path
          }
        }
      }
    }
  }
`;

