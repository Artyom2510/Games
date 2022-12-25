import { Button, Form, Input } from 'antd';
import React from 'react';
import {
	useAppDispatch,
	useAppSelector
} from '../../../hooks/useTypedSelector';
import { TCommonCard } from '../../../models/commonCard';
import { createGameAction } from '../../../store/games/actions';
import UploadWithPreview from '../../UploadWithPreview';

const CreateGame = () => {
	const [form] = Form.useForm();
	const dispatch = useAppDispatch();
	const { error, isLoading } = useAppSelector(store => store.games);

	const handleSubmit = (values: TCommonCard) => {
		console.log(values);
		dispatch(createGameAction(values));
	};

	return (
		<Form
			form={form}
			name='create-game'
			onFinish={handleSubmit}
			autoComplete='off'
			layout='vertical'
			disabled={isLoading}
		>
			<Form.Item
				name='title'
				label='Game name'
				rules={[{ required: true, message: 'Please input name' }]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name='description'
				label='Description game'
				rules={[{ required: true, message: 'Please input description' }]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name='image'
				label='Load image'
				rules={[{ required: true, message: 'Please load image' }]}
			>
				<UploadWithPreview />
			</Form.Item>
			<Form.Item>
				<Button type='primary' htmlType='submit'>
					Offer game
				</Button>
			</Form.Item>
		</Form>
	);
};

export default CreateGame;
