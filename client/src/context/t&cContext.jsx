import React, { createContext, useState } from 'react';

// Create the context
const TnCContext = createContext();

// Create the provider component
export const TnCContextProvider = ({ children }) => {
    const [showTnC, setShowTnC] = useState(false);

    return (
        <TnCContext.Provider value={{ showTnC, setShowTnC }}>
            {children}
        </TnCContext.Provider>
    );
};

export default TnCContext;