import React from 'react';

interface LogoutButtonProps {
    onLogout: () => void;
    children?: React.ReactNode;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout, children }) => {
    return (
        <button onClick={onLogout} type="button">
            {children || 'Logout'}
        </button>
    );
};

export default LogoutButton;