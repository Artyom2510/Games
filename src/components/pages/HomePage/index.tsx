'use client';

import { useSession } from 'next-auth/react';
import React, { FC } from 'react';
import { HomePageProps } from './types';

const HomePage: FC<HomePageProps> = ({ posts }) => {
	const { data } = useSession();
	console.log(data);
	return (
		<>
			<div>
				{posts?.map(({ id, title }) => (
					<div key={id}>{title}</div>
				))}
			</div>
		</>
	);
};

export default HomePage;
