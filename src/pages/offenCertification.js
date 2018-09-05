import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

import orgImg from '../components/img/Organogram Ship Offen.jpg'
import reqImg from '../components/img/Requirements.jpg'

const styles = theme => ({
	typography: {
		align: 'justify',
		padding: theme.spacing.unit * 1,
	},
});

class offenCertification extends React.Component {
	render() {
		const {classes} = this.props;

		return <React.Fragment>
			<Typography className={classes.typography} variant={'headline'} align={'center'}>
				OFFEN Seamen Certification
			</Typography>
			<Typography className={classes.typography} variant={'body1'} >
				The general crew consistency onboard company's vessels should be explained:<br/>
				<br/>
				Senior Officers:
				<li>Filipino, German, Polish, Romanian, Russian & Ukrainian</li>
				Junior Officers:
				<li>Filipino, German, Polish, Romanian, Russian & Ukrainian</li>
				Ratings:
				<li>Filipino & Ukrainian</li>
			</Typography>
			<Typography className={classes.typography} variant={'title'}>
				Relief planning
			</Typography>
			<Typography className={classes.typography} variant={'body1'} >
				The planning of relief is made by the Personnel Officer in conjunction with the vessel's Master and, if
				required, the Technical and Operations Department of CCPO.<br/>
				About two months prior the regular end of contract a "relief application" will be sent to the office
				(by the Master).<br/>
				Generally, the relief port may be the first convenient port after the regular period of contract.
			</Typography>
			<Typography className={classes.typography} variant={'title'}>
				Early termination of contract
			</Typography>
			<Typography className={classes.typography} variant={'body1'} >
				Prior joining:
				<li> The manning agency has to be informed about the reason and the wished date of sign off for
					optimal planning purposes. Additionally, the request shall be addressed via the Master with a.m.
					"relief application".
				</li>
				Onboard:
				<li> The request shall be earliest addressed to the Master who will contact the company for a decision.
					Additional costs for an earlier relief must be covered by the Seafarer. The own contribution is calculated
					pro rata on a four month contractual base for all costs arising for the seafarer and his reliever costs
					are expenses for flights, accommodation and the port agency fees.
				</li>
				<br/>
				Compassionate reliefs because of humanitary reasons (death or serious illness of spouse, dependant parents
				or dependent children) are handled with priority and the company will renounce on seafarer's cost
				contribution according to the current "Collective Bargaining Agreement (CBA)".
			</Typography>
			<Typography className={classes.typography} variant={'title'}>
				Extension of contract
			</Typography>
			<Typography className={classes.typography} variant={'body1'} >
				The request shall be addressed earliest two months prior end of contract. The company's decision is made
				timely and based on a case-to-case decision.
			</Typography>
			<Typography className={classes.typography} variant={'title'}>
				First day of payment
			</Typography>
			<Typography className={classes.typography} variant={'body1'} >
				The first day of payment is the date of leaving the home country (laid down in small letters point 4).
				Besides the misunderstood phrases „agreed to be effective" and „wages from and including", a „stand-by
				bonus" is not being paid.
			</Typography>
			<Typography className={classes.typography} variant={'title'}>
				Period of employment
			</Typography>
			<Typography className={classes.typography} variant={'body1'} >
				The period of employment is regularly four months for officers and six months for ratings. It must be
				clearly understood that „4 months" (or "6 months") means also the company's option to extend up to five
				(or seven) months depending of relief schedule. The new crew member has to be advised that the Christmas
				as well as the Summer Relief planning is difficult to maintain and private appointments should be
				considered to be planned after four (plus one) months.
			</Typography>
			<Typography className={classes.typography} variant={'title'}>
				Probitionary period
			</Typography>
			<Typography className={classes.typography} variant={'body1'} >
				It must clearly stated that during the first contract there is a three-month probitionary period for all
				seafarers not previously employed with the company. The crewmember be evaluated in respect of his continued employment.
			</Typography>
			<Typography className={classes.typography} variant={'title'}>
				Overtimes
			</Typography>
			<Typography className={classes.typography} variant={'body1'} >
				Officers will not receive payment for excess overtimes.
			</Typography>
			<Typography className={classes.typography} variant={'title'}>
				Sickness Wages
			</Typography>
			<Typography className={classes.typography} variant={'body1'} >
				In case the seafarer has to be repatriated before end of contract caused by a work accident or a work
				related disease he is entiteled to receive sickness wages max. up to 130 days according the current CBA.
				The company requires an official certificate from a legalized doctor stating „unfit for duty until..."
				and a final report confirming „fit for duty".
			</Typography>
			<Typography className={classes.typography} variant={'title'}>
				Declaration of Company policy
			</Typography>
			<Typography className={classes.typography} variant={'body1'} >
				The obligational form „Declaration of Company Policy on Drug and Alcohol abuse"(SD-007) has to be handed
				out attached to the contract.
				<br/>
				Besides to emphasize the severe consequences of immediate dismissal in case of breaking the conduct,
				the manning agent should mention that all prescribed drugs or medication have to be declared prior
				embarking in Westafrica, South America and all Arabic countries.
				<br/>
				The import of spirituos is strongly forbidden when joining in Arabic countries. Also weapons and
				so-called "Tazers" are not permitted.
			</Typography>
			<Typography className={classes.typography} variant={'title'}>
				Unannounced alcohol tests
			</Typography>
			<Typography className={classes.typography} variant={'body1'} >
				The medical limitations of alcohol & drug screening prior joining are recognised by the company.
				Therefore the seafarer has to declare his consent (as stipulated in the a.m. SD-007) to random alcohol
				testing done occasionally by the Master (min. once per quarter).
				<br/>
				The test will be conducted with a breathalizer testing device. The refusal of an unannounced alcohol
				test is considered as a positive test result which will lead to a disciplinary action.
			</Typography>
			<Typography className={classes.typography} variant={'title'}>
				Travel Expenses
			</Typography>
			<Typography className={classes.typography} variant={'body1'} >
				The crewmember must be instructed to keep all original vouchers for expenses which are permitted for
				reimbursement and should be passed on together with both documents to the Master
				The costs for traveling to the Training Centers as well as clinics and doctors visits are generally
				not being borne by the company. The costs for travelling to briefings or de-briefings are borne by the company
			</Typography>
			<Typography className={classes.typography} variant={'title'}>
				Dresscode
			</Typography>
			<Typography className={classes.typography} variant={'body1'} >
				Enlistment below should be considered as a basic working gear which has to bought (or supplied) prior
				joining in case of requirement. The supply should be reasonable according to the rank.
				<li>4 x White shirts (either long- or shortsleeve)</li>
				<li>2 x Black or dark blue trousers</li>
				<li>1 x Navy sweater </li>
				<li>1 x Pair of Safety Shoes</li>
				<li>1 x Boiler Suit </li>
				<li>1 x Pair of Epaulettes in respective rank for shirts</li>
				<li>1 x Pair of Epaulettes in respective rank for sweater</li>
				<li>1 x Tie (for Deck Officers)</li>
				<li>1 x Apron (for Cooks)</li>
			</Typography>
			<Typography className={classes.typography} variant={'title'}>
				STCW Requirements and RCPO-Required Training
			</Typography>
			<img alt='icon' src={reqImg} style={{width: '100%'}}/>
			<Typography className={classes.typography} variant={'title'}>
				Organisational Chart Vessels
			</Typography>
			<img alt='icon' src={orgImg} style={{width: '100%'}}/>
		</React.Fragment>;
	}
}

export default withStyles(styles, {withTheme: true})(offenCertification);