import React, { FC, PropsWithChildren, useState } from 'react';
import Link from 'next/link';
import { TCommonCardData } from '../../models/commonCardData';
import { getImage } from '../../clients';
import { Card, Content, StyledLink, StyledImage, Title } from './styles';
import { Collapse } from 'antd';
import { ratingScore } from '../../lib/utils/ratingScore';
import ScoreTag from '../ScoreTag';
import CardFooter from './CardFooter';

const { Panel } = Collapse;

const GameCard: FC<PropsWithChildren<TCommonCardData>> = ({
	title,
	description,
	image,
	disliked_count,
	liked_count,
	choice,
	id
}) => {
	const { publicUrl } = getImage(image);
	const [isOpen, setIsOpen] = useState(false);

	const handleTglContent = () => {
		setIsOpen(prev => !prev);
	};

	const score = ratingScore(liked_count, disliked_count);

	return (
		<Card>
			<Link href={`/game/${id}`}>
				<StyledImage alt={title} src={publicUrl} width={98} height={147} />
			</Link>
			<Content>
				<StyledLink href={`/game/${id}`}>
					<Title>{title}</Title>
				</StyledLink>
				<Collapse onChange={handleTglContent}>
					<Panel header={isOpen ? 'Hide' : 'About'} key={id}>
						<p>{description}</p>
					</Panel>
				</Collapse>

				<CardFooter
					id={id}
					choice={choice}
					disliked={disliked_count}
					liked={liked_count}
				/>
			</Content>

			{score !== 0 && <ScoreTag score={score} />}
		</Card>
	);
};

export default GameCard;
