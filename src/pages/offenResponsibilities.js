import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {listOffenResponsibilities} from "../components/listOffenResponsibilities";

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

class offenResponsibilities extends React.Component {
	render() {
		const {classes} = this.props;

		return <React.Fragment>
			<Typography className={classes.typography} variant={'headline'} align={'center'}>
				OFFEN Function Description
			</Typography>
			{listOffenResponsibilities.map(lst => (
				<ExpansionPanel key={lst.rank} >
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>{lst.rank}</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails style={{display: 'table'}}>
						<Typography className={classes.typography} variant={'title'}>
							Objectives:
						</Typography>
						{lst.objectives.map( olst =>
							<Typography key={olst}><li className={classes.table}>{olst}</li></Typography>)}
						<Typography className={classes.typography} variant={'title'}>
							Function:
						</Typography>
						{lst.function.map( flst =>
							<Typography key={flst}><li className={classes.table}>{flst}</li></Typography>)}
						<Typography className={classes.typography} variant={'title'}>
							Participation:
						</Typography>
						{lst.participation.map( plst =>
							<Typography key={plst}><li className={classes.table}>{plst}</li></Typography>)}
						<Typography className={classes.typography} variant={'title'}>
							Subordination:
						</Typography>
						{lst.subordination.map( sblst =>
							<Typography key={sblst}><li className={classes.table}>{sblst}</li></Typography>)}
						<Typography className={classes.typography} variant={'title'}>
							Superiority:
						</Typography>
						{lst.superiority.map( splst =>
							<Typography key={splst}><li className={classes.table}>{splst}</li></Typography>)}
						<Typography className={classes.typography} variant={'title'}>
							Substitution:
						</Typography>
						{lst.substitution.map( stlst =>
							<Typography key={stlst}><li className={classes.table}>{stlst}</li></Typography>)}
						<Typography className={classes.typography} variant={'title'}>
							Qualification:
						</Typography>
						{lst.qualification.map( qlst =>
							<Typography key={qlst}><li className={classes.table}>{qlst}</li></Typography>)}
					</ExpansionPanelDetails>
				</ExpansionPanel>))}
		</React.Fragment>;
	}
}

export default withStyles(styles, {withTheme: true})(offenResponsibilities);