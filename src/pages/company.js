import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import {FormattedMessage} from 'react-intl';
import SingleLineImgList from '../components/lineGridList';
import Grid from '@material-ui/core/Grid';

import certificate from '../components/img/_certificate.jpg'
import license from '../components/img/_License.jpg'
import mlc from '../components/img/_MLC 04.2018.jpg'

const styles = theme => ({
	typography: {
		align: 'justify',
		padding: theme.spacing.unit * 1,
	},
	gridList: {
		width: '80hv',
	},
	imgs: {
		width: '550px',
		height: '800px',
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
			<Typography className={classes.typography} variant={'title'}>
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
			<Grid container className={classes.gridList}>
				<Grid item sm={12} >
					<img src={mlc} alt={'icon'} className={classes.imgs}/>
					<img src={certificate} alt={'icon'} className={classes.imgs}/>
					<img src={license} alt={'icon'} className={classes.imgs}/>
				</Grid >
			</Grid>
		</main>;
	}
}

export default withStyles(styles, {withTheme: true})(Company);