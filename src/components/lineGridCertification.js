import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Dialog from '@material-ui/core/Dialog';

import certificate from './img/_certificate.jpg'
import license from './img/_License.jpg'
import mlc from './img/_MLC 04.2018.jpg'

const styles = ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		overflow: 'hidden',
	},
	gridList: {
		flexWrap: 'nowrap',
		transform: 'translateZ(0)',
	},
});
const listOfCertification = [certificate, license, mlc];

class LineGridCertification extends React.PureComponent {
	state = {
		open: false,
		selectedValue: null,
	};

	handleClickOpen = value => {this.setState({ selectedValue: value, open: true})};
	handleClose = () => {this.setState({ open: false })};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<GridList className={classes.gridList} cols={3}>
					{listOfCertification.map(lst => (
						<GridListTile key={lst}>
							<img style={{height:'180px', width:'120px'}}
							     onClick={() => this.handleClickOpen(lst)}
							     src={lst} alt='icon'/>
						</GridListTile>
					))}
				</GridList>
				<Dialog open={this.state.open}  onClose={this.handleClose} aria-labelledby="simple-dialog-title" >
					<img style={{height:'85vh'}}
					     onClick={() => this.handleClose()}
					     src={this.state.selectedValue} alt='icon'
					/>
				</Dialog>
			</div>
		);
	}
}
LineGridCertification.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(LineGridCertification);