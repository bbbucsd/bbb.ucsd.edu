import React, { Fragment, Component } from 'react';
import { graphql } from 'gatsby';
import Block, { Section } from 'components/Theme/Block';
import ThemeHeadline from 'components/Theme/Headline';
import Text from 'components/Theme/Text';
import ThemeButton from 'components/Theme/Button';
import ShortDivider from 'components/Theme/ShortDivider';
import { styled, media } from 'components/Theme/Styles';
import { isMobileOnly } from "react-device-detect";

const Spacer = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
`;

const Headline = styled(ThemeHeadline)`
  font-family: ${p => p.theme.fontFamilyTitle};
  color: ${props => props.color || props.theme.black};
  ${media.greaterThan('medium')`
    font-size: ${props => props.theme.h2FontSize}px;
  `}
`;

const Subheadline = styled.div`
  color: ${props => props.color || props.theme.black};
  margin: 25px 0;
  ${media.greaterThan('small')`
    width: 50%;
  `}
`;

const Button = styled(ThemeButton)`
  margin-top:20px;
`;

const Primary = styled(Section)`
  & > div { width:80%; }
  ${media.lessThan('large')`
    padding: 0 !Important;
  `}
`;


class StatementBlock extends Component {
  render() {
    const { background_color,
            height,
            align,
            justify,
            headline,
            headline_color,
            subheadline,
            cta_label,
            cta_link
    } = this.props.slice.primary

    return (
      <Block color={background_color} height={height}>
        <Primary align={align} justify={justify}>
          <Headline h2 color={headline_color} text={headline} />
          {subheadline && subheadline.text ? (
            <Subheadline color={headline_color}>
              <Text body={subheadline} />
            </Subheadline>
          ) : (
            <Spacer />
          )}
          {cta_label ? (
            <Fragment>
              <Button large fullWidth={isMobileOnly} arrow={false} to={cta_link}>{cta_label}</Button>
              <Spacer />
            </Fragment>
          ) : (
            <ShortDivider />
          )}
        </Primary>
      </Block>
    );
  }
}

export default StatementBlock;

export const query = graphql`
  fragment StatementBlock on StatementBlock {
    __typename
    primary {
      height
      align
      justify
      background_color
      headline_color
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
          ...Link
        }
      }
    }
  }
`;
