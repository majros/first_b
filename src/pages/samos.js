import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
	typography: {
		align: 'justify',
		padding: theme.spacing.unit * 1,
	},
});

class samosInfo extends React.Component {
	render() {
		const {classes} = this.props;

		return <main>
			<Typography className={classes.typography} variant={'headline'} align={'center'}>
				SAMOS Mission and Vision Statement
			</Typography>
			<Typography className={classes.typography} variant={'body1'} >
				Samos Steamship (Cyprus) Ltd. vision is to provide the best sea transportation quality services with ZERO
				Incidents, Zero spills or releases at sea and Minimum Environmental Footprint. By minimum Environmental
				Footprint, we mean the use of all available technologies aiming to a continual reduction of permitted
				emissions.
			</Typography>
			<Typography className={classes.typography} variant={'body1'} >
				Our mission is to ensure that our operational standards are meeting or exceeding the National or
				International regulations. To succeed in our mission our Top Management has undertaken the
				responsibility and commitment to:
				<li>Establish, maintain, monitor, review and continuously improve operating procedures that ensure
					the safety of our daily operations in all fields
				</li>
				<li>Establish, Promote, Monitor and Review Health Safety and Environmental performance standards
					– targets. Bench mark our performance against our competitors
				</li>
				<li>Identify and adopt Best Industry Practices as mandatory requirements</li>
				<li>Assess continuously all identified risks for the Personnel, the Environment and the Ship as
					property and counteract establishing safeguards
				</li>
				<li>Provide adequate resources to maintain a safe and pleasant working environment for all
					personnel
				</li>
				<li>Lead by Example and motivate Personnel to promote Health Safety and Environmental protection
					practices
				</li>
				<li>Train and Educate all personnel in excess of the Industry mandatory standards</li>
				<li>Be prepared for emergencies by conducting frequent drills and continuous training</li>
				<li>Adopt and implement a ‘No blame policy’ for those voluntarily reporting Incidents and Near Miss
					Incidents. The same stands for personal complaints of any kind
				</li>
				<li> Adopt and implement ‘Zero Tolerance Policy’ for deliberate violations of National or International
					regulations or the company’s internal procedures. The same stands for acts of retaliation against
					those reporting such violations
				</li>
				<li>Cooperate in full with any Authority investigating Incidents or Violations of any kind</li>
				<li>Prohibit any discrimination against employees because of the individual’s race, colour, religion,
					gender, sexual orientation, national origin, age, disability, or any other characteristic protected by
					law
				</li>
				<li>Always conduct business in compliance with all laws and trade restrictions imposed by United
					Nations, United States, European Union and other national and supranational authorities and
					legislators
				</li>
			</Typography>
			<Typography className={classes.typography} variant={'body1'} >
				To implement this policy, Samos Steamship (Cyprus) Ltd. operates and maintains a Management System,
				in accordance with the requirements of the ISM Code & ISO 14001:2015.
			</Typography>
		</main>;
	}
}

export default withStyles(styles, {withTheme: true})(samosInfo);