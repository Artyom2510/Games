import { Button, Form, Input } from 'antd';
import React, { FC } from 'react';
import { IMAGE } from '../../../constants';
import {
	useAppDispatch,
	useAppSelector
} from '../../../hooks/useTypedSelector';
import { TCommonCard } from '../../../models/commonCard';
import { createGameAction } from '../../../store/games/actions';
import UploadWithPreview from '../../UploadWithPreview';
import { CreateGameProps } from './types';

const CreateGame: FC<CreateGameProps> = ({ handleTglModal }) => {
	const [form] = Form.useForm();
	const { setFieldValue, setFields } = form;
	const dispatch = useAppDispatch();
	const { error, isLoading } = useAppSelector(store => store.games);

	const handleChangeFile = (url: string | null) => {
		setFieldValue('image', url);
		url && setFields([{ name: 'image', errors: [] }]);
	};

	const handleSubmit = async (values: TCommonCard) => {
		await dispatch(createGameAction(values));
		handleTglModal();
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
				<Input.TextArea
					autoSize={{ minRows: 2, maxRows: 6 }}
					style={{ resize: 'none' }}
				/>
			</Form.Item>
			<Form.Item
				name='image'
				label='Load image'
				rules={[{ required: true, message: 'Please load image' }]}
			>
				<UploadWithPreview
					handleChangeFile={handleChangeFile}
					maxCount={1}
					accept={IMAGE}
				/>
			</Form.Item>
			{error && <p>Server error, please try later</p>}
			<Form.Item>
				<Button type='primary' htmlType='submit'>
					Offer game
				</Button>
			</Form.Item>
		</Form>
	);
};

export default CreateGame;
