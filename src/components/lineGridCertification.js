import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Menu from '@material-ui/core/Menu';
import {listOfCertification} from './listOfImages';
import mlc from './img/_MLC 04.2018.jpg';


const styles = ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
	},
	gridList: {
		flexWrap: 'nowrap',
		transform: 'translateZ(0)',
	},
});

class LineGridCertification extends React.PureComponent {
	state = {
		anchorEl: null,
	};

	handleClick = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	render() {
		const { anchorEl } = this.state;
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<GridList className={classes.gridList} cols={3}>
					{listOfCertification.map(tile => (
						<GridListTile key={tile.img}>
							<img style={{height:'100%', width:'140px'}}
							     aria-owns={anchorEl ? 'simple-menu' : null}
							     aria-haspopup="true"
							     onClick={this.handleClick}
							     src={tile.img} alt='icon'/>
						</GridListTile>
					))}
				</GridList>
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					open={Boolean(anchorEl)}
					onClose={this.handleClose}
				>
					<img style={{height:'800px'}} onClick={this.handleClose} src={mlc} alt='icon'/>
				</Menu>
			</div>
		);
	}
}

LineGridCertification.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LineGridCertification);