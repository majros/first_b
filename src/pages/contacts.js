import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MyFancyComponent from '../components/mapContainer';
import {FormattedMessage} from 'react-intl';

const styles = theme => ({
	typography: {
		padding: theme.spacing.unit * 2,
	},
});

class Contacts extends React.Component {
	render() {
		const {classes} = this.props;

		return <Paper>
			<Grid container justify="space-around" alignItems="center">
				<Grid item>
					<Typography className={classes.typography} variant={'title'}>
						<p><FormattedMessage id="contact.line1"/></p>
						<p><FormattedMessage id="contact.line2"/></p>
						<Divider/>
						<p align="right"><FormattedMessage id="contact.line3"/></p>
						<p align="right">41-71-49</p>
						<p align="right">41-71-50</p>
						<Divider/>
						<p>E-mail: info@bark.com.ua</p>
						<p>www: http://bark.com.ua/</p>
					</Typography>
				</Grid>
				<Grid item>
					<MyFancyComponent/>
				</Grid>
			</Grid>
		</Paper>;
	}
}

export default withStyles(styles, {withTheme: true})(Contacts);