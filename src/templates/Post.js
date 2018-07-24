import React, { Fragment, Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Body from '../components/Post/Body';

const styles = theme => ({

});

class Post extends Component {

  render() {
    return (
      <div>
        <Header />
        <Body {...this.props} />
        <Footer />
      </div>
    );
  }
}


Post.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}

export default compose(withStyles(styles), withWidth())(Post);

export const pageQuery = graphql`
  query postQuery($id: String!) {
    contentfulPost(id: { eq: $id }) {
      ...PostBody
    }
  }
`
