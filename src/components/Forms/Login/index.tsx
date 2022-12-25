import { Button, Form, Input } from 'antd';
import { signOut } from 'next-auth/react';
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
		dispatch(login(values)).unwrap();
	};

	const onFinishFailed = () => {
		console.log('failed');
	};

	return (
		<Form
			name='login'
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
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
				rules={[{ required: true, message: 'Please input your password!' }]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item label='Your nickname' name='nickname'>
				<Input />
			</Form.Item>

			{error && <ErrorMessage err={error} />}

			<Form.Item>
				<Button type='primary' onClick={() => signOut()} htmlType='button'>
					signOut
				</Button>
			</Form.Item>
			<Form.Item>
				<Button type='primary' htmlType='submit'>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default LoginForm;
