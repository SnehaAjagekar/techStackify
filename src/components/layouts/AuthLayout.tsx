import React, { FC, ReactNode } from 'react';

interface ProtectedProps {
  children: ReactNode;
  authentication: boolean;
}

const Protected: FC<ProtectedProps> = ({ children, authentication = true}) => {
  return (
    <>
       {children}
       {authentication}
    </>
  );
}

export default Protected;
