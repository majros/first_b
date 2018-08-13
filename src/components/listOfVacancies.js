let id = 0;
function createData(rank, VSL_name, DWT_METype, DatePort, Wage) {
	id += 1;
	return { id, rank, VSL_name, DWT_METype, DatePort, Wage };
}

export const listOfVacanciesSamos = [
	createData('CPT', 'Sunset', 37, 'august', 8000),
	createData('CE', 'Sunrise', 37, 'september', 5000),
	createData('CO', 'Kerkis', 209, 'august', 4000),
	createData('SO', 'Stamatis', 37, 'september', 3000),
	createData('TO', 'Butterfly', 37, 'august', 2000),
];

export const listOfVacanciesNomikos = [
	createData('CPT', 'Sunset', 37, 'august', 8000),
	createData('CE', 'Sunrise', 37, 'september', 5000),
	createData('CO', 'Kerkis', 209, 'august', 4000),
];

export const listOfVacanciesOffen = [
	createData('CPT', 'Sunset', 37, 'august', 8000),
	createData('CE', 'Sunrise', 37, 'september', 5000),
];