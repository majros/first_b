import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import IconButton from '@material-ui/core/IconButton'
import logo from '../img/logo white2.gif';
import LocaleRU from '../img/ru.png';
import LocaleEN from '../img/en.png';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {changeLocale} from "../../actions/locale";

const styles = ({
	logo: {
		width: 275,
		height: 41,
	},
	header: {
		width: '100%',
		display: 'inline-flex',
		justifyContent: "space-between",
	},
});

class Header extends React.Component {
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
		const {anchorEl} = this.state;
		const open = Boolean(anchorEl);
		let {lngEl} = this.state;

		return (
			<div style={styles.header}>
				<img style={styles.logo} alt='icon' src={logo}/>
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

export default connect(() => ({}), mapDispatchToProps)(Header);