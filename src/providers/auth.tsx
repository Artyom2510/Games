import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useTypedSelector';
import { getUserAction } from '../store/userData/actions';

const AuthProvider = ({ children }) => {
	const dispatch = useAppDispatch();
	const { data: session } = useSession();
	const email = session?.user.email;
	const { data } = useAppSelector(store => store.user);

	useEffect(() => {
		if (!data && email) {
			dispatch(getUserAction(email));
		}
	}, [data, email]);

	return children;
};

export default AuthProvider;
