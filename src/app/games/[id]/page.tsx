import GameFullCard from '../../../components/FullCard';
import { TPost } from '../../../models/post';

const getGame = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const game = (await res.json()) as TPost;
	return game;
};

const Game = async () => {
	const game = await getGame();
	return <GameFullCard info={game} />;
};

export default Game;
