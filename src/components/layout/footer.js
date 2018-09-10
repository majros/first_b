import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const stylesFoot = {
	height: 50,
	width: '100%',
	alignItems: 'center',
	backgroundColor: '#6573c3',
	position: 'relative',
};

export default class Footer extends React.PureComponent {
	render() {
		return <Grid container style={stylesFoot} justify={'space-around'}>
			<Grid item xs={3}>
				<Typography align={'left'} variant={'button'} noWrap>Bark Agency / Морское агенство Барк</Typography>
				<Typography align={'left'} variant={'caption'} noWrap>Crewing manning / Набор экипажа</Typography>
				<Typography align={'left'} variant={'caption'} noWrap>© 1992 – 2018 г.</Typography>
			</Grid>
			<Grid item xs={3}>
				<Typography align={'center'} variant={'caption'}>
					All rights reserved.
				</Typography>
			</Grid>
			<Grid item xs={3} justify-content={'center'}>
				<Typography align={'right'} variant={'caption'} noWrap>
					Ссылка на группы ВК, ФБ, ???, Твиттер
				</Typography>
			</Grid>
		</Grid>;
	}
}