import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import {FormattedMessage} from "react-intl";

const styles = theme => ({
	typography: {
		align: 'justify',
		padding: theme.spacing.unit * 1,
	},
});

class samosCadets extends React.Component {
	render() {
		const {classes} = this.props;

		return <React.Fragment>
			<Typography className={classes.typography} variant={'headline'} align={'center'}>
				<FormattedMessage id="samosCadets.headline"/>
			</Typography>
			<Typography className={classes.typography} variant={'body1'}>
				<FormattedMessage id="samosCadets.samosContent1"/>
			</Typography>
			<Typography className={classes.typography} variant={'body1'}>
				<FormattedMessage id="samosCadets.samosContent2"/>
			</Typography>
			<Typography className={classes.typography} variant={'body1'}>
				<FormattedMessage id="samosCadets.samosContent3"/>
			</Typography>
			<Typography className={classes.typography} variant={'body2'}>
				<li><FormattedMessage id="samosCadets.samosContentUl1"/></li>
				<li><FormattedMessage id="samosCadets.samosContentUl2"/></li>
				<li><FormattedMessage id="samosCadets.samosContentUl3"/></li>
			</Typography>
			<Typography className={classes.typography} variant={'body1'}>
				<FormattedMessage id="samosCadets.samosContent4"/>
			</Typography>
		</React.Fragment>;
	}
}

export default withStyles(styles, {withTheme: true})(samosCadets);