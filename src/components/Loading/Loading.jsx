import React from 'react';
import Loader from 'react-loader-spinner';
import './Loading.sass';

const Loading = () => (
    <div className="loading__container">
        <Loader
            type="ThreeDots"
            color="#000"
            height={300}
            width={300}
        />
    </div>
);


export default Loading;