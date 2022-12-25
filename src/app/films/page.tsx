const getFilm = async () => {
	return [1];
};

const Films = async () => {
	const film = await getFilm();
	return <p>{film[0]}</p>;
};

export default Films;
