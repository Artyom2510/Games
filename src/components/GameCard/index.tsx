import React, { FC, PropsWithChildren } from 'react';
import { Card } from 'antd';
import Link from 'next/link';
import { TCommonCardData } from '../../models/commonCardData';

const { Meta } = Card;

const CommonCard: FC<PropsWithChildren<TCommonCardData>> = ({
	title,
	description,
	image,
	disliked_count,
	liked_count,
	choice,
	id
}) => {
	return (
		<Link href={`/game/${id}`}>
			<Card
				hoverable
				style={{ width: 240 }}
				// cover={
				// 	<img
				// 		alt={title}
				// 		src={image}
				// 	/>
				// }
			>
				<Meta title={title} description={description} />
			</Card>
		</Link>
	);
};

export default CommonCard;
