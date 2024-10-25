import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/MainMenu.css';

const MainMenu = () => {
    const navigate = useNavigate();

    return (
        <div className="main-menu">
            <div className="admin-corner">
                <button
                    onClick={() => navigate('/admin-login')}
                    className="admin-button"
                >
                    Admin
                </button>
            </div>
            <div className="content-container">
                <h1 className="main-title">¡Gana Hasta 1M De Pesos!</h1>
                <div className="button-container">
                    <button
                        onClick={() => navigate('/login')}
                        className="menu-button"
                    >
                        Log In
                    </button>
                    <button
                        onClick={() => navigate('/signup')}
                        className="menu-button"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};