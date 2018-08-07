import React, { Component } from 'react';
import Block, { Section } from 'components/Theme/Block';
import Styles, { styled, css} from 'components/Theme/Styles';
import ThemeRichText from 'components/Theme/RichText'
import ThemeButton from 'components/Theme/Button';
import ThemeHeadline from 'components/Theme/Headline';

const Container = styled.div`
  background-color: ${props => props.theme.white};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Feature = styled.div`
   text-align: center;
`;

const Asset = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  overflow: hidden;
  width:100%;
  height:250px;
  background-image: url('${props => props.background && props.background}');
`;

const Button = styled(ThemeButton)`
  margin-top: 30px;
`;

const Headline = styled(ThemeHeadline)`
  color: ${props => props.theme.black};
`;

const Subheadline = styled(ThemeHeadline)`
  color: ${props => props.theme.black};
`;

class FeatureBlock extends Component {

  render() {
    const { slice } = this.props;
    const data = slice.primary;
    const items = slice.items;

    return (
      <Block height={data.height}>
        <Section align={data.align} justify={data.justify}>
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
        </Section>
      </Block>
    )
  }
}

export default FeatureBlock;

export const query = graphql`
  fragment FeatureBlock on PrismicPageBodyFeatureBlock {
    slice_type
    primary {
      height
      justify
      align
    }
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
      }
    }
  }
`;

