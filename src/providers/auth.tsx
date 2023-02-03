import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useActionCreators } from '../store/hooks/useActions';
import { useAppSelector } from '../store/hooks/useTypedSelector';
import * as userActions from '../store/userData/actions';

const AuthProvider = ({ children }) => {
	const actions = useActionCreators(userActions);
	const { data: session } = useSession();
	const email = session?.user.email;
	const { data } = useAppSelector(store => store.user);

	useEffect(() => {
		if (!data && email) {
			actions.getUserAction(email);
		}
	}, [data, email]);

	return children;
};

export default AuthProvider;
