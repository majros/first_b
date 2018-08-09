import React from 'react';
import {Link} from "react-router-dom";
import {addLocaleData, FormattedMessage, IntlProvider} from 'react-intl';
import {connect} from 'react-redux';
import {messages} from '../../dictionary/messages';
import {flattenMessages} from "../localeRoute/LocaleRoute";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CompanyIcon from '@material-ui/icons/DirectionsBoat';
import PartnersIcon from '@material-ui/icons/Group';
import CertificationIcon from '@material-ui/icons/AssignmentTurnedIn';
import VacanciesIcon from '@material-ui/icons/Assignment';
import ApplicationIcon from '@material-ui/icons/Description';
import ContactIcon from '@material-ui/icons/Info';
import en from "react-intl/locale-data/en";
import ru from "react-intl/locale-data/ru";

addLocaleData([...en, ...ru]);

class LocaleDrawer extends React.Component {
	render() {
		return <IntlProvider
			locale={this.props.locale}
			messages={flattenMessages(messages[this.props.locale])}
		>
			<div>
				<ListItem button component={Link} to={'/company'}>
					<ListItemIcon>
						<CompanyIcon />
					</ListItemIcon>
					<ListItemText primary={<FormattedMessage id="drawerList.textItem1"/>}/>
				</ListItem>
				<ListItem button component={Link} to={'/certification'}>
					<ListItemIcon>
						<CertificationIcon />
					</ListItemIcon>
					<ListItemText primary={<FormattedMessage id="drawerList.textItem2"/>} />
				</ListItem>
				<ListItem button component={Link} to={'/partners'}>
					<ListItemIcon>
						<PartnersIcon />
					</ListItemIcon>
					<ListItemText primary={<FormattedMessage id="drawerList.textItem3"/>} />
				</ListItem>
				<ListItem button component={Link} to={'/vacancies'}>
					<ListItemIcon>
						<VacanciesIcon />
					</ListItemIcon>
					<ListItemText primary={<FormattedMessage id="drawerList.textItem4"/>} />
				</ListItem>
				<ListItem button component={Link} to={'/application'}>
					<ListItemIcon>
						<ApplicationIcon />
					</ListItemIcon>
					<ListItemText primary={<FormattedMessage id="drawerList.textItem5"/>} />
				</ListItem>
				<ListItem button component={Link} to={'/contacts'}>
					<ListItemIcon>
						<ContactIcon />
					</ListItemIcon>
					<ListItemText primary={<FormattedMessage id="drawerList.textItem6"/>} />
				</ListItem>
			</div>
		</IntlProvider>
	}
}

const mapStateToProps = (state) => ({
	locale: state.locale.currentLanguage
});

export default connect(mapStateToProps)(LocaleDrawer)