import React, {
    createContext, useContext, useState, useEffect, useMemo,
  } from 'react';
  
const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [breadcrumb, setBreadcrumb] = useState(null);
    const [loading, setLoading] = useState(false);

    const toggleLoading = async (asyncFunc) => {
        setLoading(true);
        const response = await asyncFunc();
        setLoading(false);
        
        return response;
    }

    const value = useMemo(() => ({
        loading,
        toggleLoading,
        breadcrumb,
        setBreadcrumb,
    }), [breadcrumb, loading]);

    return <GlobalContext.Provider value={value} {...props} />;
};

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobalContext should be inside provider UserContext');
    }

    return context;
};