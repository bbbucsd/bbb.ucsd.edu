import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../components/Modal'

class Layout extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    isModal: PropTypes.bool,
  }

  isInModal() {
    if (this.props.location.state) {
      if (this.props.location.state.isInModal) {
        return true;
      }
    }

    return false
  }


  render() {
    const { location } = this.props
    const isModal = this.isInModal()

    return (
      <div>
        <div>
          {isModal ? this.props.children({ ...this.props, location: { pathname: location.state.page } }) : this.props.children()}
        </div>

        <div>
          {isModal && (
            <Modal open={true} location={location}>
              {this.props.children}
            </Modal>
          )}
        </div>
      </div>
    )
  }
}

export default Layout