import { FC, PropsWithChildren } from 'react';
import PageHeader from '../components/Header';
import StyledComponentsRegistry from '../lib/registry';
import Providers from '../providers';
import './global.css';

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html>
			<head />
			<body>
				<Providers>
					<PageHeader />
					<main>
						<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
					</main>
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
