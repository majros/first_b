class LineGridCertification extends React.Component {
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

		return (
			<div>
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
				</div>
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					open={Boolean(anchorEl)}
					onClose={this.handleClose}
				>
				</Menu>
			</div>
		);
	}
}

export default LineGridCertification;

function LineGridCertification(props) {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<GridList className={classes.gridList} cols={3}>
				{listOfCertification.map(tile => (
					<GridListTile key={tile.img}>
						<img src={tile.img} alt='icon' style={{height:'100%', width:'140px'}}/>
					</GridListTile>
				))}
			</GridList>
		</div>
	);
}