import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import samosSeamenCertification from '../components/img/samosSeamenCertification.jpg'

const styles = theme => ({
	typography: {
		align: 'justify',
		padding: theme.spacing.unit * 1,
	},
});

class samosCertification extends React.Component {
	render() {
		const {classes} = this.props;

		return <main>
			<Typography className={classes.typography} variant={'headline'} align={'center'}>
				SAMOS Seamen Certification
			</Typography>
			<Typography className={classes.typography} variant={'subheading'}>
				Seamen shall carry the following documents at all times:
			</Typography>
			<Typography className={classes.typography} variant={'body1'}>
				<ul>1) Original Contract of Employment (which shall clearly define the employment period);</ul>
				<ul>2) Original Certificates & licenses as per present;</ul>
				<ul>3) Original of medical fitness certificate (if expires on board dispensation may be requested from Flag)</ul>
				<ul>4) Original Vaccination booklet;</ul>
				<ul>5) On embarkation the seaman delivers to the Master his Seaman book and passport.</ul>
				<ul>6) On embarkation the seaman delivers to the Master the original form VOP – G – 6A</ul>
			</Typography>
			<img alt='icon' src={samosSeamenCertification}/>
		</main>;
	}
}

export default withStyles(styles, {withTheme: true})(samosCertification);