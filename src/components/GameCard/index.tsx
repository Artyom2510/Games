import React, { FC, PropsWithChildren } from 'react';
import { Card } from 'antd';
import Link from 'next/link';
import { TCommonCardData } from '../../models/commonCardData';
import { getImage } from '../../clients';
import { StyledImage } from './styles';

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
	const { publicUrl } = getImage(image);
	return (
		<Link href={`/game/${id}`}>
			<Card
				hoverable
				style={{ width: 98 }}
				cover={
					<StyledImage alt={title} src={publicUrl} width={98} height={147} />
				}
			>
				<Meta title={title} description={description} />
			</Card>
		</Link>
	);
};

export default CommonCard;
