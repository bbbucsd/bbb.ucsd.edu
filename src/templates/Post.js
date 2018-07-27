import React, { Fragment, Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import Header from '../components/_Header';
import Footer from '../components/_Footer';
import PostTypeArticle from '../components/Post/PostTypeVideo';
import PostTypeAudio from '../components/Post/PostTypeVideo';
import PostTypeVideo from '../components/Post/PostTypeVideo';

const styles = theme => ({

});

class Post extends Component {

  renderPostType(type) {
    switch (type.__typename) {
      case 'ContentfulPostTypeArticle':
        return <PostTypeArticle type={type} />
      case 'ContentfulPostTypeAudio':
        return <PostTypeAudio type={type} />
      case 'ContentfulPostTypeVideo':
        return <PostTypeVideo type={type} />
    }
  }

  render() {
    const { classes } = this.props;
    const page = this.props.data.contentfulPost
    const { type } = page

    return (
      <div>
        <Header />
        {this.renderPostType(type[0])}
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

//export const pageQuery = graphql`
  //query postQuery($id: String!) {
    //contentfulPost(id: { eq: $id }) {
      //type {
        //...PostTypeArticle
        //...PostTypeAudio
        //...PostTypeVideo
      //}
    //}
  //}
//`
