import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import samosSeamenCertification from '../components/img/samosSeamenCertification.jpg'
import samosSeamenPromotion from '../components/img/samosSeamenPromotion.jpg'

const styles = theme => ({
	typography: {
		align: 'justify',
		padding: theme.spacing.unit * 1,
	},
	typography2: {
		align: 'justify',
		padding: theme.spacing.unit * 4,
	},
});

class samosCertification extends React.Component {
	render() {
		const {classes} = this.props;

		return <main>
			<Typography className={classes.typography} variant={'headline'} align={'center'}>
				SAMOS Seamen Certification
			</Typography>
			<Typography className={classes.typography} variant={'title'}>
				Seamen shall carry the following documents at all times:
			</Typography>
			<Typography className={classes.typography} variant={'body1'}>
				<li>Original Contract of Employment (which shall clearly define the employment period);</li>
				<li>Original Certificates & licenses as per present;</li>
				<li>Original of medical fitness certificate (if expires on board dispensation may be requested from Flag)</li>
				<li>Original Vaccination booklet;</li>
				<li>On embarkation the seaman delivers to the Master his Seaman book and passport.</li>
				<li>On embarkation the seaman delivers to the Master the original form VOP – G – 6A</li>
			</Typography>
			<img alt='icon' src={samosSeamenCertification}/>
			<Typography className={classes.typography2} variant={'title'}>
				Recommended Promotional Intervals
			</Typography>
			<img alt='icon' src={samosSeamenPromotion}/>
		</main>;
	}
}

export default withStyles(styles, {withTheme: true})(samosCertification);