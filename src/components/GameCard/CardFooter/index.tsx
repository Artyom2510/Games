import { message, Radio, RadioChangeEvent } from 'antd';
import React, { FC, useState } from 'react';
import { CardFooterProps } from './types';
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import { TChoice } from '../../../models/commonCardData';
import { likedGame } from '../../../clients';
import { Footer } from './style';
import { useAppSelector } from '../../../hooks/useTypedSelector';

const { Group } = Radio;

const CardFooter: FC<CardFooterProps> = ({ liked, disliked, id }) => {
	const [disabledRadio, setDisabledRadio] = useState(false);
	const userId = useAppSelector(store => store.user?.data?.id);
	const isLiked = liked.includes(userId) ? 'liked' : null;
	const isDisliked = disliked.includes(userId) ? 'disliked' : null;
	const choice = isLiked || isDisliked;

	const handleTglLike = async (e: RadioChangeEvent) => {
		setDisabledRadio(true);
		const currentChoice: TChoice = e.target.value;
		await likedGame(choice, currentChoice, id, userId);
		setDisabledRadio(false);
		message.warning('I dont know how I can revalidate data using supabase');
	};

	return (
		<Footer>
			<Group
				disabled={disabledRadio}
				optionType='button'
				buttonStyle='solid'
				onChange={handleTglLike}
				defaultValue={choice}
			>
				<Radio value='liked'>
					<LikeOutlined />
				</Radio>
				<Radio value='disliked'>
					<DislikeOutlined />
				</Radio>
			</Group>
		</Footer>
	);
};

export default CardFooter;
