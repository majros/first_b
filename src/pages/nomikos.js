import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

import jokeImg from '../components/img/personal-container.jpg'

const styles = theme => ({
	typography: {
		align: 'justify',
		padding: theme.spacing.unit * 1,
	},
});

class nomikosInfo extends React.Component {
	render() {
		const {classes} = this.props;

		return <React.Fragment>
			<Typography className={classes.typography} variant={'headline'}>
				We recruit all without any duties on specific vessels:
			</Typography>
			<img alt='icon' src={jokeImg} style={{width: '80%'}}/>
		</React.Fragment>;
	}
}

export default withStyles(styles, {withTheme: true})(nomikosInfo);