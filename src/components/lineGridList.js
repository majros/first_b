import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {listOfImages} from './listOfImages';

const styles = theme => ({
	root: {
		width: '100%',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
	},
	gridList: {
		flexWrap: 'nowrap',
		transform: 'translateZ(0)',
	},
});

function SingleLineImgList(props) {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<GridList className={classes.gridList} cols={2.5}>
				{listOfImages.map(tile => (
					<GridListTile key={tile.img}>
						<img src={tile.img} alt={tile.title} />
						<GridListTileBar
							title={tile.title}
							subtitle={tile.author}
							style={{height: '36px'}}
						/>
					</GridListTile>
				))}
			</GridList>
		</div>
	);
}

SingleLineImgList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineImgList);