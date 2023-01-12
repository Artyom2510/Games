import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { FC } from 'react';

const UploadButton: FC = () => {
	return (
		<Button>
			<PlusOutlined />
			<p style={{ marginTop: 8 }}>Upload</p>
		</Button>
	);
};

export default UploadButton;
