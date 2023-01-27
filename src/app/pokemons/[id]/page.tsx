'use client';

import { Button, Spin, Table } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import { useGetPokemonByNameQuery } from '../../../services/pokemon.api';
import { creatTableData } from './helper';
import { StyledSect, TableWraper } from './styles';
import { TDataSource } from './types';

const Pokemon = () => {
	const path = usePathname();
	const { back } = useRouter();
	const name = path.split('/').at(-1);

	const { data, error, isLoading } = useGetPokemonByNameQuery(name);
	const { columns, dataSource } = creatTableData(data);

	if (isLoading) {
		return <Spin />;
	}

	if (error) {
		return <p>error</p>;
	}

	return (
		<StyledSect>
			<Button type='primary' onClick={back}>
				Back to slider
			</Button>
			<h1>{`${name.at(0).toUpperCase()}${name.slice(1)} Stats`}</h1>
			<TableWraper>
				<Table<TDataSource>
					dataSource={dataSource}
					columns={columns}
					pagination={{ hideOnSinglePage: true }}
					rowKey={'key'}
				/>
			</TableWraper>
		</StyledSect>
	);
};

export default Pokemon;
