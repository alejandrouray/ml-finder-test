import React, {
    createContext, useContext, useState, useEffect, useMemo,
  } from 'react';
  
const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [breadcrumb, setBreadcrumb] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const value = useMemo(() => ({
        breadcrumb,
        setBreadcrumb,
    }), [breadcrumb]);

    return <GlobalContext.Provider value={value} {...props} />;
};

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobalContext should be inside provider UserContext');
    }

    return context;
};