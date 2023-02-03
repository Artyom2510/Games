import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { BoundActions } from '../types';
import { useAppDispatch } from './useTypedSelector';

export const useActionCreators = <Actions extends ActionCreatorsMapObject>(
	actions: Actions
): BoundActions<Actions> => {
	const dispatch = useAppDispatch();

	return useMemo(() => bindActionCreators(actions, dispatch), []);
};
