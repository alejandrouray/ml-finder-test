import React from 'react';
import { useGlobalContext } from '../../context/globalContext';
import './Breadcrumb.sass';

const Breadcrumb = ({ categories = [] }) => {
    const { breadcrumb, setBreadcrumb } = useGlobalContext();
    const DEFAULT_BREADCRUMB = 'Electronica Audio y Video > iPod > Reproductores > Ipod touch > 32 GB';

    if (categories.length) {
        setBreadcrumb(categories.slice(0,4).reduce((x,y) => `${x} > ${y}`));
        localStorage.setItem('breadcrumb', breadcrumb);
    }

    return (
        <div className="breadcrumb__container">
            {breadcrumb || localStorage.getItem('breadcrumb') || DEFAULT_BREADCRUMB}
        </div>
    );
};


export default Breadcrumb;