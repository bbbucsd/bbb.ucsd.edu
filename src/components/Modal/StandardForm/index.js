// TODO: THIS NEEDS TO IMPLEMENTED NEXT

import React, { Component } from 'react';
import style from './style.module.scss';
import classNames from 'classnames/bind';
import ThemeButton from 'components/Theme/Button';
let cx = classNames.bind(style);

class StandardForm extends Component {

  // timer = null;
  //
  // state = {
  //   completed: 0,
  //   buffer: 10,
  // };
  //
  // componentDidMount() {
  //   this.timer = setInterval(this.progress, 500);
  // }
  //
  // componentWillUnmount() {
  //   clearInterval(this.timer);
  // }
  //
  // progress = () => {
  //   const { completed } = this.state;
  //   if (completed < 50 ) {
  //     const diff = Math.random() * 10;
  //     const diff2 = Math.random() * 10;
  //     this.setState({ completed: completed + diff, buffer: completed + diff + diff2 });
  //   }
  // };
  //
  // renderProgressBar() {
  //   const { completed, buffer } = this.state;
  //   if(this.props.slice.primary.progress_bar_enabled === "Yes") {
  //     return (
  //       <div className={style.progressBarRoot}>
  //         <LinearProgress variant="buffer" value={completed} valueBuffer={buffer} />
  //         <br />
  //       </div>
  //     );
  //   } else {
  //     return null;
  //   }
  // }
  //
  // renderFirstName() {
  //   if(this.props.slice.primary.first_name_enabled === "Yes") {
  //     return (
  //       <TextField
  //         autoFocus
  //         margin="dense"
  //         id="first_name"
  //         label="First Name"
  //         type="text"
  //         fullWidth
  //       />
  //     );
  //   } else {
  //     return null;
  //   }
  // }
  //
  // render() {
  //   const { headline } = this.props.slice.primary;
  //
  //   return (
  //     <Dialog
  //       open={this.props.open}
  //       onClose={this.props.onClose}
  //       aria-labelledby="form-dialog-title"
  //     >
  //       <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
  //       <DialogContent className={style.content}>
  //         {this.renderProgressBar()}
  //         <DialogContentText>{headline}</DialogContentText>
  //         {this.renderFirstName()}
  //         <TextField
  //           autoFocus={!this.props.slice.primary.first_name_enabled || this.props.slice.primary.first_name_enabled === "No"}
  //           margin="dense"
  //           id="name"
  //           label="Email Address"
  //           type="email"
  //           fullWidth
  //         />
  //       </DialogContent>
  //       <DialogActions className={style.actions}>
  //         <ThemeButton arrow={false} onClick={this.props.onClick}>Join Now</ThemeButton>
  //       </DialogActions>
  //     </Dialog>
  //   );
  // }

}


export default StandardForm;

// export const query = graphql`
//   fragment StandardForm on PrismicModalBodyStandardForm {
//     slice_type
//     primary {
//       progress_bar_enabled
//       headline
//     }
//   }
// `;
