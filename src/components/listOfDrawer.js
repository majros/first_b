import React from 'react';
import { IntlProvider } from 'react-intl';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';
import {messages} from "../dictionary/messages";
import {flattenMessages} from "./localeRoute";
import CompanyIcon from '@material-ui/icons/DirectionsBoat';
import PartnersIcon from '@material-ui/icons/Group';
import CertificationIcon from '@material-ui/icons/Assignment';
import VacanciesIcon from '@material-ui/icons/AccountBox';
import ApplicationIcon from '@material-ui/icons/Description';
import ContactIcon from '@material-ui/icons/Info';

export const drawerListItems = (
	<IntlProvider
		locale={this.props.locale}
		messages={flattenMessages(messages[this.props.locale])}
	>
		<div>
			<ListItem button component={Link} to={'/company'}>
				<ListItemIcon>
					<CompanyIcon />
				</ListItemIcon>
				<ListItemText primary={'About Us'}/>
			</ListItem>
			<ListItem button component={Link} to={'/certification'}>
				<ListItemIcon>
					<CertificationIcon />
				</ListItemIcon>
				<ListItemText primary={'Certifiaction'} />
			</ListItem>
			<ListItem button component={Link} to={'/partners'}>
				<ListItemIcon>
					<PartnersIcon />
				</ListItemIcon>
				<ListItemText primary={'Partners'} />
			</ListItem>
			<ListItem button component={Link} to={'/vacancies'}>
				<ListItemIcon>
					<VacanciesIcon />
				</ListItemIcon>
				<ListItemText primary={'Vacancies'} />
			</ListItem>
			<ListItem button component={Link} to={'/application'}>
				<ListItemIcon>
					<ApplicationIcon />
				</ListItemIcon>
				<ListItemText primary={'Application'} />
			</ListItem>
			<ListItem button component={Link} to={'/contacts'}>
				<ListItemIcon>
					<ContactIcon />
				</ListItemIcon>
				<ListItemText primary={'Contacts'} />
			</ListItem>
		</div>
	</IntlProvider>
);