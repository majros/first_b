import React from 'react';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {listOfPartners} from '../components/listOfPartners';
import {FormattedMessage} from 'react-intl';

const styles = theme => ({
	paper: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 1,
		paddingBottom: theme.spacing.unit * 1,
		textAlign: 'center',
	},
	button: {
		margin: theme.spacing.unit,
	},
});

class Partners extends React.Component {
	render() {
		const {classes} = this.props;
		return <main>
			<Typography variant={'display1'} style={{textAlign: 'center', paddingBottom: 20}}>
				<FormattedMessage id="partners.title"/>
			</Typography>
			<Grid container justify="center" spacing={8}>
				{listOfPartners.map(_listOfPartners => (
					<Grid key={_listOfPartners.company} item sm={12} lg={4}>
						<Paper className={classes.paper}>
							<img style={{width: '100%'}} alt='icon' src={_listOfPartners.pict}/>
							<Typography>{_listOfPartners.descript}</Typography>
							<Button target='_blank' variant="outlined" href={_listOfPartners.site} className={classes.button}>
								{_listOfPartners.company}
							</Button>
						</Paper>
					</Grid>
				))}
			</Grid>
		</main>;
	}
}

export default withStyles(styles, {withTheme: true})(Partners);