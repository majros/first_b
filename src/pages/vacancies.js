import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {FormattedMessage} from 'react-intl';
import {listOfVacanciesSamos, listOfVacanciesNomikos, listOfVacanciesOffen} from '../components/listOfVacancies'

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto',
	},
	table: {
		minWidth: 250,
	},
	typography: {
		align: 'justify',
		padding: theme.spacing.unit * 1,
	},
	heading: {
		fontSize: theme.typography.pxToRem(20),
		fontWeight: theme.typography.fontWeightRegular,
	},
});

class Vacancies extends React.Component {
	render() {
		const {classes} = this.props;

		return <React.Fragment>
			<Typography className={classes.typography} variant={'headline'} align={'center'}>
				<FormattedMessage id="vacancies.line1"/>
			</Typography>
			<Paper className={classes.root}>
				<ExpansionPanel defaultExpanded={true}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>SAMOS</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Table className={classes.table}>
							<TableHead>
								<TableRow>
									<TableCell numeric padding={'checkbox'}>№</TableCell>
									<TableCell padding={'dense'}>RANK</TableCell>
									<TableCell padding={'dense'}>VSL Name</TableCell>
									<TableCell numeric padding={'dense'}>DWT / ME_Type</TableCell>
									<TableCell numeric padding={'dense'}>Date port</TableCell>
									<TableCell numeric padding={'dense'}>Monthly wage</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{listOfVacanciesSamos.map(n => {
									return (
										<TableRow key={n.id}>
											<TableCell component="th" scope="row" numeric padding={'checkbox'}>
												{n.id}
											</TableCell>
											<TableCell padding={'dense'}>{n.rank}</TableCell>
											<TableCell padding={'dense'}>{n.VSL_name}</TableCell>
											<TableCell numeric padding={'dense'}>{n.DWT_METype}</TableCell>
											<TableCell numeric padding={'dense'}>{n.DatePort}</TableCell>
											<TableCell numeric padding={'dense'}>{n.Wage}</TableCell>
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel defaultExpanded={true}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>NOMIKOS</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Table className={classes.table}>
							<TableHead>
								<TableRow>
									<TableCell numeric padding={'checkbox'}>№</TableCell>
									<TableCell padding={'dense'}>RANK</TableCell>
									<TableCell padding={'dense'}>VSL Name</TableCell>
									<TableCell numeric padding={'dense'}>DWT / ME_Type</TableCell>
									<TableCell numeric padding={'dense'}>Date port</TableCell>
									<TableCell numeric padding={'dense'}>Monthly wage</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{listOfVacanciesNomikos.map(n => {
									return (
										<TableRow key={n.id}>
											<TableCell component="th" scope="row" numeric padding={'checkbox'}>
												{n.id}
											</TableCell>
											<TableCell padding={'dense'}>{n.rank}</TableCell>
											<TableCell padding={'dense'}>{n.VSL_name}</TableCell>
											<TableCell numeric padding={'dense'}>{n.DWT_METype}</TableCell>
											<TableCell numeric padding={'dense'}>{n.DatePort}</TableCell>
											<TableCell numeric padding={'dense'}>{n.Wage}</TableCell>
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel defaultExpanded={true}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>OFFEN</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Table className={classes.table}>
							<TableHead>
								<TableRow>
									<TableCell numeric padding={'checkbox'}>№</TableCell>
									<TableCell padding={'dense'}>RANK</TableCell>
									<TableCell padding={'dense'}>VSL Name</TableCell>
									<TableCell numeric padding={'dense'}>DWT / ME_Type</TableCell>
									<TableCell numeric padding={'dense'}>Date port</TableCell>
									<TableCell numeric padding={'dense'}>Monthly wage</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{listOfVacanciesOffen.map(n => {
									return (
										<TableRow key={n.id}>
											<TableCell component="th" scope="row" numeric padding={'checkbox'}>
												{n.id}
											</TableCell>
											<TableCell padding={'dense'}>{n.rank}</TableCell>
											<TableCell padding={'dense'}>{n.VSL_name}</TableCell>
											<TableCell numeric padding={'dense'}>{n.DWT_METype}</TableCell>
											<TableCell numeric padding={'dense'}>{n.DatePort}</TableCell>
											<TableCell numeric padding={'dense'}>{n.Wage}</TableCell>
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</Paper>
		</React.Fragment>
	}
}

export default withStyles(styles, {withTheme: true})(Vacancies);