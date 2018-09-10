import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import {FormattedMessage} from 'react-intl';
import SingleLineImgList from '../components/lineGridList';
import LineGridCertification from '../components/lineGridCertification';

const styles = theme => ({
	typography: {
		align: 'justify',
		padding: theme.spacing.unit * 1,
	},
});

class Company extends React.Component {
	render() {
		const {classes} = this.props;

		return <React.Fragment>
			<Typography className={classes.typography} variant={'headline'} align={'center'}>
				<FormattedMessage id="company.headline"/>
			</Typography>
			<Typography className={classes.typography}>
				<FormattedMessage id="company.text1"/>
			</Typography>
			<SingleLineImgList/>
			<Typography className={classes.typography}>
				<FormattedMessage id="company.text2"/>
			</Typography>
			<LineGridCertification/>
			<Typography className={classes.typography}>
				<FormattedMessage id="company.text3"/>
			</Typography>
			<Typography className={classes.typography} variant="title">
				<FormattedMessage id="company.subhead1"/>
			</Typography>
			<Typography className={classes.typography}>
				<li><FormattedMessage id="company.li1_1"/></li>
				<li><FormattedMessage id="company.li1_2"/></li>
				<li><FormattedMessage id="company.li1_3"/></li>
			</Typography>
			<Typography className={classes.typography}>
				<FormattedMessage id="company.text4"/>
			</Typography>
			<Typography className={classes.typography} variant="title">
				<FormattedMessage id="company.subhead2"/>
			</Typography>
			<Typography className={classes.typography}>
				<li><FormattedMessage id="company.li2_1"/></li>
				<li><FormattedMessage id="company.li2_2"/></li>
				<li><FormattedMessage id="company.li2_3"/></li>
				<li><FormattedMessage id="company.li2_4"/></li>
				<li><FormattedMessage id="company.li2_5"/></li>
			</Typography>
			<Typography className={classes.typography}>
				<FormattedMessage id="company.text5"/>
			</Typography>
			<Typography className={classes.typography}>
				<FormattedMessage id="company.text6"/>
			</Typography>
		</React.Fragment>;
	}
}

export default withStyles(styles, {withTheme: true})(Company);