import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import {FormattedMessage} from 'react-intl';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import MyFancyComponent from '../components/mapContainer';

const styles = theme => ({
	typography: {
		padding: theme.spacing.unit * 2,
	},
	table: {
		minWidth: 250,
	},
});

class Contacts extends React.Component {
	render() {
		const {classes} = this.props;

		return <React.Fragment>
			<Typography className={classes.typography} variant={'headline'} align={'center'}>
				<FormattedMessage id="contact.headline"/>
			</Typography>
			<Table className={classes.table}>
				<TableBody>
					<TableRow>
						<TableCell padding={'dense'}>
							<Typography className={classes.typography} variant={'body1'}>
								11, Chernomorskaya str., 27 apt.,
								<br/>
								Mariupol, Ukraine, 87517
							</Typography>
						</TableCell>
						<TableCell padding={'dense'}>
							<Typography className={classes.typography} variant={'body1'}>
								87517, Украина, г. Мариуполь,
								<br/>
								улица Черноморская 11, кв. 27
							</Typography>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell padding={'dense'}>Тел./Факс:</TableCell>
						<TableCell padding={'dense'}>NOMIKOS</TableCell>
						<TableCell padding={'dense'}>OFFEN</TableCell>
						<TableCell padding={'dense'}>SAMOS</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell padding={'dense'}>

						</TableCell>
						<TableCell padding={'dense'}>
							+38 (0629) 41-71-48
							<br/>+38 (0629) 41-71-49
							<br/>+38 (0629) 41-71-50
						</TableCell>
						<TableCell padding={'dense'}>
							+38 (0629) 41-36-38
							<br/> +38 (0629) 41-36-25
						</TableCell>
						<TableCell padding={'dense'}>
							+38 (0629) 41-36-25
							<br/> +38 (0629) 41-36-38
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
			<Table className={classes.table}>
				<TableBody>
					<TableRow>
						<TableCell padding={'dense'}>
							E-mail: info@bark.com.ua
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
			<Typography className={classes.typography} variant={'title'} align={'center'}>
				<FormattedMessage id="contact.title1"/>
			</Typography>
			<MyFancyComponent/>
		</React.Fragment>;
	}
}

export default withStyles(styles, {withTheme: true})(Contacts);