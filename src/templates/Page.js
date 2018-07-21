import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from 'material-ui/utils/withWidth';
import { withStyles } from 'material-ui/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StandardHero from '../components/Page/StandardHero';
import HighlightHero from '../components/Page/HighlightHero';
import DoubleBlockSection from '../components/Page/DoubleBlockSection';
import LogoBlock from '../components/Page/LogoBlock';
import LogoBlockInline from '../components/Page/LogoBlockInline';
import SingleImageSection from '../components/Page/SingleImageSection';
import { connect } from 'airlytics';


const styles = theme => ({
  cta: {
    marginTop: '30px',
  },
});

class Page extends Component {

  renderSection(section) {
    switch (section.__typename) {
      case 'ContentfulLayoutDoubleBlockSection':
        return <DoubleBlockSection data={section} />
      case 'ContentfulLayoutLogoBlock':
        return <LogoBlock data={section} />
      case 'ContentfulLayoutSingleImageSection':
        return <SingleImageSection data={section} />
      case 'ContentfulLayoutLogoBlockInline':
        return <LogoBlockInline data={section} />
    }
  }

  renderHero(hero) {
    console.log(hero)
    switch (hero.__typename) {
      case 'ContentfulLayoutStandardHero':
        return <StandardHero hero={hero} />
      case 'ContentfulLayoutHighlightHero':
        return <HighlightHero hero={hero} />
    }
  }

  render() {
    const { classes } = this.props;
    const page = this.props.data.contentfulPage
    const { hero, sections } = page

    return (
      <div className={classes.home}>
        <Header />
        {this.renderHero(hero[0])}
        {(sections||[]).map((section, i) => this.renderSection(section) )}
        <Footer />
      </div>
    );
  }
}


Page.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}

export default compose(withStyles(styles), withWidth(), connect())(Page);

export const pageQuery = graphql`
  query pageQuery($id: String!) {
    contentfulPage(id: { eq: $id }) {

      hero {
        ... on ContentfulLayoutStandardHero {
          headline
          subheadline
          ctaLabel
          heroAsset {
            title
            file {
              url
              contentType
            }
          }
        }

        ... on ContentfulLayoutHighlightHero {
          superheadline
          headline
          heroAsset {
            file {
              url
              contentType
            }
          }
          features {
            headline
            subheadline
          }
        }
      }

      sections {
        ... on ContentfulLayoutDoubleBlockSection {
          backgroundColor
          headline
          headlineColor
          subheadline
          subheadlineColor
          reverseDirection
          image {
            title
            file {
              url
              contentType
            }
          }
        }

        ... on ContentfulLayoutLogoBlock {
          headline
          logos {
            id
            title
            file {
              url
              contentType
            }
          }
        }

        ... on ContentfulLayoutSingleImageSection {
          headline
          subheadline
          image {
            title
            file {
              url
              contentType
            }
          }
        }


        ... on ContentfulLayoutLogoBlockInline {
          logos {
            title
            file {
              url
              contentType
            }
          }
        }

      }
    }
  }
`
