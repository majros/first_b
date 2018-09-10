import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {listOfImages} from './listOfImages';

const styles = theme => ({
	root: {
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
	const colsNm =  (window.innerWidth < 700) ? 1.5 : 3.5;

	return (
		<div className={classes.root}>
			<GridList className={classes.gridList} cols={colsNm}>
				{listOfImages.map(tile => (
					<GridListTile key={tile.img}>
						<img src={tile.img} alt={tile.title} style={{height:'180px'}}/>
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