import React from 'react';
import {FormattedMessage} from 'react-intl';
import samosPhoto from './img/samos_1.jpg';
import nomikosPhoto from './img/nomikos_1.jpg';
import offenPhoto from './img/offen_1.jpg';

export const listOfPartners = [
	{
		company: 'SAMOS STEAMSHIP Co.',
		site: '/samos',
		pict: samosPhoto,
		descript: <FormattedMessage id="partners.descriptSamos"/>
	},
	{
		company: 'A.M. NOMIKOS T.W.M.A. S.A.',
		site: '/nomikos',
		pict: nomikosPhoto,
		descript: <FormattedMessage id="partners.descriptNomikos"/>
	},
	{
		company: 'Offengroup',
		site: '/offen',
		pict: offenPhoto,
		descript: <FormattedMessage id="partners.descriptOffen"/>
	}
];