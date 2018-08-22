import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';

import certificate from './components/img/_certificate.jpg'
import license from './components/img/_License.jpg'
import mlc from './components/img/_MLC 04.2018.jpg'

const listOfCertification = [certificate, license, mlc];

class SimpleDialog extends React.Component {
	handleClose = () => {this.props.onClose(this.props.selectedValue)}; //закрыть окно при нажатии вне его
	handleListItemClick = value => {this.props.onClose(value)}; //вызывается родительская функция с выделенным элементом

	render() {
		const { onClose, selectedValue, ...other } = this.props;
		return (
			<Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
				<List>
					{listOfCertification.map(lst => (
						<ListItem button onClick={() => this.handleListItemClick(lst)} key={lst}>
							<ListItemText primary={lst} />
						</ListItem>
					))}
				</List>
			</Dialog>
		);
	}
}
SimpleDialog.propTypes = {onClose: PropTypes.func, selectedValue: PropTypes.string};

class SimpleDialogDemo extends React.Component {
	state = {open: false, selectedValue: null,};
	handleClickOpen = () => {this.setState({open: true})}; //открывает окно
	handleClose = value => {this.setState({ selectedValue: value, open: false })}; //присваивается значение выбраной картинки и закрывается окно

	render() {
		return (
			<div>
				<Typography>Selected: {this.state.selectedValue}</Typography>
				<Button onClick={this.handleClickOpen}>Open simple dialog</Button>
				<SimpleDialog selectedValue={this.state.selectedValue} open={this.state.open} onClose={this.handleClose}/>
			</div>
		);
	}
}

export default SimpleDialogDemo;