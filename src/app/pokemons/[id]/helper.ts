import { ColumnsType } from 'antd/es/table';
import { SimpleInfoPokemon } from '../../../models/pokemon';
import { TDataSource } from './types';

export const creatTableData = (data: SimpleInfoPokemon) => {
	const dataSource: TDataSource[] = [{ ...data, key: 'head' }];
	const columns: ColumnsType<TDataSource> = [];

	for (const k in data) {
		columns.push({ dataIndex: k, title: k, key: k });
	}

	return { columns, dataSource };
};
