import React from 'react';
import { useGlobalContext } from '../../context/globalContext';
import './Breadcrumb.sass';

const Breadcrumb = ({ categories = [] }) => {
    const { breadcrumb, setBreadcrumb } = useGlobalContext();
    categories.length && setBreadcrumb(categories.slice(0,4).reduce((x,y) => `${x} > ${y}`));

    return (
        <div className="breadcrumb__container">
            {breadcrumb || ''}
        </div>
    );
};


export default Breadcrumb;