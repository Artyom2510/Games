import React, { FC, PropsWithChildren, useState } from 'react';
import Link from 'next/link';
import { TCommonCardData } from '../../models/commonCardData';
import { getImage } from '../../clients';
import { Card, Content, StyledLink, StyledImage, Title } from './styles';
import { Collapse } from 'antd';
import { ratingScore } from '../../lib/utils/ratingScore';
import ScoreTag from '../ScoreTag';
import CardFooter from './CardFooter';
import { useAppSelector } from '../../hooks/useTypedSelector';

const { Panel } = Collapse;

const GameCard: FC<PropsWithChildren<TCommonCardData>> = ({
	title,
	description,
	image,
	disliked,
	liked,
	id
}) => {
	const { publicUrl } = getImage(image);
	const [isShowContent, setIsShowContent] = useState(false);
	const isUser = useAppSelector(store => store.user.data);

	const handleTglContent = () => {
		setIsShowContent(prev => !prev);
	};

	const score = ratingScore(liked.length, disliked.length);

	return (
		<Card>
			<Link href={`/games/${id}`}>
				<StyledImage alt={title} src={publicUrl} width={98} height={147} />
			</Link>
			<Content>
				<StyledLink href={`/games/${id}`}>
					<Title>{title}</Title>
				</StyledLink>
				<Collapse onChange={handleTglContent}>
					<Panel header={isShowContent ? 'Hide' : 'About'} key={id}>
						<p>{description}</p>
					</Panel>
				</Collapse>

				{isUser && <CardFooter disliked={disliked} liked={liked} id={id} />}
			</Content>

			{score !== 0 && <ScoreTag score={score} />}
		</Card>
	);
};

export default GameCard;
