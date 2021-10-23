import React, { useEffect } from 'react';
import Proptypes from 'prop-types';
import { useGlobalContext } from '../../context/globalContext';
import './Breadcrumb.sass';

const Breadcrumb = ({ categories }) => {
  const { breadcrumb, setBreadcrumb } = useGlobalContext();
  const DEFAULT_BREADCRUMB = 'Electronica Audio y Video > iPod > Reproductores > Ipod touch > 32 GB';

  useEffect(() => {
    if (categories.length && setBreadcrumb) {
      setBreadcrumb(categories.slice(0, 4).reduce((x, y) => `${x} > ${y}`));
      localStorage.setItem('breadcrumb', breadcrumb);
    }
  }, [breadcrumb, categories, setBreadcrumb]);

  return (
    <span className="breadcrumb__container">
      {breadcrumb || localStorage.getItem('breadcrumb') || DEFAULT_BREADCRUMB}
    </span>
  );
};

Breadcrumb.propTypes = {
  categories: Proptypes.arrayOf(Proptypes.string),
};

Breadcrumb.defaultProps = {
  categories: [],
};

export default Breadcrumb;
