import React from 'react';
import {Route} from "react-router-dom";
import {addLocaleData, IntlProvider} from 'react-intl';
import {connect} from 'react-redux';
import en from "react-intl/locale-data/en";
import ru from "react-intl/locale-data/ru";
import {messages} from '../../dictionary/messages'

addLocaleData([...en, ...ru]);

export const flattenMessages = (nestedMessages, prefix = '') => {
	return Object.keys(nestedMessages).reduce((messages, key) => {
		let value = nestedMessages[key];
		let prefixedKey = prefix ? `${prefix}.${key}` : key;

		if (typeof value === 'string') {
			messages[prefixedKey] = value;
		} else {
			Object.assign(messages, flattenMessages(value, prefixedKey));
		}

		return messages;
	}, {});
};

class LocaleRoute extends React.Component {
	render() {
		return <IntlProvider
			locale={this.props.locale}
			messages={flattenMessages(messages[this.props.locale])}
		>
			<Route {...this.props} />
		</IntlProvider>
	}
}

const mapStateToProps = (state) => ({
	locale: state.locale.currentLanguage
});

export default connect(mapStateToProps)(LocaleRoute)