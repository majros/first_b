import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import {FormattedMessage} from 'react-intl';
import SingleLineImgList from '../components/lineGridList';

const styles = theme => ({
	typography: {
		align: 'justify',
		padding: theme.spacing.unit * 1,
	},
});

class Company extends React.Component {
	render() {
		const {classes} = this.props;

		return <main>
			<Typography className={classes.typography} variant={'headline'}>
				<FormattedMessage id="company.headline"/>
			</Typography>
			<SingleLineImgList/>
			<Typography className={classes.typography} align={'justify'}>
				<FormattedMessage id="company.text1"/>
			</Typography>
			<Typography className={classes.typography} variant={'headline'}>
				<FormattedMessage id="company.text2"/>
			</Typography>
			<Typography className={classes.typography}>
				<li><FormattedMessage id="company.li1"/></li>
				<li><FormattedMessage id="company.li2"/></li>
				<li><FormattedMessage id="company.li3"/></li>
			</Typography>
			<Typography className={classes.typography}>
				<FormattedMessage id="company.text3"/>
			</Typography>
		</main>;
	}
}

export default withStyles(styles, {withTheme: true})(Company);