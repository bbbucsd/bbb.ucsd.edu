import React, { Component } from 'react';
import { Modal, ModalDialog, ModalHeader, ModalTitle, Button, ModalBody, ModalFooter, ModalContent } from 'styled-bootstrap-components';
import Styles, { styled, css, media } from 'components/Theme/Styles';
import Icon from 'components/Theme/Icon';
import Helmet from 'react-helmet';

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

const CloseButton = styled(Button)`
  position: absolute;
  top: -20px;
  right: -22.5px;
  background: transparent;
  z-index: 5;
`;

const ThemeModalBody = styled(ModalBody)`
  background-color: transparent;
  padding: 0;
`;

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hidden: null
    };
  }

  isHidden() {
    return this.state.hidden === null ? this.props.hidden : this.state.hidden;
  }

  onClose() {
    this.props.onClose && this.props.onClose();
  }

  render() {
    const hash = this.props.location.hash || this.props.location.pathname;
    const pathname = hash.replace('#', '_modal-').replace(/^\/?/, '/');;
    return (
      <Modal hidden={this.isHidden()}>
        <Overlay onClick={this.onClose.bind(this)}/>
        <ModalDialog>
          <ModalContent>
            <ThemeModalBody>
              {this.props.disableCloseButton ? null : (
                <CloseButton onClick={() => this.onClose()}>
                  <span aria-hidden="true"><Icon name="timescircle" size="20" css="color: black; background-color: white; padding: 1px; border-radius: 50px;" /></span>
                </CloseButton>
              )}
              {this.props.children({
                location: Object.assign({}, this.props.location, { pathname }),
              })}
            </ThemeModalBody>
          </ModalContent>
        </ModalDialog>
      </Modal>
    )
  };

}
