import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
	typography: {
		align: 'justify',
		padding: theme.spacing.unit * 1,
	},
});

class offenCertification extends React.Component {
	render() {
		const {classes} = this.props;

		return <main>
			<Typography className={classes.typography} variant={'headline'}>
				Hello from offenCertification
			</Typography>
		</main>;
	}
}

export default withStyles(styles, {withTheme: true})(offenCertification);