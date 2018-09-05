import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import MyFancyComponent from '../components/mapContainer';
//import {FormattedMessage} from 'react-intl';

const styles = theme => ({
	typography: {
		padding: theme.spacing.unit * 1,
	},
});

class Contacts extends React.Component {
	render() {
		const {classes} = this.props;

		return <React.Fragment>
			<Typography className={classes.typography} variant={'headline'} align={'center'}>
				Мы всегда рады видеть Вас в нашем офисе по адресу:
			</Typography>
			<Typography className={classes.typography} variant={'body1'}>
				Украина, 87517, г. Мариуполь, <br/>
				улица Черноморская 11, кв. 27
			</Typography>
			<Typography className={classes.typography} variant={'body1'}>
				Тел./Факс: <br/>
				NOMIKOS +38 (0629) 41-71-48<br/>
				OFFEN  +38 (0629) 41-71-49<br/>
				SAMOS  +38 (0629) 41-71-50
			</Typography>
			<Typography className={classes.typography} variant={'body1'}>
				E-mail: info@bark.com.ua
			</Typography>
			<Typography className={classes.typography} variant={'title'} align={'center'}>
				Крюинговое агенство "Барк" на карте Мариуполя:
			</Typography>
			<MyFancyComponent/>
		</React.Fragment>;
	}
}

export default withStyles(styles, {withTheme: true})(Contacts);