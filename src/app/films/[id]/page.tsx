import FullCard from '../../../components/FullCard';
import { TPost } from '../../../models/post';

const getFilm = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const film = (await res.json()) as TPost;
	return film;
};

const Game = async () => {
	const film = await getFilm();
	return <FullCard info={film} />;
};

export default Game;
