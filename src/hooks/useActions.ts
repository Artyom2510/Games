import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useAppDispatch } from './useTypedSelector';

const allActions = {};

export const useActions = () => {
	const dispatch = useAppDispatch();

	return bindActionCreators(allActions, dispatch);
};

export const useActionsCreators = (actions: ActionCreatorsMapObject) => {
	const dispatch = useAppDispatch();

	return useMemo(() => bindActionCreators(actions, dispatch), []);
};
