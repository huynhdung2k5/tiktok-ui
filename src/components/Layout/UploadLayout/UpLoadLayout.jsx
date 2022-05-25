import React from 'react';
import Header from '../components/Header';

const UpLoadLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default UpLoadLayout;
