import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CompanyIcon from '@material-ui/icons/DirectionsBoat';
import PartnersIcon from '@material-ui/icons/Group';
import CertificationIcon from '@material-ui/icons/Assignment';
import VacanciesIcon from '@material-ui/icons/AccountBox';
import ApplicationIcon from '@material-ui/icons/Description';
import ContactIcon from '@material-ui/icons/Info';
import {Link} from 'react-router-dom';
import {FormattedMessage} from "react-intl";

export const drawerListItems = (
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
);