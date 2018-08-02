import React from 'react';
import AppDrawer from '../Drawer';
import Partners from "../../pages/Partners";
import News from "../../pages/News";
import Contact from "../../pages/Contact";
import Gallery from "../../pages/Gallery";
import Company from "../../pages/Company";
import Cadets from "../../pages/Cadets";
import Vacancies from "../../pages/Vacancies";
import { Switch, Redirect } from "react-router-dom";
import LocaleRoute from '../LocaleRoute';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	content: {
		backgroundColor: theme.palette.background.default,
	},
});

class Layout extends React.Component {
	render() {
		return <div style={{
			flexGrow: 1,
			zIndex: 1,
			overflow: 'hidden',
			position: 'relative',
			display: 'flex',
		}}>
			<AppDrawer/>
			<Switch>
				<LocaleRoute exact path={'/company'} component={Company} />
				<LocaleRoute exact path={'/news'} component={News} />
				<LocaleRoute exact path={'/partners'} component={Partners} />
				<LocaleRoute exact path={'/vacancies'} component={Vacancies} />
				<LocaleRoute exact path={'/cadets'} component={Cadets} />
				<LocaleRoute exact path={'/gallery'} component={Gallery} />
				<LocaleRoute exact path={'/contact'} component={Contact} />
				<Redirect from={'/'} to={'/company'} />
			</Switch>
		</div>
	}
}

export default withStyles(styles, { withTheme: true })(Layout);