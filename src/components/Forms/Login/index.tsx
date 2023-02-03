import { Button, Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React from 'react';
import { useAppSelector } from '../../../store/hooks/useTypedSelector';
import { TCredentials } from '../../../models/credentials';
import * as authActions from '../../../store/auth/actions';
import ErrorMessage from '../ErrorMessage';
import { FromFooter } from './styles';
import { useActionCreators } from '../../../store/hooks/useActions';

const LoginForm = () => {
	const actions = useActionCreators(authActions);
	const [form] = useForm<TCredentials>();
	const { setFields, getFieldsValue } = form;

	const { error, isLoading } = useAppSelector(store => store.auth);

	const handleRemoveError = (name: string) => {
		setFields([{ name, errors: [] }]);
	};

	const onFinish = async (values: TCredentials) => {
		await actions.signUpAction(values);
	};

	const handleSignIn = async () => {
		const values = getFieldsValue();
		await actions.signInAction(values);
	};

	return (
		<Form
			name='login'
			onFinish={onFinish}
			autoComplete='on'
			layout='vertical'
			form={form}
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
				<Input onChange={() => handleRemoveError('email')} />
			</Form.Item>

			<Form.Item
				label='Password'
				name='password'
				validateTrigger={['onBlur']}
				rules={[
					{ required: true, message: 'Please input your password!', min: 6 }
				]}
			>
				<Input.Password onChange={() => handleRemoveError('password')} />
			</Form.Item>

			{error && <ErrorMessage err={error} />}

			<Form.Item>
				<FromFooter>
					<Button type='primary' htmlType='submit'>
						Sign up
					</Button>

					<Button htmlType='button' onClick={handleSignIn}>
						Sign in
					</Button>
				</FromFooter>
			</Form.Item>
		</Form>
	);
};

export default LoginForm;
