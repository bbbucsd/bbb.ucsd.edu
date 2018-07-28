import React, { Component } from 'react';

// Style
import style from './style.module.scss'

class SingleImageSection extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className={style.root}>
        <h2 className="headline">{data.headline}</h2>
        <h3 className="subheadline">{data.subheadline}</h3>
        <img alt={data.title} src={data.image.file.url} className={style.image} />
      </div>
    )
  }
}

export default SingleImageSection;

//export const query = graphql`
  //fragment Index on ContentfulLayoutSingleImageSection {
    //headline
    //subheadline
    //image {
      //title
      //file {
        //url
        //contentType
      //}
    //}
  //}
//`;
