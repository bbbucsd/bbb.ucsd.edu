import React, { Component } from 'react';
import _ from 'lodash';
import State from 'state';

import { Modal, ModalDialog, ModalBody, ModalContent } from 'styled-bootstrap-components';
import { styled, media } from 'components/Theme/Styles';
import Slices from 'components/Slices';
import PrismicHelper from 'utils/prismicHelper';

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed; /* Stay in place */
  z-index: 0; /* Sit on top */
  left: 0;
  top: 0;
  background-color: rgb(0,0,0); /* Black fallback color */
  background-color: rgba(0,0,0, 0.5); /* Black w/opacity */
  overflow-x: hidden; /* Disable horizontal scroll */
`;

const ThemeModalContent = styled(ModalContent)`
    width: 100%;
    height: 100%;
    ${media.greaterThan('small')`
      max-width: 800px;
      max-height: 600px;
    `}
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin: 0 auto;
`;

const ThemeModalBody = styled(ModalBody)`
  background-color: transparent;
  padding: 0;
`;

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hidden: null,
      document: null,
      isRequesting: false
    };
    this._notificationSystem = null;
  }

  componentDidMount() {
    this._notificationSystem = State.get("notificationSystem");
    this.fetchModal();
  }

  fetchModal() {
    if (this.state.isRequesting) { return; }
    this.setState({ isRequesting: true });
    PrismicHelper.query('modal', this.props.location.hash.replace('#', '')).then((document) => {
      this.setState({ document });
    });
  }

  isHidden() {
    return _.isBoolean(this.state.hidden) ? this.state.hidden : this.props.hidden;
  }

  onClose() {
    this.props.onClose && this.props.onClose();
  }

  handleScroll() {
    if (typeof document === "undefined") { return }
    if (!this.isHidden()) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "scroll";
    }
  }

  render() {
    if (!this.state.document) { return null; }
    this.handleScroll();
    return (
      <Modal hidden={this.isHidden()}>
        <Overlay onClick={this.onClose.bind(this)}/>
        <ModalDialog>
          <ThemeModalContent>
            <ThemeModalBody>
              <Slices document={this.state.document} events={{
                close: this.onClose.bind(this),
                notificationSystem: this._notificationSystem
              }} />
            </ThemeModalBody>
          </ThemeModalContent>
        </ModalDialog>
      </Modal>
    )
  };

}
