import React, { Fragment, Component } from 'react';
import { connect } from 'airlytics';
import { StaticQuery, graphql } from 'gatsby';
import { styled } from 'components/Theme/Styles';
import { FacebookF } from 'styled-icons/fa-brands/FacebookF.cjs';
import { Twitter } from 'styled-icons/fa-brands/Twitter.cjs';
import { LinkedinIn } from 'styled-icons/fa-brands/LinkedinIn.cjs';
import ShortDivider from 'components/Theme/ShortDivider';
import {
  Container,
  Row,
  Column
} from 'styled-bootstrap-components';

const BottomRow = styled(Row)`
  margin-top: 15px;
`;

const TopRow = styled(Row)`
  margin-bottom: 15px;
`;

const BlockContainer = styled(Container)`
  padding-top: ${p => p.paddingTop ? 25 : 0}px;
  padding-bottom: ${p => p.paddingTop ? 25 : 0}px;
`;

const ShareContainer = styled.div`
`;

const Share = styled.div`
  cursor: pointer;
  background-color: ${p => p.color || 'transparent'};
  border-radius: 100px;
  padding: 12px 14px;
  margin: 0 20px;
  display: inline-block;
`;

const SocialLink = styled.div`
  text-align: center;
  position: relative;
  top: 2px;
  left: 1px;
  display: inline-block;

  svg {
    width:20px;
    height:20px;
  }
`;


class SocialRow extends Component {

  shareFacebook = () => {
    this.props.actions.shareFacebook(window.location.href);
  }

  shareLinkedIn = () => {
    this.props.actions.shareLinkedIn(window.location.href);
  }

  shareTwitter = (config) => {
    this.props.actions.shareTwitter(window.location.href, window.document.title, config.twitter.site);
  }

  render() {
    return (
      <Fragment>
        <StaticQuery
          query={graphql`
            query SocialRowQuery {
              site {
                siteMetadata {
                  twitter {
                    site
                  }
                }
              }
            }
          `}
          render={graph => {
            const config = graph.site.siteMetadata;
            const { slice } = this.props;
            const data = slice.primary;
            return (
              <BlockContainer paddingTop={data.padding_top === "Yes"} paddingBottom={data.padding_bottom === "Yes"}>
                {data.divider_top === "Yes" && (
                  <TopRow justifyContent="center">
                    <Column lg={data.full_width === "Yes" ? 12 : 9} justifyContent="center" display="flex">
                      <ShortDivider />
                    </Column>
                  </TopRow>
                )}

                <Row justifyContent="center">
                  <Column lg={data.full_width === "Yes" ? 12 : 9} justifyContent="center" display="flex">
                    <ShareContainer>
                      <Share color="#55ACEE" onClick={() => { this.shareTwitter(config) }}>
                        <SocialLink><Twitter color="white" /></SocialLink>
                      </Share>
                      <Share color="#4267B2" onClick={this.shareFacebook}>
                        <SocialLink ><FacebookF color="white" /></SocialLink>
                      </Share>
                      <Share color="#0077B5" onClick={this.shareLinkedIn}>
                        <SocialLink><LinkedinIn color="white" /></SocialLink>
                      </Share>
                    </ShareContainer>
                  </Column>
                </Row>
                {data.divider_bottom === "Yes" && (
                  <BottomRow justifyContent="center">
                    <Column lg={data.full_width === "Yes" ? 12 : 9} justifyContent="center" display="flex">
                      <ShortDivider />
                    </Column>
                  </BottomRow>
                )}
              </BlockContainer>
              )
          }}
        />
      </Fragment>
    )
  }
}

export default connect()(SocialRow);

export const query = graphql`
  fragment SocialRow on SocialRow {
    __typename
    primary {
      padding_top
      padding_bottom
      divider_top
      divider_bottom
      full_width
      share_link {
        url
      }
    }
  }
`;
