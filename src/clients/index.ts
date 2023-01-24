import { TUserCred } from './../models/credentials';
import { createClient, User, AuthError } from '@supabase/supabase-js';
import { TCredentials } from '../models/credentials';
import { clientData } from '../helpers/clientData';
import { TCommonCard } from '../models/commonCard';
import { TChoice, TCommonCardData } from '../models/commonCardData';
import { RcFile } from 'antd/es/upload';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const createUser = async (values: TCredentials) => {
	const { data, error } = await supabase.from('users').insert(values).single();

	if (error) {
		return error;
	}

	return data;
};

const getUser = async (email: string): Promise<TUserCred> => {
	const { data, error } = await supabase
		.from('users')
		.select()
		.eq('email', email);

	if (error) {
		console.log(error);
	}

	const { name, nickname, role, id } = data[0] as TUserCred;

	return { name, nickname, role, id };
};

const signUpSupabase = async (
	values: TCredentials
): Promise<User | AuthError> => {
	const supabaseData = await supabase.auth.signUp(values);
	if (!supabaseData.error) {
		await createUser(values);
	}
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

const getImage = (id: string) => {
	const { data } = supabase.storage.from('images').getPublicUrl(`public/${id}`);

	return data;
};

const uploadImage = async (file: RcFile) => {
	const { uid, type } = file;
	const { data, error } = await supabase.storage
		.from('images')
		.upload(`public/${uid}`, file, {
			upsert: false,
			contentType: type
		});
	if (data) {
		return getImages();
	} else {
		console.log(error);
		return error;
	}
};

const createGame = async (game: TCommonCard) => {
	const { data, error } = await supabase.from('games').insert(game).single();
	if (error) {
		console.log(error);
	}
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

const likedGame = async (
	oldChoice: TChoice | null,
	choice: TChoice,
	id: number,
	userId: string
) => {
	if (!oldChoice) {
		const { data, error } = await supabase
			.from('games')
			.upsert([{ id, [choice]: [userId] }]);

		return data || [];
	}
	const { data, error } = await supabase.from('games').select().eq('id', id);
	const newData: TCommonCardData = { ...data[0] };
	newData[choice].push(userId);
	newData[oldChoice] = newData[oldChoice].filter(el => el !== userId);
	await supabase.from('games').update(newData).eq('id', id).single();

	return data || [];
};

export {
	likedGame,
	createGame,
	updateGame,
	daleteGame,
	createUser,
	getUser,
	getGamesList,
	signUpSupabase,
	signInSupabase,
	logOutSupabase,
	getImages,
	getImage,
	uploadImage
};
