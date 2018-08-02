import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CompanyIcon from '@material-ui/icons/DirectionsBoat';
import PartnersIcon from '@material-ui/icons/Group';
import VacanciesIcon from '@material-ui/icons/SpeakerNotes';
import CertificationIcon from '@material-ui/icons/AccountBox';
import AplicationIcon from '@material-ui/icons/Collections';
import ContactIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
	return (
		<Typography component="div" style={{ padding: 8 * 3 }}>
			{props.children}
		</Typography>
	);
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
};

const styles = theme => ({
	root: {
		flexGrow: 1,
		width: '100%',
		backgroundColor: theme.palette.background.paper,
	},
});

class NavTab extends React.Component {
	state = {
		value: 0,
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	render() {
		const { classes } = this.props;
		const { value } = this.state;

		return (
			<div className={classes.root}>
				<AppBar position="static" color="default">
					<Tabs
						value={value}
						onChange={this.handleChange}
						scrollable
						scrollButtons="on"
						indicatorColor="primary"
						textColor="primary"
					>
						<Tab label="ABOUT COMPANY" icon={<CompanyIcon />} />
						<Tab label="CERTIFICATION" icon={<CertificationIcon />} />
						<Tab label="PARTNERS" icon={<PartnersIcon />} />
						<Tab label="VACANCIES" icon={<VacanciesIcon />} />
						<Tab label="APPLICATION " icon={<AplicationIcon />} />
						<Tab label="CONTACTS" icon={<ContactIcon />} />
					</Tabs>
				</AppBar>
				{value === 0 && <TabContainer>
					According to Shipowner request we can provide either complete or partial crews.
					Our data base includes files of Ukrainian seafarers (all ranks) who has already worked on container,
					bulk carrier, tankers, general cargo, sea-river ships, Ro-Ro vessels; have large experience of work,
					good knowledge of English, and all the documents necessary (according to the rank) in compliance with
					STCW 78/95 requirements. All the navigators have certificates of GMDSS operators. Crewmembers are
					thoroughly selected and prospective applicants carefully screened to verify their experience,
					competence, fitness and comprehension of English prior to enlistment. We also arrange visas for the
					seafarers according to the Shipowner request.
					'Samos Steamship is a ship management company operating a mixed fleet of tankers and bulk carriers. ' +
					'Samos manages a fleet of 2 million tons of an average age of 7 years. With over 140 years of experience, ' +
					'Samos Steamship offers reliable sea transport, combining expertise, flexibility and innovation.',
					'A.M. Nomikos operates a commercial, corporate and ship management service for ship owning ' +
					'entities.The Company employs about 1,000 personnel worldwide, on land and sea based operations. The Head ' +
					'Office and central management is located in Athens with commercial activities situated in London.',
					descriptOffen: 'The OFFEN GROUP has a long and proud history stretching from the foundation of RCPO in 1971 ' +
					'to the current day where it has grown to become one of the world\'s leading managers of container shipping, ' +
					'bulk carriers and product tankers. Shown below are some of the key milestones in the development of th'BARK AGENCY - законно зарегистрированная компания с HQ, расположенная в Мариуполе, Украина. ' +
					'Агентство работает уже более десяти лет.',
					text1: 'По просьбе судовладельца мы можем предоставить либо полную, либо частичную команду. В нашу базу ' +
					'данных включены файлы украинских моряков (всех званий), которые уже работали на контейнерах, навалочных ' +
					'судах, танкерах, генеральных грузовиках, морских речных судах, судах Ro-Ro; имеют большой опыт работы, ' +
					'хорошее знание английского языка и все необходимые документы (в соответствии с рангами) в соответствии с ' +
					'требованиями STCW 78/95. Все навигаторы имеют сертификаты операторов GMDSS. Члены экипажа тщательно отобраны, ' +
					'а потенциальные заявители тщательно проверяются, чтобы проверить их опыт, компетентность, пригодность и ' +
					'понимание английского языка до призыва на военную службу. Мы также организуем визы для этих фаранов в ' +
					'соответствии с просьбой судовладельца.',
					text2: 'В процессе отбора экипажей мы делаем следующее:',
					li1: 'Тестовая квалификация моряков в своей области (с использованием тестовой программы CES, разработанной Seagull, Norway);',
					li2: 'Протестируйте профессиональные знания английского языка (проводимые английским инспектором и компьютерным тестом MARLINS);',
					li3: 'Проверять подлинность документов каждого моряка (в Министерстве транспорта Украины).',
					text3: 'Агентство BARK сертифицировано Российским регистром и действует в соответст
				</TabContainer>}
				{value === 1 && <TabContainer>Item Two</TabContainer>}
				{value === 2 && <TabContainer>Item Three</TabContainer>}
				{value === 3 && <TabContainer>Item Four</TabContainer>}
				{value === 4 && <TabContainer>Item Five</TabContainer>}
				{value === 5 && <TabContainer>Item Six</TabContainer>}
				{value === 6 && <TabContainer>Item Seven</TabContainer>}
			</div>
		);
	}
}

NavTab.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTab);