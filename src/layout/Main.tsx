import React from 'react';
import { Outlet } from 'react-router-dom';

const Main: React.FC = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Main;