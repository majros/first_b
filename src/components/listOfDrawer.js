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

export const drawerListItems = (
	<div>
		<ListItem button >
			<ListItemIcon>
				<CompanyIcon />
			</ListItemIcon>
			<ListItemText primary="ABOUT COMPANY" />
		</ListItem>
		<ListItem button >
			<ListItemIcon>
				<CertificationIcon />
			</ListItemIcon>
			<ListItemText primary="CERTIFICATION" />
		</ListItem>
		<ListItem button >
			<ListItemIcon>
				<PartnersIcon />
			</ListItemIcon>
			<ListItemText primary={<FormattedMessage id="partners.title"/>} />
		</ListItem>
		<ListItem button >
			<ListItemIcon>
				<VacanciesIcon />
			</ListItemIcon>
			<ListItemText primary="VACANCIES" />
		</ListItem>
		<ListItem button >
			<ListItemIcon>
				<ApplicationIcon />
			</ListItemIcon>
			<ListItemText primary="APPLICATION" />
		</ListItem>
		<ListItem button >
			<ListItemIcon>
				<ContactIcon />
			</ListItemIcon>
			<ListItemText primary="CONTACTS" />
		</ListItem>
	</div>
);