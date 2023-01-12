import { message, Radio, RadioChangeEvent } from 'antd';
import React, { FC, useState } from 'react';
import { CardFooterProps } from './types';
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import { TChoice } from '../../../models/commonCardData';
import { updateGame } from '../../../clients';
import { Footer } from './style';

const { Group } = Radio;

const CardFooter: FC<CardFooterProps> = ({ choice, liked, disliked, id }) => {
	const [disabledRadio, setDisabledRadio] = useState(false);

	const handleTglLike = async (e: RadioChangeEvent) => {
		setDisabledRadio(true);
		const currentChoice = e.target.value as TChoice;
		const partialUpdate = {
			choice: currentChoice,
			id
		};

		if (currentChoice === 'liked') {
			partialUpdate['liked_count'] = liked + 1;
			if (choice) {
				partialUpdate['disliked_count'] = disliked - 1;
			}
		} else {
			partialUpdate['disliked_count'] = disliked + 1;
			if (choice) {
				partialUpdate['liked_count'] = liked - 1;
			}
		}

		await updateGame(partialUpdate);
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
