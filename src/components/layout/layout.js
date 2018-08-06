import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { drawerListItems } from '../listOfDrawer';

const drawerWidth = 240;

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	appFrame: {
		height: 'auto',
		zIndex: 1,
		overflow: 'hidden',
		position: 'relative',
		display: 'flex',
		width: '100%',
	},
	appBar: {
		position: 'absolute',
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	'appBarShift-left': {
		marginLeft: drawerWidth,
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 20,
	},
	hide: {
		display: 'none',
	},
	drawerPaper: {
		height: '100%',
		position: 'relative',
		width: drawerWidth,
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing.unit * 3,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	'content-left': {
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	'contentShift-left': {
		marginLeft: 0,
	},
});

class PersistentDrawer extends React.Component {
	state = {
		open: true,
	};

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { classes, theme } = this.props;
		const { open } = this.state;

		return (
			<div className={classes.root}>
				<div className={classes.appFrame}>
					<AppBar
						className={classNames(classes.appBar, {
							[classes.appBarShift]: open,
							[classes[`appBarShift-left`]]: open,
						})}
					>
						<Toolbar disableGutters={!open}>
							<IconButton
								color="inherit"
								aria-label="Open drawer"
								onClick={this.handleDrawerOpen}
								className={classNames(classes.menuButton, open && classes.hide)}
							>
								<MenuIcon />
							</IconButton>
							<Typography variant="title" color="inherit" noWrap>
								-----------------Persistent drawer---------------
							</Typography>
						</Toolbar>
					</AppBar>
					<Drawer
						variant="persistent"
						open={open}
						classes={{paper: classes.drawerPaper,}}
					>
						<div className={classes.drawerHeader}>
							<IconButton onClick={this.handleDrawerClose}>
								{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
							</IconButton>
						</div>
						<Divider />
						<List>{drawerListItems}</List>
						<Divider />
					</Drawer>
					<main
						className={classNames(classes.content, classes[`content-left`], {
							[classes.contentShift]: open,
							[classes[`contentShift-left`]]: open,
						})}
					>
						<div className={classes.drawerHeader} />
						<Typography>
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
							text3: 'Агентство BARK сертифицировано Российским регистром и действует в соответстAccording to Shipowner request we can provide either complete or partial crews.
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
							text3: 'Агентство BARK сертифицировано Российским регистром и действует в соответстAccording to Shipowner request we can provide either complete or partial crews.
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
							text3: 'Агентство BARK сертифицировано Российским регистром и действует в соответст'}
						</Typography>
					</main>
				</div>
			</div>
		);
	}
}

PersistentDrawer.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawer);