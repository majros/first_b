import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
	typography: {
		align: 'justify',
		padding: theme.spacing.unit * 1,
	},
});

class samosDutiesResponsibilities extends React.Component {
	render() {
		const {classes} = this.props;

		return <main>
			<Typography className={classes.typography} variant={'headline'}>
				SAMOS Shipboard Personnel Duties & Responsibilities
			</Typography>
			<Typography className={classes.typography} variant={'body1'}>
				<li>Master</li>
				<li>Chief Officer</li>
				<li>Second Officer</li>
				<li>Third Officer</li>
				<li>Junior Officer</li>
				<li>Chief Engineer</li>
				<li>Second Engineer</li>
				<li>Third & Fourth Engineer</li>
				<li>Junior Engineer</li>
				<li>Electrician</li>
				<li>BOSUN</li>
				<li>Pump man</li>
				<li>Able Seaman</li>
				<li>Ordinary Seaman</li>
				<li>Oiler</li>
				<li>Wiper</li>
				<li>Deck/Engine Fitter</li>
				<li>Deck / Engine Cadet</li>
				<li>Chief Cook</li>
				<li>Mess Man</li>
				<li>Junior Officers</li>
			</Typography>
		</main>;
	}
}

export default withStyles(styles, {withTheme: true})(samosDutiesResponsibilities);