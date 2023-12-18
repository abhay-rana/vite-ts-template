import React from 'react';
import { Link } from 'wouter';

const HomeScreen: React.FC = () => {
    return (
        <>
            <div className="flex  h-full flex-col items-center justify-center">
                <div>Home Screen</div>
                <div className="mt-10 flex flex-col gap-4">
                    <Link to="/button">Button Components</Link>
                </div>
            </div>
        </>
    );
};

export default HomeScreen;
