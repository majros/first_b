import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {FormattedMessage} from 'react-intl';

const styles = theme => ({
	typography: {
		align: 'justify',
		padding: theme.spacing.unit * 1,
	},
	button: {
		margin: theme.spacing.unit,
	},
});

class Application extends React.Component {
	render() {
		const {classes} = this.props;

		return <React.Fragment>
			<Typography className={classes.typography} variant={'headline'} align={'center'}>
				<FormattedMessage id="application.headline"/>
			</Typography>
			<Typography className={classes.typography}>
				<FormattedMessage id="application.textItem1"/>
			</Typography>
			<Button target='_blank'
			        variant="contained"
			        color="secondary"
			        className={classes.button}
			        href={"https://drive.google.com/open?id=1B9dP9AB9shIQB01HqH7K8Ttu4ZtYN15m"}>
				Download
			</Button>
		</React.Fragment>;
	}
}

export default withStyles(styles, {withTheme: true})(Application);