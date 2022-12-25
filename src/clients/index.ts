import { createClient, User, AuthError } from '@supabase/supabase-js';
import { TCredentials } from '../models/credentials';
import { clientData } from '../helpers/clientData';
import { TCommonCard } from '../models/commonCard';
import { TChoice, TCommonCardData } from '../models/commonCardData';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const signUpSupabase = async (
	values: TCredentials
): Promise<User | AuthError> => {
	const supabaseData = await supabase.auth.signUp(values);
	return clientData(supabaseData);
};

const signInSupabase = async (
	values: TCredentials
): Promise<User | AuthError> => {
	const supabaseData = await supabase.auth.signInWithPassword(values);
	return clientData(supabaseData);
};

const logOutSupabase = async () => {
	return await supabase.auth.signOut();
};

const getImages = async () => {
	const { data = [], error } = await supabase.storage.from('images').list();

	if (error) {
		console.log(error);
	}

	return data;
};

const uploadImage = async (id, file) => {
	const { data, error } = await supabase.storage
		.from('images')
		.upload(`${id}`, file);
	if (data) {
		getImages();
	} else {
		console.log(error);
	}
};

const createGame = async (game: TCommonCard) => {
	const { data, error } = await supabase.from('games').insert(game).single();
	if (error) console.log(error.message);
	return data;
};

const updateGame = async (game: Partial<TCommonCardData>) => {
	const { id, ...rest } = game;
	const { data, error } = await supabase
		.from('games')
		.update(rest)
		.eq('id', id)
		.single();

	return data;
};

const daleteGame = async (id: number) => {
	const { data, error } = await supabase.from('games').delete().eq('id', id);

	return data;
};

const getGamesList = async () => {
	const { data, error } = await supabase.from('games').select();
	return data || [];
};

const likedGame = async (choice: TChoice) => {
	const { data, error } = await supabase
		.from('games')
		.select()
		.eq('choice', choice);
	return data || [];
};

export {
	likedGame,
	createGame,
	updateGame,
	daleteGame,
	getGamesList,
	signUpSupabase,
	signInSupabase,
	logOutSupabase,
	getImages,
	uploadImage
};
