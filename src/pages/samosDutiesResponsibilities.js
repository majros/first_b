import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {listOfResponsibilities} from "../components/listOfResponsibilities";

const styles = theme => ({
	typography: {
		align: 'justify',
		padding: theme.spacing.unit * 1,
	},
	heading: {
		fontSize: theme.typography.pxToRem(18),
		fontWeight: theme.typography.fontWeightRegular,
	},
	table: {
		paddingLeft: 20,
	},
});

class samosDutiesResponsibilities extends React.Component {
	render() {
		const {classes} = this.props;

		return <main>
			<Typography className={classes.typography} variant={'headline'}>
				SAMOS Shipboard Personnel Duties & Responsibilities
			</Typography>
			{listOfResponsibilities.map(lst => (
				<ExpansionPanel key={lst.rank} >
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>{lst.rank}</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails style={{display: 'table'}}>
						<Typography className={classes.typography} variant={'title'}>
							Qualifications:
						</Typography>
						{lst.qualifications.map( qlst =>
							<Typography key={qlst}><li className={classes.table}>{qlst}</li></Typography>)}
						<Typography className={classes.typography} variant={'title'}>
							Responsibility & Authority:
						</Typography>
						{lst.responsibility.map( rlst =>
							<Typography key={rlst}><li className={classes.table}>{rlst}</li></Typography>)}
				</ExpansionPanelDetails>
			</ExpansionPanel>))}
		</main>;
	}
}

export default withStyles(styles, {withTheme: true})(samosDutiesResponsibilities);