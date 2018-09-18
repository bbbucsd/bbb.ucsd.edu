import React, { Fragment, Component } from 'react';
import _ from 'lodash';
import State from 'state';

import StandardHero from './StandardHero';
import SimpleHero from './SimpleHero';
import HighlightHero from './HighlightHero';
import DoubleBlock from './DoubleBlock';
import LogoBlock from './LogoBlock';
import LogoBlockInline from './LogoBlockInline';
import ContentBlock from './ContentBlock';
import StatementBlock from './StatementBlock';
import FeatureBlock from './FeatureBlock';
import TestimonialBlock from './TestimonialBlock';
// import DoubleTestimonialBlock from './DoubleTestimonialBlock';
import HighlightContentBlock from './HighlightContentBlock';

const Slice = (props) => {
  let { data, events } = props

  var type = data.__typename || _.upperFirst(_.camelCase(data.slice_type));

  switch (type) {
    // HEROES
    case 'StandardHero':
      return <StandardHero events={events} slice={data} />
    case 'SimpleHero':
      return <SimpleHero events={events} slice={data} />
    case 'HighlightHero':
      return <HighlightHero events={events} slice={data} />

    // BLOCKS
    case 'DoubleBlock':
      return <DoubleBlock events={events} slice={data} />
    case 'LogoBlock':
      return <LogoBlock events={events} slice={data} />
    case 'LogoBlockInline':
      return <LogoBlockInline events={events} slice={data} />
    case 'ContentBlock':
      return <ContentBlock events={events} slice={data} />
    case 'HighlightContentBlock':
      return <HighlightContentBlock events={events} slice={data} />
    case 'FeatureBlock':
      return <FeatureBlock events={events} slice={data} />
    case 'StatementBlock':
      return <StatementBlock events={events} slice={data} />

    default:
      return null;
  }; // eslint-disable-line no-unreachable
}

class Slices extends Component {

  _notificationSystem = null;

  componentDidMount() {
    this._notificationSystem = State.get("notificationSystem")
  }

  render() {
    let { document, events } = this.props;
    events = Object.assign({}, events, { notificationSystem: this._notificationSystem })

    return (
      <Fragment>
        {( (document.data && document.data.body) || [] ).map((slice, i) => <Slice data={slice} events={events} key={`ui_${i}`} /> )}
      </Fragment>
    )
  }
}

export default Slices;
