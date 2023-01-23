'use client';

import React, { useState } from 'react';
import CreateGame from '../Forms/CreateGame';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { CreateGamesWraper } from './styles';
import { useAppSelector } from '../../hooks/useTypedSelector';
import next from 'next/types';

const CreateGameWithModal = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const role = useAppSelector(store => store.user.data?.role);

	const handleTglModal = () => {
		setIsModalOpen(prev => !prev);
	};

	return (
		<>
			{role === 'admin' && (
				<CreateGamesWraper>
					<Button icon={<PlusOutlined />} onClick={handleTglModal}>
						Create game
					</Button>
					<Modal
						open={isModalOpen}
						onCancel={handleTglModal}
						closable
						footer={null}
						mask={false}
					>
						<CreateGame handleTglModal={handleTglModal} />
					</Modal>
				</CreateGamesWraper>
			)}
		</>
	);
};

export default CreateGameWithModal;
