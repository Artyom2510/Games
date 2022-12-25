import { Modal, Upload, UploadFile, Button } from 'antd';
import React, { useState } from 'react';
import type { RcFile, UploadProps } from 'antd/es/upload';
import getBase64 from '../../helpers/getBase64';
import { PlusOutlined } from '@ant-design/icons';

const UploadWithPreview = () => {
	const [previewOpen, setPreviewOpen] = useState(false);
	const [previewImage, setPreviewImage] = useState('');
	const [previewTitle, setPreviewTitle] = useState('');
	const [fileList, setFileList] = useState<UploadFile[]>([]);

	const handleCancel = () => setPreviewOpen(false);

	const handlePreview = async (file: UploadFile) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj as RcFile);
		}

		setPreviewImage(file.url || (file.preview as string));
		setPreviewOpen(true);
		setPreviewTitle(
			file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1)
		);
	};

	const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
		setFileList(newFileList);

	const uploadButton = (
		<Button>
			<PlusOutlined />
			<p style={{ marginTop: 8 }}>Upload</p>
		</Button>
	);

	return (
		<>
			<Upload
				action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
				listType='picture-card'
				fileList={fileList}
				onPreview={handlePreview}
				onChange={handleChange}
			>
				{fileList.length >= 8 ? null : uploadButton}
			</Upload>
			<Modal
				open={previewOpen}
				title={previewTitle}
				footer={null}
				onCancel={handleCancel}
			>
				<img alt='example' style={{ width: '100%' }} src={previewImage} />
			</Modal>
		</>
	);
};

export default UploadWithPreview;
