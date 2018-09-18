import React, { Component } from 'react';
import ReactDisqusComments from "react-disqus-comments";
import { styled } from 'components/Theme/Styles';
import { StaticQuery, graphql } from "gatsby";
import {
  Container,
  Row,
  Column
} from 'styled-bootstrap-components';

const BlockContainer = styled(Container)`
  padding-top: ${p => p.paddingTop ? 25 : 0}px;
  padding-bottom: ${p => p.paddingTop ? 25 : 0}px;
`;


class Disqus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toasts: []
    };
    this.notifyAboutComment = this.notifyAboutComment.bind(this);
    this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this);
  }

  onSnackbarDismiss() {
    const [, ...toasts] = this.state.toasts;
    this.setState({ toasts });
  }

  notifyAboutComment() {
    const toasts = this.state.toasts.slice();
    toasts.push({ text: "New comment available!" });
    this.setState({ toasts });
  }

  render() {
    const { slice } = this.props;
    const {
      headline,
      full_width,
      padding_top,
      padding_bottom,
    } = slice.primary;
    const disqusShortname = 'AutomateYourBrand';

    return (
      <BlockContainer paddingTop={padding_top === "Yes"} paddingBottom={padding_bottom === "Yes"}>
        <Row justifyContent="center">
          <Column lg={full_width === "Yes" ? 12 : 9} alignContent="center">
            <StaticQuery
              query={graphql`
                query DisqusQuery {
                  site {
                    siteMetadata {
                      siteUrl
                    }
                  }
                }
              `}
              render={data => {
                return (
                  <ReactDisqusComments
                    shortname={disqusShortname}
                    identifier={headline}
                    title={headline}
                    onNewComment={this.notifyAboutComment}
                  />
                );
              }}
            />
          </Column>
        </Row>
      </BlockContainer>
    )
  }
}

export default Disqus;

export const query = graphql`
  fragment Disqus on Disqus {
    __typename
    primary {
      headline {
        text
      }
      full_width
      padding_top
      padding_bottom
    }
  }
`;
