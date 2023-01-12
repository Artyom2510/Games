import { getGamesList } from '../../clients';
import CardList from '../../components/CardList';
import CreateGameWithModal from '../../components/CreateGameWithModal';

const GamesPage = async () => {
	const games = await getGamesList();

	return (
		<>
			<CreateGameWithModal />
			<CardList data={games} />
		</>
	);
};

export default GamesPage;
