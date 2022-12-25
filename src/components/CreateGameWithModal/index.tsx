'use client';

import React, { useState } from 'react';
import CreateGame from '../Forms/CreateGame';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { GamesSect } from './styles';

const CreateGameWithModal = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleTglModal = () => {
		setIsModalOpen(prev => !prev);
	};

	return (
		<GamesSect>
			<Button icon={<PlusOutlined />} onClick={handleTglModal}>
				Create game
			</Button>
			<Modal
				open={isModalOpen}
				onCancel={handleTglModal}
				closable
				footer={null}
			>
				<CreateGame />
			</Modal>
		</GamesSect>
	);
};

export default CreateGameWithModal;
