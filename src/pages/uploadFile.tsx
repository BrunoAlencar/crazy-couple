import 'react-dropzone-uploader/dist/styles.css';
import './uploadFile.scss';
import React, { SetStateAction, useState } from 'react';
import Dropzone, {
  IDropzoneProps,
  ILayoutProps,
} from 'react-dropzone-uploader';

export const UploadFilePage = () => {
  // specify upload params and url for your files
  const getUploadParams: IDropzoneProps['getUploadParams'] = ({ meta }) => {
    return { url: 'https://httpbin.org/post' };
  };

  // called every time a file's `status` changes
  const handleChangeStatus: IDropzoneProps['onChangeStatus'] = (
    { meta, file },
    status
  ) => {
    console.log(status, meta, file);
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit: IDropzoneProps['onSubmit'] = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };

  const Layout = ({
    input,
    previews,
    submitButton,
    dropzoneProps,
    files,
    extra: { maxFiles },
  }: ILayoutProps) => {
    return (
      <div>
        {previews}

        <div {...dropzoneProps}>{files.length < maxFiles && input}</div>

        {files.length > 0 && submitButton}
      </div>
    );
  };

  return (
    <div className='upload-file'>
      <h1>Upload file page</h1>
      <Dropzone
        LayoutComponent={Layout}
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        accept='image/*,audio/*,video/*'
      />
    </div>
  );
};
// https://blog.rocketseat.com.br/upload-de-imagens-no-front-end-com-react-js-e-context-api-3/
