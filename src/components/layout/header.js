import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import logo from '../img/logo white.gif';
import LocaleRU from '../img/ru.png';
import LocaleEN from '../img/en.png';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {changeLocale} from "../../actions/locale";

const styles = ({
	logo: {
		width: 67,
		height: 41,
	},
	header: {
		width: '100%',
		display: 'inline-flex',
		justifyContent: "space-between",
	},
});

class Header extends React.PureComponent {
	state = {
		anchorEl: null,
		lngEl: LocaleRU,
	};
	handleMenu = event => {
		this.setState({anchorEl: event.currentTarget});
	};
	handleClose = () => {
		this.setState({anchorEl: null});
	};

	constructor(props) {
		super(props);
		this.setEn = this.setEn.bind(this);
		this.setRu = this.setRu.bind(this);
	};

	setEn() {
		this.props.changeLocale('en-US');
		this.setState({anchorEl: null});
		this.setState({lngEl: LocaleEN});
	};
	setRu() {
		this.props.changeLocale('ru-RU');
		this.setState({anchorEl: null});
		this.setState({lngEl: LocaleRU});
	};

	render() {
		const {classes} = this.props;
		const {anchorEl} = this.state;
		const open = Boolean(anchorEl);
		let {lngEl} = this.state;

		return (
			<div className={classes.header}>
				<img className={classes.logo} alt='icon' src={logo}/>
				<Typography color='inherit' variant="display1" noWrap>
					Bark Agency
				</Typography>
				<IconButton
					aria-owns={open ? 'menu-appbar' : null}
					aria-haspopup="true"
					onClick={this.handleMenu}
				>
					<img alt='icon' src={lngEl}/>
				</IconButton>
				<Menu
					id="menu-appbar"
					anchorEl={anchorEl}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					open={open}
					onClose={this.handleClose}
				>
					<MenuItem onClick={this.setEn}>
						<img alt='icon' src={LocaleEN}/>
						English
					</MenuItem>
					<MenuItem onClick={this.setRu}>
						<img alt='icon' src={LocaleRU}/>
						Русский
					</MenuItem>
				</Menu>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	changeLocale: bindActionCreators(changeLocale, dispatch),
});

Header = withStyles(styles, {withTheme: true})(Header);

export default connect(() => {
}, mapDispatchToProps)(Header);