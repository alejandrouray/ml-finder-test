import React from 'react';
import './Breadcrumb.sass';

const Breadcrumb = ({ categories }) => {
    const content = categories && categories.slice(0,4).reduce((x,y) => `${x} > ${y}`);

    return (
        <div className="breadcrumb__container">
            {content}
        </div>
    );
};


export default Breadcrumb;