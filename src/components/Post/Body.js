import React, { Fragment, Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import ArticleHero from './ArticleHero';
import AudioHero from './AudioHero';
import VideoHero from './VideoHero';
import ContentBlock from '../Theme/ContentBlock';
import { connect } from 'airlytics';

const styles = theme => ({

});

class Body extends Component {

  renderSection(section, index) {
    switch (section.__typename) {
      case 'ContentfulLayoutContentBlock':
        return <ContentBlock key={`section_${index}`} data={section} />
    };
  }

  renderHero(hero) {
    switch (hero.__typename) {
      case 'ContentfulLayoutPostTypeArticle':
        return <ArticleHero hero={hero} />
      case 'ContentfulLayoutPostTypeAudio':
        return <AudioHero hero={hero} />
      case 'ContentfulLayoutPostTypeVideo':
        return <VideoHero hero={hero} />
    }
  }

  render() {
    const { classes } = this.props;
    const page = this.props.data.contentfulPost
    const { type, sections } = page

    return (
      <div>
        {this.renderHero(type[0])}
        {(sections||[]).map((section, i) => this.renderSection(section, i) )}
      </div>
    );
  }
}


Body.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}

export default compose(withStyles(styles), withWidth(), connect())(Body);

export const query = graphql`
  fragment PostBody on ContentfulPost {
      type {
        ...ArticleHero
        ...AudioHero
        ...VideoHero
      }

      sections {
        ...ContentBlock
      }
  }
`;
