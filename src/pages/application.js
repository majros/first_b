import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
			<Typography className={classes.typography} variant={'headline'}>
				Download enclosed application form, fill it and send it to info@bark.com.ua
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