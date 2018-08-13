import React, { Component } from 'react';
import { Modal, ModalDialog, ModalHeader, ModalTitle, Button, ModalBody, P, ModalFooter, ModalContent } from 'styled-bootstrap-components';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hidden: null
    };
  }

  handleModal() {
    this.setState({ hidden: !this.state.hidden });
    if (!this.state.hidden) { this.onClose(); }
  }

  onClose() {
    window.___history.push(this.props.location.state.page, { cameFromModal: true } );
  }

  render() {
    const hash = this.props.location.hash || this.props.location.pathname;
    const pathname = hash.replace('#', '_modal-').replace(/^\/?/, '/');;
    return (
      <Modal hidden={this.state.hidden === null ? this.props.hidden : this.state.hidden}>
        <ModalDialog>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>
                Modal Title
              </ModalTitle>
              <Button outline onClick={() => this.handleModal()}>
                <span aria-hidden="true">&times;</span>
              </Button>
            </ModalHeader>
            <ModalBody>
              <P>
                {this.props.children({
                  location: Object.assign({}, this.props.location, { pathname }),
                })}
              </P>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => this.handleModal()}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalDialog>
      </Modal>
    )
  };

}
