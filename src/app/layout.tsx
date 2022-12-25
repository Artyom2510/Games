import { FC, PropsWithChildren } from 'react';
import PageHeader from '../components/Header';
import Providers from '../providers';
import './global.css';

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html>
			<head />
			<body>
				<Providers>
					<PageHeader />
					<main>{children}</main>
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
