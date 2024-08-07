import React, {useState, useEffect} from 'react'

const WidthContext = React.createContext();

export const WidthContextProvider = ({ children }) => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <WidthContext.Provider value={{ width }}>
            {children}
        </WidthContext.Provider>
    );
}

export default WidthContext;