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
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import StarBorder from '@material-ui/icons/StarBorder';
import Divider from "@material-ui/core/es/Divider/Divider";

addLocaleData([...en, ...ru]);

class LocaleDrawer extends React.Component {
	state = { open: true };

	handleClick = () => {
		this.setState(state => ({ open: !state.open }));
	};

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
				<ListItem button component={Link} to={'/partners'} onClick={this.handleClick}>
					<ListItemIcon>
						<PartnersIcon />
					</ListItemIcon>
					<ListItemText primary={<FormattedMessage id="drawerList.textItem3"/>} />
					{this.state.open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={this.state.open} timeout="auto" unmountOnExit>
					<List component="partnersId" disablePadding >
						<Divider inset />
						<ListItem button style={{paddingLeft: '40px'}}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<ListItemText inset primary="SAMOS" />
						</ListItem>
								<List component="samosId" disablePadding >
									<ListItem button style={{padding: '5px'}}>
										<ListItemText inset secondary="CERTIFICATION " />
									</ListItem>
									<ListItem button style={{padding: '5px'}}>
										<ListItemText inset secondary="CADETS" />
									</ListItem>
									<ListItem button style={{padding: '5px'}}>
										<ListItemText inset secondary="MEDICAL" />
									</ListItem>
								</List>
						<Divider inset />
						<ListItem button style={{paddingLeft: '40px'}}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<ListItemText inset primary="NOMIKOS" />
						</ListItem>
								<List component="nomikosId" disablePadding >
									<ListItem button style={{padding: '5px'}}>
										<ListItemText inset secondary="CERTIFICATION " />
									</ListItem>
									<ListItem button style={{padding: '5px'}}>
										<ListItemText inset secondary="MEDICAL" />
									</ListItem>
								</List>
						<Divider inset />
						<ListItem button style={{paddingLeft: '40px'}}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<ListItemText inset primary="OFFEN" />
						</ListItem>
								<List component="offenId" disablePadding >
									<ListItem button style={{padding: '5px'}}>
										<ListItemText inset secondary="CERTIFICATION " />
									</ListItem>
									<ListItem button style={{padding: '5px'}}>
										<ListItemText inset secondary="MEDICAL" />
									</ListItem>
								</List>
						<Divider inset />
					</List>
				</Collapse>
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