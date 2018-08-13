import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Switch, Redirect } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import BtnFabUp from '@material-ui/icons/ArrowUpward';
import { styles } from './style'
import Header from './header'
import Company from "../../pages/company";
import Certification from "../../pages/certification";
import Partners from "../../pages/partners";
import Vacancies from "../../pages/vacancies";
import Application from "../../pages/application";
import Contacts from "../../pages/contacts";
import samosInfo from "../../pages/samos";
import samosCadets from "../../pages/samosCadets";
import samosCertification from "../../pages/samosCertification";
import samosMedical from "../../pages/samosMedical";
import nomikosInfo from "../../pages/nomikos";
import nomikosCertification from "../../pages/nomikosCertification";
import nomikosMedical from "../../pages/nomikosMedical";
import offenInfo from "../../pages/offen";
import offenCertification from "../../pages/offenCertification";
import offenMedical from "../../pages/offenMedical";
import Footer from "./footer";
import LocaleRoute from '../localeRoute';
import LocaleDrawer from './drawer';

class PersistentDrawer extends React.Component {
	state = {
		open: true,
		scrolled: 0,
	};

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};
	handleDrawerClose = () => {
		this.setState({ open: false });
	};
	scrollUp = () => {
		this.scrolled = window.pageYOffset;
		this.scrollToTop();
	};
	scrollToTop = () => {
		let timer;
		if (this.scrolled > 2*300) {
			window.scrollTo(0, this.scrolled);
			this.scrolled = this.scrolled -300;
			timer = setTimeout(this.scrollToTop, 50);
		}
		else {
			clearTimeout(timer);
			window.scrollTo(0,0);
		}
	};

	render() {
		const { classes, theme } = this.props;
		const { open } = this.state;

		return (
			<div className={classes.root}>
				<div className={classes.appFrame}>
					<AppBar
						className={classNames(classes.appBar, {
							[classes.appBarShift]: open,
							[classes[`appBarShift-left`]]: open,
						})}
					>
						<Toolbar disableGutters={!open}>
							<IconButton
								color="inherit"
								aria-label="Open drawer"
								onClick={this.handleDrawerOpen}
								className={classNames(classes.menuButton, open && classes.hide)}
							>
								<MenuIcon />
							</IconButton>
							<Header/>
						</Toolbar>
					</AppBar>
					<Drawer
						variant="persistent"
						open={open}
						classes={{paper: classes.drawerPaper,}}
					>
						<div className={classes.drawerHeader}>
							<IconButton onClick={this.handleDrawerClose}>{theme.direction = <ChevronLeftIcon />}</IconButton>
						</div>
						<Divider />
						<LocaleDrawer/>
						<Divider />
					</Drawer>
					<main
						className={classNames(classes.content, classes[`content-left`], {
							[classes.contentShift]: open,
							[classes[`contentShift-left`]]: open,
						})}
					>
						<div className={classes.drawerHeader} />
						<Switch>
							<LocaleRoute exact path={'/company'} component={Company} />
							<LocaleRoute exact path={'/certification'} component={Certification} />
							<LocaleRoute exact path={'/partners'} component={Partners} />
							<LocaleRoute exact path={'/vacancies'} component={Vacancies} />
							<LocaleRoute exact path={'/application'} component={Application} />
							<LocaleRoute exact path={'/contacts'} component={Contacts} />
							<LocaleRoute exact path={'/samos'} component={samosInfo} />
							<LocaleRoute exact path={'/samosCadets'} component={samosCadets} />
							<LocaleRoute exact path={'/samosCertification'} component={samosCertification} />
							<LocaleRoute exact path={'/samosMedical'} component={samosMedical} />
							<LocaleRoute exact path={'/nomikos'} component={nomikosInfo} />
							<LocaleRoute exact path={'/nomikosCertification'} component={nomikosCertification} />
							<LocaleRoute exact path={'/nomikosMedical'} component={nomikosMedical} />
							<LocaleRoute exact path={'/offen'} component={offenInfo} />
							<LocaleRoute exact path={'/offenCertification'} component={offenCertification} />
							<LocaleRoute exact path={'/offenMedical'} component={offenMedical} />
							<Redirect from={'/'} to={'/company'} />
						</Switch>
					</main>
					<Button
						onClick={this.scrollUp}
						variant="fab"
						color="secondary"
						aria-label="BtnFabUp"
						className={classes.fab}>
						<BtnFabUp />
					</Button>
				</div>
				<Footer/>
			</div>
		);
	}
}

PersistentDrawer.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawer);