import { getGamesList } from '../../clients';
import CardList from '../../components/CardList';
import CreateGameWithModal from '../../components/CreateGameWithModal';

const GamesPage = async () => {
	const games = await getGamesList();

	return (
		<>
			<h1 style={{ textAlign: 'center' }}>Get data using SSR</h1>
			<CreateGameWithModal />
			<CardList data={games} />
		</>
	);
};

export default GamesPage;
