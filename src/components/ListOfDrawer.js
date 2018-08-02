import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CompanyIcon from '@material-ui/icons/DirectionsBoat';
//import NewsIcon from '@material-ui/icons/FiberNew';
import PartnersIcon from '@material-ui/icons/Group';
import VacanciesIcon from '@material-ui/icons/SpeakerNotes';
import CadetsIcon from '@material-ui/icons/AccountBox';
import GalleryIcon from '@material-ui/icons/Collections';
import ContactIcon from '@material-ui/icons/Info';
//import { Link } from 'react-router-dom';

export const globalListItems = (
	<div>
		<ListItem button >
			<ListItemIcon>
				<CompanyIcon />
			</ListItemIcon>
			<ListItemText primary="COMPANY" />
		</ListItem>
		<ListItem button >
			<ListItemIcon>
				<PartnersIcon />
			</ListItemIcon>
			<ListItemText primary="PARTNERS" />
		</ListItem>
	</div>
);

export const seamanListItems = (
	<div>
		<ListItem button >
			<ListItemIcon>
				<VacanciesIcon />
			</ListItemIcon>
			<ListItemText primary="VACANCIES" />
		</ListItem>
		<ListItem button >
			<ListItemIcon>
				<CadetsIcon />
			</ListItemIcon>
			<ListItemText primary="CADETS" />
		</ListItem>
	</div>
);

export const otherListItems = (
	<div>
		<ListItem button >
			<ListItemIcon>
				<GalleryIcon />
			</ListItemIcon>
			<ListItemText primary="GALLERY" />
		</ListItem>
		<ListItem button >
			<ListItemIcon>
				<ContactIcon />
			</ListItemIcon>
			<ListItemText primary="CONTACT" />
		</ListItem>
	</div>
);