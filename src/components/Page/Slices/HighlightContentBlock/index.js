import React, { Component } from 'react';
import style from './style.module.scss';
import RichText from 'components/Theme/Typography/RichText';
import HighlightContent from 'components/Elements/HighlightContent';
//import Grid from '@material-ui/core/Grid';


class HighlightContentBlock extends Component {

  //renderHighlight(data) {
    //return (
      //<Grid item xs={12} sm={12} md={12} lg={4}>
        //<HighlightContent headline={ data.highlight_title.text }>
          //<RichText body={ data.highlight_content } />
        //</HighlightContent>
      //</Grid>
    //);
  //}

  isPlacementLeft(data) {
    return !!data.highlight_direction.match(/left/i);
  }

  isPlacementRight(data) {
    return !!data.highlight_direction.match(/right/i);
  }

  render() {
    const { slice } = this.props;
    const data = slice.primary;

    return null;
    //return (
      //<div className={style.root}>
        //<Grid container spacing={24}>
          //{ this.isPlacementLeft(data) ? this.renderHighlight(data) : null}
          //<Grid item xs={12} sm={12} md={12} lg={8}>
            //<div className={style.content}>
              //<RichText body={ data.content } />
            //</div>
          //</Grid>
          //{ this.isPlacementRight(data) ? this.renderHighlight(data) : null}
        //</Grid>
      //</div>
    //)
  }
}

export default HighlightContentBlock;

export const query = graphql`
  fragment HighlightContentBlock on PrismicPageBodyHighlightContentBlock {
    slice_type
    primary {
      highlight_direction
      highlight_title {
        text
      }
      content {
        html
      }
      highlight_content {
        html
      }
    }
  }
`;
