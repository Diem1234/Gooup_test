import React, { createContext, useState } from 'react';

// Bước 1: Tạo ngữ cảnh
const CounterContext = createContext();

// Bước 2: Định nghĩa nhà cung cấp
const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };
  const decrementCount = () => {
    setCount(prevCount => prevCount - 1);
  };
  return (
    <CounterContext.Provider value={{ count, incrementCount,decrementCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterContext, CounterProvider };