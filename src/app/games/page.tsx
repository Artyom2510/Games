import CreateGameWithModal from '../../components/CreateGameWithModal';
import Games from '../../components/Games';

const GamesPage = async () => {
	return (
		<>
			<CreateGameWithModal />
			<Games />
		</>
	);
};

export default GamesPage;
