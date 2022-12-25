import React, { FC } from 'react';
import { Col, Row } from 'antd';
import GameCard from '../GameCard';
import { TCardListProps } from './types';

const CardList: FC<TCardListProps> = ({ data }) => {
	return (
		<Row gutter={16}>
			{data?.map(el => {
				return (
					<Col span={8} key={el.id}>
						<GameCard {...el} />
					</Col>
				);
			})}
		</Row>
	);
};

export default CardList;
