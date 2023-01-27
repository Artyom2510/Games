import HomePage from '../components/pages/HomePage';
import { TPost } from '../models/post';

const getGames = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const posts: TPost[] = await res.json();
	return posts;
};

const Home = async () => {
	const posts = await getGames();
	return <HomePage posts={posts} />;
};

export default Home;
