import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { globalListItems, seamanListItems, otherListItems } from './ListOfDrawer';

const styles = {
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
};

class TemporaryDrawer extends React.Component {
	state = {
		left: true,
	};

	toggleDrawer = (side, open) => () => {
		this.setState({
			[side]: open,
		});
	};

	render() {
		const { classes } = this.props;

		const sideList = (
			<div className={classes.list}>
				<List>{globalListItems}</List>
				<Divider />
				<List>{seamanListItems}</List>
				<Divider />
				<List>{otherListItems}</List>
			</div>
		);

		return (
			<div>
				<Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
				<Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
					<div
						tabIndex={0}
						role="button"
						onClick={this.toggleDrawer('left', false)}
						onKeyDown={this.toggleDrawer('left', false)}
					>
						{sideList}
					</div>
				</Drawer>
			</div>
		);
	}
}

TemporaryDrawer.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);