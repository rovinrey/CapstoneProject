import React, { createContext, useState, useContext, type ReactNode  } from 'react';

// 1. Define the shape of the context data
interface BeneficiaryContextType {
  totalBeneficiaries: number;
  incrementBeneficiaryCount: (count?: number) => void;
  setInitialBeneficiaryCount: (count: number) => void;
}

// 2. Create the Context object, initializing with a default/dummy object 
// that matches the defined type, plus an empty function for the setters.
const BeneficiaryContext = createContext<BeneficiaryContextType>({
  totalBeneficiaries: 0,
  incrementBeneficiaryCount: () => {},
  setInitialBeneficiaryCount: () => {},
});

// Custom hook to easily use the context
export const useBeneficiaryContext = () => useContext(BeneficiaryContext);

// Interface for Provider props
interface BeneficiaryProviderProps {
    children: ReactNode;
}

export const BeneficiaryProvider: React.FC<BeneficiaryProviderProps> = ({ children }) => {
  const [totalBeneficiaries, setTotalBeneficiaries] = useState<number>(0); 

  const incrementBeneficiaryCount = (count: number = 1) => {
    setTotalBeneficiaries(prevCount => prevCount + count);
  };
  
  const setInitialBeneficiaryCount = (count: number) => {
      setTotalBeneficiaries(count);
  };

  return (
    <BeneficiaryContext.Provider 
      value={{ 
        totalBeneficiaries, 
        incrementBeneficiaryCount,
        setInitialBeneficiaryCount 
      }}
    >
      {children}
    </BeneficiaryContext.Provider>
  );
};