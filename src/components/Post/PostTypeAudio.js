import React, { Fragment, Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import StandardAudioHero from '../Theme/StandardAudioHero';
import StandardHero from '../Theme/StandardHero';
import SimpleHero from '../Theme/SimpleHero';
import ContentBlock from '../Theme/ContentBlock';
import { connect } from 'airlytics';

const styles = theme => ({

});

class PostTypeVideo extends Component {

  renderHero(hero) {
    switch (hero.__typename) {
      case 'ContentfulLayoutStandardHero':
        return <StandardHero hero={hero} />
      case 'ContentfulLayoutStandardAudioHero':
        return <StandardAudioHero hero={hero} />
      case 'ContentfulLayoutSimpleHero':
        return <SimpleHero hero={hero} />
    }
  }

  renderSection(section, index) {
    switch (section.__typename) {
      case 'ContentfulLayoutContentBlock':
        return <ContentBlock key={`section_${index}`} data={section} />
    };
  }

  render() {
    const { classes } = this.props;
    const { hero, sections } = this.props.type;

    return (
      <div>
        {this.renderHero(hero[0])}
        {(sections||[]).map((section, i) => this.renderSection(section, i) )}
      </div>
    );
  }
}


PostTypeVideo.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}

export default compose(withStyles(styles), withWidth(), connect())(PostTypeVideo);

export const query = graphql`
  fragment PostTypeAudio on ContentfulPostTypeAudio {
    hero {
      ...StandardHero
      ...StandardAudioHero
      ...SimpleHero
    }

    sections {
      ...ContentBlock
    }
  }
`;
