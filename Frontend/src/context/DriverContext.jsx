import { createContext, useState, useContext } from "react";

export const driverDataContext = createContext();

const DriverContext = ({ children }) => {
    const [driver, setDriver] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateDriver = (driverData) => {
        setDriver(driverData);
    }
    
    const value = {
        driver,
        setDriver,
        updateDriver,
        isLoading,
        setIsLoading,
        error,
        setError
    }
    return (
        <div>
            <driverDataContext.Provider value={value}>
                {children}
            </driverDataContext.Provider>
        </div>
    );
};

export default DriverContext;