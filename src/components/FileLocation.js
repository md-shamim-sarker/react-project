import React from 'react';

const FileLocation = ({file}) => {
    return (
        <div>
            <div className='fixed bottom-2 right-7 italic text-blue-400'>{file}</div>
        </div>
    );
};

export default FileLocation;