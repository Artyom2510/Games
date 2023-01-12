import { message, Modal, Upload, UploadFile } from 'antd';
import React, { FC, useState } from 'react';
import type { RcFile, UploadProps } from 'antd/es/upload';
import getBase64 from '../../helpers/getBase64';
import UploadButton from './UploadButton';
import { uploadImage } from '../../clients';
import { MAX_SIZE } from '../../constants';
import { UploadWithPreviewProps } from './types';

const UploadWithPreview: FC<UploadWithPreviewProps> = ({
	accept,
	maxCount = 2,
	handleChangeFile
}) => {
	const [previewOpen, setPreviewOpen] = useState(false);
	const [previewImage, setPreviewImage] = useState('');
	const [previewTitle, setPreviewTitle] = useState('');
	const [fileList, setFileList] = useState<UploadFile[]>([]);
	const [validFile, setValidFile] = useState(true);

	const handleCancel = () => setPreviewOpen(false);

	const handlePreview = async ({
		url,
		originFileObj,
		preview,
		name
	}: UploadFile) => {
		if (!url && !preview) {
			preview = await getBase64(originFileObj);
		}

		setPreviewImage(url || preview);
		setPreviewTitle(name || url.substring(url.lastIndexOf('/') + 1));
		setPreviewOpen(true);
	};

	const errorUpload = '123';
	const errorSize = '123';

	const handleChangeUpload: UploadProps['onChange'] = ({
		fileList: newFileList,
		file
	}: {
		fileList: RcFile[];
		file: RcFile;
	}) => {
		setValidFile(true);
		validFile && setFileList(newFileList);
	};

	const beforeUpload = (file: RcFile) => {
		const { type, size, uid } = file;
		if (accept && type && !accept.includes(type.split('/')[1])) {
			setValidFile(false);
			message.error(`${errorUpload} ${accept}!`);
			return;
		}
		if (size) {
			const fileIsOversized = size / 1024 / 1024 < MAX_SIZE;
			if (!fileIsOversized) {
				setValidFile(false);
				message.error(`${errorSize} ${MAX_SIZE}Mb!`);
				return;
			}
		}
		handleChangeFile(uid);
		uploadImage(file);
	};

	const handleRemove = () => {
		handleChangeFile(null);
	};

	return (
		<>
			<Upload
				listType='picture-card'
				fileList={fileList}
				onPreview={handlePreview}
				onRemove={handleRemove}
				onChange={handleChangeUpload}
				beforeUpload={beforeUpload}
				accept={accept}
				maxCount={maxCount}
			>
				{fileList.length < maxCount && <UploadButton />}
			</Upload>
			<Modal
				open={previewOpen}
				title={previewTitle}
				footer={null}
				onCancel={handleCancel}
				closable
				mask={false}
			>
				<img alt='preview' style={{ width: '100%' }} src={previewImage} />
			</Modal>
		</>
	);
};

export default UploadWithPreview;
