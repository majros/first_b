import React from 'react';
import {FormattedMessage} from 'react-intl';
import samosPhoto from './img/samosPhoto.jpg';
import nomikosPhoto from './img/nomikosPhoto.jpg';
import offenPhoto from './img/offenPhoto.jpg';

export const listOfPartners = [
	{
		company: 'SAMOS STEAMSHIP Co.',
		site: 'https://samossteamship.gr/#home',
		pict: samosPhoto,
		descript: <FormattedMessage id="partners.descriptSamos"/>
	},
	{
		company: 'A.M. NOMIKOS T.W.M.A. S.A.',
		site: 'https://www.amnomikos.com/',
		pict: nomikosPhoto,
		descript: <FormattedMessage id="partners.descriptNomikos"/>
	},
	{
		company: 'Offengroup',
		site: 'https://offengroup.de/',
		pict: offenPhoto,
		descript: <FormattedMessage id="partners.descriptOffen"/>
	}
];