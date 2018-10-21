import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { listOfPromotion } from '../components/listOfPromotion'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import samosSeamenCertification from '../components/img/samosSeamenCertification.jpg'
import arrowIcon from '../components/img/arrowIcon.png'
import {listSamosMedical} from "../components/listSamosResponsibilities";

const styles = theme => ({
	typography: {
		align: 'justify',
		padding: theme.spacing.unit * 1,
	},
	typography2: {
		align: 'justify',
		padding: theme.spacing.unit * 4,
	},
	button: {
		margin: theme.spacing.unit,
	},
});

class samosCertification extends React.Component {
	render() {
		const {classes} = this.props;

		return <React.Fragment>
			<Typography className={classes.typography} variant={'headline'} align={'center'}>
				SAMOS Seamen Certification
			</Typography>
			<Typography className={classes.typography} variant={'title'}>
				Medical requirement
			</Typography>
			<ExpansionPanel defaultExpanded={false}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading} variant={'subheading'}>
						List of PEME Medical centers approved by Samos Steamship Co:
					</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Table className={classes.table}>
						<TableHead>
							<TableRow>
								<TableCell numeric padding={'checkbox'}>№</TableCell>
								<TableCell padding={'dense'}>City</TableCell>
								<TableCell padding={'dense'}>Medical Center</TableCell>
								<TableCell padding={'dense'}>Adress</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{listSamosMedical.map(n => {
								return (
									<TableRow key={n.n}>
										<TableCell component="th" scope="row" numeric padding={'checkbox'}>
											{n.n}
										</TableCell>
										<TableCell padding={'dense'}>{n.city}</TableCell>
										<TableCell padding={'dense'}>{n.med}</TableCell>
										<TableCell padding={'dense'}>{n.adress}</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			<ExpansionPanel defaultExpanded={false}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading} variant={'subheading'}>
						Download enclosed application form to medical center and fill it:
					</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Button target='_blank'
					        variant="contained"
					        color="secondary"
					        className={classes.button}
					        href={"https://drive.google.com/open?id=108ZlK1d7Ibs-RJD9fc1de-h-uOtCJDK8"}>
						DRUG/ALCOHOL TEST REPORT
					</Button>
					<Button target='_blank'
					        variant="contained"
					        color="secondary"
					        className={classes.button}
					        href={"https://drive.google.com/open?id=1duhKFgeoLqZ8wJBxtfhLI2pXIDXjlEeW"}>
						PEME declaration bilingual
					</Button>
				</ExpansionPanelDetails>
			</ExpansionPanel>
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
			<Typography className={classes.typography} variant={'subheading'}>
				Company Requirements in addition to the STCW, as amended
			</Typography>
			{listOfPromotion.map( lst =>
				<Grid container justify={'center'} spacing={24} key={lst.id}>
					<Grid item xs={2}>
						<Typography key={lst}>{lst.pj}  <img alt='icon' src={arrowIcon}/>  {lst.nj}</Typography>
					</Grid>
					<Grid item xs={10}>
						<Typography key={lst}>{lst.jdscr}</Typography>
					</Grid>
				</Grid>)}
		</React.Fragment>;
	}
}

export default withStyles(styles, {withTheme: true})(samosCertification);