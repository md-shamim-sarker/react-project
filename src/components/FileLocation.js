import React from 'react';

const FileLocation = ({file}) => {
    return (
        <div>
            <div className='fixed bottom-2 right-7 italic text-blue-100 hover:text-blue-900 -z-10 cursor-pointer'>{file}</div>
        </div>
    );
};

export default FileLocation;