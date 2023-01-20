import { Button, Form, Input } from 'antd';
import React from 'react';
import {
	useAppDispatch,
	useAppSelector
} from '../../../hooks/useTypedSelector';
import { TCredentials } from '../../../models/credentials';
import { login } from '../../../store/auth/actions';
import ErrorMessage from '../ErrorMessage';

const LoginForm = () => {
	const dispatch = useAppDispatch();

	const { error, isLoading } = useAppSelector(store => store.auth);

	const onFinish = async (values: TCredentials) => {
		await dispatch(login(values));
	};

	return (
		<Form
			name='login'
			onFinish={onFinish}
			autoComplete='on'
			layout='vertical'
			disabled={isLoading}
		>
			<Form.Item
				label='Your email'
				name='email'
				validateTrigger={['onBlur']}
				rules={[
					{
						required: true,
						type: 'email',
						message: 'Please input your email!'
					}
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label='Password'
				name='password'
				validateTrigger={['onBlur']}
				rules={[
					{ required: true, message: 'Please input your password!', min: 6 }
				]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item
				label='Your name'
				name='name'
				rules={[{ required: true, message: 'Please input your name!' }]}
			>
				<Input />
			</Form.Item>

			<Form.Item label='Your nickname' name='nickname'>
				<Input />
			</Form.Item>

			{error && <ErrorMessage err={error} />}

			<Form.Item>
				<Button type='primary' htmlType='submit'>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default LoginForm;
