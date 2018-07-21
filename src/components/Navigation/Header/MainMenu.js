import List, { ListItem } from 'material-ui/List';
import { Link } from 'react-router-dom';
import IndustriesNav from './IndustriesNav';
import SupportNav from './SupportNav';
import ProductNav from './ProductNav';

const styles = theme => ({
  listItem: {
    color: '#fff',
    fontFamily: 'lato',
    fontSize: '16px',
    padding: '0 !important',
    fontWeight: '300',
    fontStyle: 'normal',
    lineHeight: '32px',
    '&:hover': {
      color: '#fff',
    }
  },
  centerItem: {
    width: '100px',
  },
});

class MainMenu extends Component {

    render() {
      const { classes } = this.props;
      return (
        <List className={this.props.className}>
          <ListItem className={`${classes.listItem} ${classes.centerItem}`}><ProductNav className={`${this.props.floating ? classes.floatingCopy : classes.fixedCopy}`} /></ListItem>
          <ListItem className={`${classes.listItem} ${classes.centerItem}`}><IndustriesNav className={`${this.props.floating ? classes.floatingCopy : classes.fixedCopy}`} /></ListItem>
          <ListItem className={`${classes.listItem} ${classes.centerItem}`}><SupportNav className={`${this.props.floating ? classes.floatingCopy : classes.fixedCopy}`} /></ListItem>
          <ListItem className={`${classes.listItem} ${classes.centerItem}`}><Link to="/" className={`${this.props.floating ? classes.floatingCopy : classes.fixedCopy}`}>How to buy</Link></ListItem>
        </List>
      );
    }
}

MainMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
}

export default compose(withStyles(styles), withWidth())(MainMenu);

