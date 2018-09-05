import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
	typography: {
		align: 'justify',
		padding: theme.spacing.unit * 1,
	},
});

class offenInfo extends React.Component {
	render() {
		const {classes} = this.props;

		return <React.Fragment>
			<Typography className={classes.typography} variant={'headline'} align={'center'}>
				OFFEN Company Profile
			</Typography>
			<Typography className={classes.typography} variant={'body1'} >
				The Hamburg-based ship owner CPO Containerschiffreederei (GmbH & Co.) KG is one of the world’s largest
				charter tonnage providers in the container market and part of CPO Holding (GmbH & Co.) KG.
				<br/>
				The company dates back to 9 June 1971, when Claus-Peter Offen acquired his first vessel and established
				Reederei Claus-Peter Offen (GmbH & Co.) KG. That was the 1.965 GT general cargo vessel ‘Annie Hugo Stinnes’,
				built in 1959, and renamed ‘Holstein’. In the years that followed, he purchased further second-hand general
				cargo ship tonnage, and by 1978 the company had acquired a fleet of 12 ships with a total of 14.000 dwt.
			</Typography>
			<Typography className={classes.typography} variant={'body1'} >
				Claus-Peter Offen was quick to appreciate the opportunities offered by containers as a means of transport,
				and from then he ordered only new builds specially designed to meet the requirements of a swiftly expanding
				container market.
				<br/>
				By the time of transition from Reederei Claus-Peter Offen to CPO Containerschiffreederei (GmbH & Co.)
				KG, the company manages some 80 vessels in service; most of them are chartered under long-term contract
				to leading shipping lines. They are employed in worldwide service.
				<br/>
				The ships of CPO Containerschiffreederei are mostly manned by European officers and Philippine crews.
				the workforce to about 3000 people, including 130 at the head office in the city centre of Hamburg.
			</Typography>
			<Typography className={classes.typography} variant={'title'}>
				Declaration of Company Policy on Drug and Alcohol Abuse
			</Typography>
			<Typography className={classes.typography} variant={'body1'} >
				Masters and members of the crew who are under the influence of alcohol and/or drugs whilst on duty
				constitute a danger to ship safety. Therefore, CPO Containerschiffreederei (GmbH & Co.) KG makes every
				reasonable effort to prevent this from happening. The following regulations are herewith issued:
				<li>Masters and crew members abusing or dealing with drugs whilst on or off duty shall not be employed.</li>
				<li>Masters and crew members who have to consume drugs prescribed by a medical doctor inform that doctor
					of their activities on board ship and request the doctor to consider this fact when designing his therapy.</li>
				<li>The Company permissible limit for blood alcohol content is 0.04%, when the vessel is at sea or when
					a seafarer is on duty in port. In addition, no alcohol must be consumed within four hours of a scheduled
					duty period. Whilst on duty - and this specifically includes breaks -consumption of alcohol is prohibited.</li>
				<li>Special requirements from flag or port state authorities (for USA see below) may apply in addition
					to the Company policy. CPO Crewing will advise the Master if such requirements apply to his vessel.</li>
				<li>The consumption of alcohol is not permitted onboard the vessel for the entire period that the vessel
					remains within USA waters or jurisdiction. All supplies of alcohol must be collected under bond until the
					vessel has cleared USA territorial waters. Visitors may be offered nonalcoholic beverages only.</li>
				<li>Alcohol and/or drug abuse similarly endangers safety at work ashore. These regulations accordingly
					apply by analogy to personnel of the CPO Crewing GmbH & Co KG and CPO Containerschiffreederei (GmbH & Co.)
					KG shore-based organisation.</li>
				CPO Crewing GmbH & Co KG and CPO Containerschiffreederei (GmbH & Co.) KG management declares unequivocally
				that it will take all legal measures in terms of industrial law and if necessary of criminal law against
				personnel found in breach of these regulations. For further details, please refer to the relevant documented
				procedure.
			</Typography>
		</React.Fragment>;
	}
}

export default withStyles(styles, {withTheme: true})(offenInfo);